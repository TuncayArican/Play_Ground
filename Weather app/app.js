const inputCity = document.getElementById("input");
const submitCity = document.getElementById("submit");
const cardContainer = document.getElementById("hava-kart");

async function get(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

submitCity.addEventListener("click", addToCard);

function addToCard(e) {
  console.log(inputCity.value);
  get(
    `http://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=ba52b65545262294c2c52a29b0949709&units=metric`
  )
    .then((result) => {
      console.log(result);
      cardContainer.innerHTML += `
        <div class="col">
         <div class="card">
          <div class="card-body">
            <h5 class="card-title">${result.name}<sup>${result.sys.country}</sup></h5>
            <p class="card-text">
              <img src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="">
            </p>
            <p class="card-text">
              ${Math.round(result.main.temp)}
            </p>
            <p class="card-text">
            ${result.weather[0].description}
            </p>
          </div>
        </div>
       </div>
        `;
    })
    .catch((err) => {});

  e.preventDefault();
}