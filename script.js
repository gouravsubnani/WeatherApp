let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apikey = "d3cd22b4761b6b51af14f139c0bcf2fb";
// sexy bitch
const city = document.querySelector('.input_box');

const values = document.querySelector('.task_container');
async function weatherReport(city){
    try{
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        const data = await response.json();
        console.log(data.name);

        let imgUpdate = document.querySelector('.img-wrapper')
        // values.innerHTML = '';
        imgUpdate.innerHTML = '';

        let temp = document.createElement("img");

        let textUpdate = document.querySelector(".city-name-wrap");
        textUpdate.innerHTML = data.name;

        let tempUpdate = document.querySelector(".temperature-wrap");
        tempUpdate.innerHTML = Math.round(data.main.temp) + "&degC";

        
        let imgUrl = "";
        if(data.weather[0].main == "Clear")
        {
            imgUrl = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain")
        {
            imgUrl = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            imgUrl = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            imgUrl = "images/mist.png";
        }
        
        temp.src = imgUrl;
        imgUpdate.innerHTML += temp.outerHTML;
        
        localStorage.setItem("data" , data.name);
    }
    catch(error)
    {
        console.log(error);
    }
}

function addTask(){
    weatherReport(city.value);
}

document.addEventListener("DOMContentLoaded" , () => {
    let storedCity = localStorage.getItem("data");
    if(storedCity)
    {
        city.value = storedCity;
        weatherReport(city.value);
    }
})


