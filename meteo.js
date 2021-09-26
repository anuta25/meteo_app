const city = document.querySelector("#search-box");

const baseUrl = "http://api.weatherapi.com/v1/current.json"
const key = "f27f5e73e6fe421ab82121715212409"

const button = document.querySelector("#search-button");
button.addEventListener("click", () => {
    const query = "?key=" + key + "&q=" + city.value;
    const link = baseUrl + query;
    fetch(link)
        .then(response => {
            return response.json();
        }).then(result)
})

function result(response) {
    console.log(response)
    const loc = document.querySelector(".city");
    loc.innerText = response.location.name + ", " + response.location.region + ", " + response.location.country;
    const temp = document.querySelector(".temperature");
    temp.innerHTML =  response.current.temp_c + "&#8451;"
    const icon = document.querySelector(".icon");
    icon.src = "http:" + response.current.condition.icon;
    console.log(icon.src)
}

