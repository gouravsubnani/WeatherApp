const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apikey = "d3cd22b4761b6b51af14f139c0bcf2fb";

const city = document.querySelector('.input_box');

const values = document.querySelector('.task_container');

async function weatherReport(city){
    try{
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        const data = await response.json();
        console.log(data.name);
    }
    catch(error)
    {
        console.log(error);
    }
}

function addTask(){

    let temp = document.createElement("img");
    const imgUrl = "";
    if(data.weather[0].main == "Clear")
    {
        imgUrl = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain")
    {

    }
    weatherReport(city.value);
}