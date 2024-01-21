import app from "../app.js";
import { capitalize } from "../utils.js";

export default class TodayWeather {
    constructor(){
        this.weatherWeek = [];
    }
    render(){
        this.weatherWeek = app.filteredDays;

        const todayWeatherHtml = `<div class="today-info__container">${this.getHeaderHtml()}${this.getInfoList()}</div>`;
        document.querySelector('.content').insertAdjacentHTML('beforeend', todayWeatherHtml)
    }

    getInfoItems(){
        let infoItems = '';

        this.weatherWeek[0].forEach(timeStamp => {
            const date = new Date(timeStamp.dt * 1000);
            const hours = date.getHours();
            const time = hours.toString().padStart(2, '0') + ':00';
            let timePeriod = '';
            if(hours >= 8 && hours < 12 ){
                timePeriod = 'Morning';
            } else if(hours >= 12 && hours < 18){
                timePeriod = 'Day';
            } else if(hours >= 18 && hours < 21){
                timePeriod = 'Evening'
            } else{
                timePeriod = 'Night';
            }
            const icon = timeStamp.weather[0].icon;
            const weatherType = capitalize(timeStamp.weather[0].description);
            const temperature = Math.round(timeStamp.main.temp);

            const infoItem = `<li class="today-info__content__item">
                <div class="today-info__hours">${time}</div>
                <div class="today-info__time">${timePeriod}</div>
                <img class="today-info__icon" src="icons/weather-icons/${icon}.png" alt="weather icon">
                <div class="today-info__weather-state">${weatherType}</div>
                <div class="today-info__temp-range">${temperature}&deg;</div>
            </li>`;
            infoItems += infoItem;
        })

        return infoItems;
    }

    getInfoList(){
        return `<ul class="today-info__content__list">${this.getInfoItems()}</ul>`;
    }

    getHeaderHtml(){
        const date = new Date();
        const day = date.getDate().toString().padStart('0', 2);
        const month = (date.getMonth().toString() + 1).padStart('0', 2);
        const year = date.getFullYear();
        return `<div class="today-info__header">
            Today
            <span class="today-info__date">${day}.${month}.${year}</span>
        </div>`;
    }
}