import location from "../location.js";
import { apiKey } from "../constants.js";

export default class NeatCities {
    render() {
        this.getNearCitiesWeather().then((citiesList)=>{
           this.citiesList = citiesList;
            this.getNearCitiesList()
        });
    }

    getNearCitiesList(){
        const nearCitiesHtml = `<ul class="near-cities__list">${this.getNearCitiesItems()}</ul>`
        document.querySelector('.content').insertAdjacentHTML('beforeend', nearCitiesHtml);
    }

    getNearCitiesItems(){
        let nearCitiesItems = '';
        this.citiesList.forEach(city => {
            const cityname = city.name;
            const weatherIcon = city.weather[0].icon;
            const weatherName = city.weather[0].main;
            const temp = Math.round(city.main.temp);
            
            nearCitiesItems += `<li class="near-cities__item">
            <div class="near-cities__name">${cityname}</div>
            <img class="near-cities__weather-icon" src="./icons/weather-icons/${weatherIcon}.png" alt="weather img">
            <div class="near-cities__weather-state">${weatherName}</div>
            <div class="near-cities__info">
                <span class="info__range">${temp}&deg;</span>
            </div>
        </li>`
        });
        return nearCitiesItems;
    }

    getNearCitiesWeather(){
        return new Promise(resolve => {
            const requestUrl = `https://api.openweathermap.org/data/2.5/find?lat=${location.latitude}&lon=${location.longtitude}&cnt=5&units=metric&appid=${apiKey}`;
            fetch(requestUrl)
                .then((currentWeather)=>{
                    return currentWeather.json();
                })
                .then((data)=>{
                    console.log(data.list.slice(2));
                    resolve(data.list.slice(2));
                })
        })
    }
}