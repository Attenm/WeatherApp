import app from "../app.js";
import { capitalize } from "../utils.js";

export default class WeekList {
    constructor(){
        this.app = null;
    }

    render(){
        this.app = app;
        console.log(app.filteredDays)
        const weekListHtml = `<ul class="day-week__list">${this.getWeekItems()}</ul>`;
        document.querySelector('.content').insertAdjacentHTML('beforeend', weekListHtml);
    }

    getWeekItems(){
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let weekItemsHtml = '';
        app.filteredDays.length = 5;
        app.filteredDays.forEach((day) => {
            const index = Math.floor(day.length/2);
            const date = new Date(day[0].dt*1000);
            const dayOfWeek = date.getDay();
            const dayOfWeekName = dayNames[dayOfWeek];
            const icon = day[index].weather[0].icon;
            const temp = Math.round(day[index].main.temp);
            const dayOfMonth = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const weatherType = capitalize(day[index].weather[0].description);

            weekItemsHtml += `<li class="day-week__item">
            <div class="day-week__name">${dayOfWeekName}</div>
            <img class="day-week__weather-icon" src="./icons/weather-icons/${icon}.png" alt="weather icon">
            <div class="day-week__weather-type">${weatherType}</div>
            <div class="day-week__info">
                <div class="info__date">${dayOfMonth}.${month}</div>
                <div class="info__range">${temp}&deg;</div>
            </div>
        </li>`
        })
        return weekItemsHtml;
    }
}