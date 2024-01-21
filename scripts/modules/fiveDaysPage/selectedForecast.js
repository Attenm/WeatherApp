import app from "../app.js";
import { capitalize } from "../utils.js";

export default class SelectedForecast {
    constructor(day = 0){
        this.filteredDays = null;
        this.selectedDay = day;
        this.selectedDayWeather = null;
        this.dayNames    = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }

    render(){
        this.filteredDays = app.filteredDays;
        this.selectedDayWeather = this.filteredDays[this.selectedDay];

        const dayForecastHtml = `<div class="day-forecast__container">
                ${this.getDayForecastWrapper()}
                ${this.getDayForecastList()}
            </div>`;
        document.querySelector('.content').insertAdjacentHTML('beforeend', dayForecastHtml);
    }

    getDayForecastWrapper(){
        const date        = new Date(this.selectedDayWeather[0].dt*1000);
        const dayOfMonth  = date.getDate().toString().padStart(2,'0');
        const month       = (date.getMonth()+1).toString().padStart(2,'0');
        const dayOfWeek   = this.dayNames[date.getDay()];

        return `<div class="day-forecast__date-wrapper">
            <span class="date__current-date">${dayOfWeek}: ${dayOfMonth}.${month}</span>
            <img src="./icons/special/calendar.svg" alt="calendar icon" class="date__icon-calendar">
        </div>`;
    }

    getDayForecastList(){
        return `<ul class="day-forecast__list">${this.getDayForecastItems()}</ul>`
    }

    getDayForecastItems(){
        let dayForecastItemsHtml = '';

        this.selectedDayWeather.forEach(forecast => {
            const date = new Date(forecast.dt*1000);
            const hours = date.getHours().toString().padStart(2,'0');
            const weatherType = capitalize(forecast.weather[0].description);
            const icon = forecast.weather[0].icon;
            const temp = Math.round(forecast.main.temp);

            dayForecastItemsHtml += `<li class="day-forecast__item">
                <div class="day-forecast__weather-type">${weatherType}</div>
                <div class="day-forecast__time">${hours}:00</div>
                <img src="./icons/weather-icons/${icon}.png" alt="day forecast icon" class="day-forecast__icon">
                <div class="day-forecast__range">${temp}&deg;</div>
            </li>`
        })

        return dayForecastItemsHtml;
    }
}