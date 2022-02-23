let minus= document.querySelectorAll(".fa-minus")
let plus= document.querySelectorAll(".fa-plus")
let quantity=document.querySelectorAll("#product-quantity")
let product_line_price=document.querySelectorAll(".product-line-price")
let remove=document.querySelectorAll(".remove-product")
let cart_subtotal=document.querySelectorAll("#cart-subtotal p")[1]
let cart_tax=document.querySelectorAll("#cart-tax p")[1]
let cart_total=document.querySelectorAll("#cart-total p")[1]
let cart_shipping=document.querySelectorAll("#cart-shipping p")[1]
let strong=document.querySelectorAll(".product-price p strong")
let subtotal=0;
let products = document.querySelectorAll(".product")
let button=document.querySelectorAll("#customer-form button")[0]
let name1=document.getElementById("name")
let quantity_new=document.getElementById("quantity")
let price1=document.getElementById("price")
let products_cont = document.querySelector(".products")
price()
const createTask=()=>{
    return `
                    <div class="product">
                        <img src="img/photo1.png" alt="">
                        <div class="product-info">
                            <h2>Vintage Backbag</h2>
                            <div class="product-price">
                                <p><strong >25.98</strong> <span class="line-through">34.99</span></p>
                            </div>
                            <div class="quantity-controller">
                                <button>
                                    <i class="fas fa-minus"></i>
                                </button>
                                <p id="product-quantity">1</p> 
                                <button>
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="product-removal">
                                <button class="remove-product">
                                    Remove
                                </button>
                            </div>
                            <div class="product-line-price">25.98</div>
                        </div>
`
}
price1.addEventListener("click", ()=>{
    products_cont.innerHTML+=createTask()
    let quantity=document.querySelectorAll("#product-quantity")
    console.log(quantity);

})

for (let i = 0; i < quantity.length; i++) {
    minus[i].addEventListener("click", ()=>{
        quantity[i].innerText=Number(quantity[i].innerText)-1;
        if(quantity[i].innerText==0){
        products[i].remove();
        product_line_price[i].innerText="0";
        }else {
            product_line_price[i].innerText=(Number(strong[i].innerText)*
            Number(quantity[i].innerText)).toFixed(2)
            }
            price()
})
    plus[i].addEventListener("click", ()=>{
        quantity[i].innerText=Number(quantity[i].innerText)+1;
        product_line_price[i].innerText=(Number(strong[i].innerText)*
        Number(quantity[i].innerText)).toFixed(2)
        price()
})
remove[i].addEventListener("click", ()=>{
    products[i].remove();
    product_line_price[i].innerText="0"
    price()
}
)
}

function price(){ 
        product_line_price.forEach(e => {
        subtotal+=Number(e.innerText)
        });
        if (subtotal==0) {
            cart_shipping.innerText=0
        }else{
            cart_shipping.innerText=15
        }
        cart_subtotal.innerText=subtotal.toFixed(2)
        cart_tax.innerText=((cart_subtotal.innerText)*0.18).toFixed(2);
        cart_total.innerText=(Number(cart_shipping.innerText)+Number(cart_tax.innerText)+Number(cart_subtotal.innerText)).toFixed(2)
        subtotal=0;
};
