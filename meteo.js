const city = document.querySelector("#search-box");

const baseUrl = "http://api.weatherapi.com/v1/current.json"
const key = "f27f5e73e6fe421ab82121715212409"

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", listenForClick)

const input = document.querySelector("#search-box");
input.addEventListener("keypress", listenForKeyPress)

function listenForKeyPress(event) {
    if (event.key == "Enter") {
        triggerFetchRequest();
    }
}
 
function listenForClick() {
    triggerFetchRequest();
}
 
function triggerFetchRequest() {
    const query = "?key=" + key + "&q=" + city.value;
    const link = baseUrl + query;
    fetch(link)
        .then(response => {
            return response.json();
        }).then(fetchWeather)
}

function fetchWeather(response) {
    console.log(response)
    const loc = document.querySelector(".city");
    loc.innerText = response.location.name + ", " + response.location.region + ", " + response.location.country;
    const temp = document.querySelector(".temperature");
    temp.innerHTML = "Temperature: " + response.current.temp_c + "&#8451;"
    const icon = document.querySelector(".icon");
    icon.src = "http:" + response.current.condition.icon;
    const hum = document.querySelector(".humidity");
    hum.innerText = "Humidity: " + response.current.humidity + "%";
    const description = document.querySelector(".description");
    description.innerText = response.current.condition.text;
    const date = document.querySelector(".date");
    date.innerText = response.location.localtime;
}