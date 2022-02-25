const taxRate = 0.18;
const shippingPrice = 15.0;
let products_cont = document.querySelector(".products")
let price= document.getElementById("price")
let name1= document.getElementById("name")
let quantity= document.getElementById("quantity")
let cart= document.getElementById("cart")

window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
    calculateCartTotal()
});

const createTask =()=>{
    return `
                    <div class="product">
                        <img src="img/photo1.png" alt="">
                        <div class="product-info">
                            <h2>${name1.value}</h2>
                            <div class="product-price">
                                <p><strong >${price.value}</strong> <span class="line-through">${price.value*1.1}</span></p>
                            </div>
                            <div class="quantity-controller">
                                <button>
                                    <i class="fas fa-minus"></i>
                                </button>
                                <p id="product-quantity">${quantity.value}</p> 
                                <button>
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="product-removal">
                                <button class="remove-product">
                                    Remove
                                </button>
                            </div>
                            <div class="product-line-price">${quantity.value*price.value}</div>
                        </div>
`
calculateProductTotal();
}


cart.addEventListener("click", ()=>{
    productsDiv.innerHTML+=createTask();
    console.log("alo");

})

//capturing
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e)=>{
    let quantityP = e.target.parentElement.parentElement.querySelector("#product-quantity");
    // console.log(quantityP);
    // console.log(event.target);
    //minus buttons
    if (e.target.classList.contains("fa-minus") || e.target == quantityP.parentElement.firstElementChild) {
        if (quantityP.innerText > 1) {
            quantityP.innerText--;
            //calculate Product and Cart Total
            calculateProductTotal(quantityP);
        }
        else{
            if(confirm("Product will be removed!")){
                quantityP.parentElement.parentElement.parentElement.remove();
                //calculateCartTotal
                calculateCartTotal();
            }
        }
        // console.log("minusBtn clicked");
    }

    //plus buttons
    else if(e.target.className == "fas fa-plus" || e.target == quantityP.parentElement.lastElementChild){
        quantityP.innerText++;
         //calculate Product and Cart Total
         calculateProductTotal(quantityP);

        // console.log("plusBtn clicked");
    }

    //remove buttons
    else if(e.target.className == "remove-product"){
        if (confirm("Product will be removed")) {
            quantityP.parentElement.parentElement.parentElement.remove();
            calculateCartTotal()
        }
        //calculateCartTotal

        // e.target.parentElement.parentElement.remove();
        // console.log("removeBtn clicked");

    }
    //others
    else{
        console.log("other elements clicked");
    }
})

const calculateProductTotal = (quantityP) =>{
    console.log(quantityP.innerText);
    let productPrice = quantityP.parentElement.parentElement.querySelector("strong");
    let productTotalPriceDiv = quantityP.parentElement.parentElement.querySelector(".product-line-price");

    productTotalPriceDiv.innerText = (quantityP.innerText * productPrice.innerText).toFixed(2);

    calculateCartTotal();
}

const calculateCartTotal = () =>{

    let productTotalPriceDivs = document.querySelectorAll(".product-line-price");
    // console.log(productTotalPriceDivs);
    let subtotal = 0;
    productTotalPriceDivs.forEach(eachProductTotalPriceDiv=>{
        subtotal += parseFloat(eachProductTotalPriceDiv.innerText)
    });
    /* console.log(subtotal); */
    let taxPrice = subtotal * localStorage.getItem("taxRate");
    /* console.log(taxPrice); */
    let shipping = (subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) :0);
    /* console.log(shipping); */
    let cartTotal = subtotal + taxPrice + shipping;
    /* console.log(cartTotal); */

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
}