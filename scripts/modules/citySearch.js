import app from "./app.js";
import { apiKey, url } from "./constants.js";
import ErrorPage from "./errorPage/erorPage.js";
import location from "./location.js";
import { filteredDays } from "./utils.js";

export default class CitySearch {
    constructor(){
        this.form = null;
    }

    render(cityName){
        const searchCityContainer = `<div class="search-city__section">
            <form class="search-city__bar-wrapper">
                <img src="icons/special/search.svg" alt="search icon" class="search-icon">
                <input type="text" class="search-city__bar" value="${cityName}">
                <img src="icons/special/location.svg" alt="location icon" class="location-icon">
            </form>
            <div class="user-icon__holder">
                <img src="./images/avatar.png" alt="user avatar" class="user-icon">
            </div>
        </div>`;

        document.querySelector('.content').insertAdjacentHTML('afterbegin', searchCityContainer);
        this.form = document.querySelector('.search-city__bar-wrapper');
        this.handleSubmit();
    }

    handleSubmit(){
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const input = this.form.querySelector('input');
            this.cityName = input.value;
            this.findCityByName(this.cityName)
                .then(() => {
                    this.getWeatherInfo('weather').then((currentWeather) => {
                        app.currentWeather = currentWeather;
                        console.log(currentWeather)
                    });
                    this.getWeatherInfo('forecast').then((fiveDaysWeather) => {
                        app.fiveDaysWeather = fiveDaysWeather;
                        app.filteredDays = filteredDays(fiveDaysWeather.list);
                        app.clearPage();
                        app.todayPage.render();
                    }); 
                })
        })
    }

    findCityByName(cityName){
        return new Promise((resolve, reject) => {
            const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${apiKey}`;
            fetch(requestUrl)
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    if(data.length){
                        this.latitude = data[0].lat;
                        this.longtitude = data[0].lon;
                        location.latitude = this.latitude;
                        location.longtitude = this.longtitude;
                        resolve();
                    } else {
                        new ErrorPage(cityName).render();
                    }
                })
                .catch((error)=>{
                    console.error(error)
                    reject()
                })
        })
    }

    getWeatherInfo(requestType){
        const requestUrl = `${url}${requestType}?lat=${this.latitude}&lon=${this.longtitude}&units=metric&appid=${apiKey}`;
        return new Promise((resolve) => {
            fetch(requestUrl)
                .then((response) => {
                    return response.json();
                })
                .then (data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })  
        })
    }
}

