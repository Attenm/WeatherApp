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
            nearCitiesItems += `<li class="near-cities__item">
            <div class="near-cities__name">${city.name}</div>
            <img class="near-cities__weather-icon" src="./icons/weather-icons/${city.weather[0].icon}.png" alt="weather img">
            <div class="near-cities__weather-state">${city.weather[0].main}</div>
            <div class="near-cities__info">
                <span class="info__range">${Math.round(city.main.temp)}&deg;</span>
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