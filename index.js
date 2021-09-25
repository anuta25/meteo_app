
const searchValue = document.querySelector('input').value;


const requestCity = async (city) => {
    const baseURL = "http://api.weatherapi.com/v1/current.json";
    const key = 'f27f5e73e6fe421ab82121715212409';
    const query = `?key=${key}&q=${city}` 

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    console.log(data)
    return data;
}