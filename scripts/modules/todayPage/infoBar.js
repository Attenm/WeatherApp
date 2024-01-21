import app from "../app.js";

export default class InfoBar {
    constructor(){
        this.app = null;
    }
     
    render(){
        this.app = app;
        const humidity = app.currentWeather.main.humidity;
        const windSpeed = Math.round(app.currentWeather.wind.speed);

        const infoBarList = `<ul class="info-bar__list">
            <li class="info-bar__item">
                <img class="info-bar__icon" src="./icons/weather-icons/humidity.png" alt="humidity icon">
                <span class="info-bar__value">${humidity}%</span>
            </li>
            <li class="info-bar__item">
                <img class="info-bar__icon" src="./icons/weather-icons/wind.png" alt="wind speed icon">
                <span class="info-bar__value">${windSpeed} km/h</span>
            </li>
        </ul>`;
        
        document.querySelector('.content').insertAdjacentHTML('beforeend', infoBarList);
    }
}