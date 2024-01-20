import app from "../app.js";
import { capitalize } from "../utils.js";

export default class WeatherImage {
    render() {
        const weatherIcon = app.currentWeather.weather[0].icon;
        const curentTemp = Math.round(app.currentWeather.main.temp);
        const weatherType = capitalize(app.currentWeather.weather[0].description);
        const feelsLike = Math.round(app.currentWeather.main.feels_like);

        const weatherImage = `<div class="current-weather__container">
            <img src="icons/weather-icons/${weatherIcon}.png" alt="current weather icon" class="current-weather__icon">
            <div class="current-weather__info">
                <div class="info__temp">${curentTemp}&deg;</div>
                <div class="info__weather-state">${weatherType}</div>
                <div class="info__temp-range">Feels like: ${feelsLike}&deg;</div>
            </div>
        </div>`;

        document.querySelector('.content').insertAdjacentHTML('beforeend', weatherImage);
    }
}