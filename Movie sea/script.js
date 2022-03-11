const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");   //container divin icindeki seat classina ait olanlari da bu sekilde alabiliyorum.
const notOccupiedSeats = document.querySelector(".container .seat:not(.occupied)");   //container icindeki seat classina ait ama occupied clasina sahip olmayanlari aldik
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const movieSelectBox = document.getElementById("movie");

//once localStorage sonra selectBox
//initial value == movieSelectBox.value
//movieSelectBox.options[movieSelectBox.selectedIndex].value == movieSelectBox.value
//sayfa yuklenince en guncel movie seat price
let currentTicketPrice = localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice") : movieSelectBox.options[movieSelectBox.selectedIndex].value;


//movieIndex
//sayfa yuklenince en guncel movie index
let currentMovieIndex = localStorage.getItem("selectedMovieIndex") ? localStorage.getItem("selectedMovieIndex") : movieSelectBox.selectedIndex;


window.onload = () => {
    displaySeats();
    updateMovieInfo();
}

//change film and localStorage
movieSelectBox.addEventListener("change", (e) => {
    let ticketPrice = e.target.value; 
    let movieIndex = e.target.selectedIndex;
    console.log(movieIndex);
    updateMovieInfo();
    setMovieDataLocalStorage(ticketPrice, movieIndex);
});

//add to storage = movie her degistiginde localStorage daki degerlerini guncelledik
const setMovieDataLocalStorage = (ticketPrice, movieIndex) => {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", ticketPrice);
}


//capturing
container.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        console.log(e.target.classList)
    } 

    updateMovieInfo();    
});


//update paragraph and calculation
const updateMovieInfo = ()=> {
    let selectedSeats = document.querySelectorAll(".row .seat.selected"); //aralarinda bosluk varsa parent iliskisi var, ama bosluk yoksa ayni elemenler icindeki classlar. yani burda row seat ve selected in parenti, ama seat ve selected ayni elemente ait yazarken ikisi arasinda bozluk olmamasi lazim.


    //selected seat'i maple gez, allSeats'in icerisinde ariyorum, eger selected olan koltuk tum koltuklarin icerisinde varsa secili olan koltugun indexini al arraya at. Aslinda sayilan biletlerin indexini buluyoruz.
    let selectedSeatsIndexArray = [...selectedSeats].map(seat => [...allSeats].indexOf(seat));
    console.log(selectedSeatsIndexArray);

    //array ile yapilan islemi json.stingify ile localstorage da yaptik (local stoge string verileri kabul ettigindne bu islemi yaptik. local storage'a girerken jSON.stringify() ile stringe cevirip, cikarken de JSON.parse() ile de tekrar arraye cevirebiliyoruz)
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatsIndexArray));

    count.innerText = selectedSeatsIndexArray.length;
    total.innerText = selectedSeatsIndexArray.length * movieSelectBox.value;
    film.innerText = movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split("(")[0];
}


//after refresh get selectedSeats and add class "selected"
const displaySeats = () => {
    movieSelectBox.selectedIndex = currentMovieIndex;
    let selectedSeatsFromStorage = JSON.parse(localStorage.getItem("selectedSeats")); //string olani tekrar arraye ceviriyoruz
    console.log(selectedSeatsFromStorage);
    if(selectedSeatsFromStorage !== null && selectedSeatsFromStorage.length > 0){
        allSeats.forEach((seat, index) => {
            //selectedIndex.indexOf(index) == -1 ==> false
            //selectedIndex.indexOf(index) > -1 ==> true
            if(selectedSeatsFromStorage.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        })
    }
}