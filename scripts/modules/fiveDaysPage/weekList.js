import app from "../app.js";
import { capitalize } from "../utils.js";
import SelectedForecast from "./selectedForecast.js";

export default class WeekList {
    constructor(){
        this.app = null;
    }

    render(){
        this.app = app;
        const weekListHtml = `<ul class="day-week__list">${this.getWeekItems()}</ul>`;
        document.querySelector('.content').insertAdjacentHTML('beforeend', weekListHtml);
        this.handleClick();
    }

    getWeekItems(){
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let weekItemsHtml = '';
        app.filteredDays.length = 5;
        app.filteredDays.forEach((day, i) => {
            let className = null;
            if(i === 0){
                className = 'day-week__item--active';
            } else {
                className = '';
            }
            const index = Math.floor(day.length/2);
            const date = new Date(day[0].dt*1000);
            const dayOfWeek = date.getDay();
            const dayOfWeekName = dayNames[dayOfWeek];
            const icon = day[index].weather[0].icon;
            const temp = Math.round(day[index].main.temp);
            const dayOfMonth = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const weatherType = capitalize(day[index].weather[0].main);

            weekItemsHtml += `<li class="day-week__item ${className}" data-index="${i}">
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
    
    handleClick(){
        const weekIems = document.querySelectorAll('.day-week__item');
        
        weekIems.forEach((item) => {
            item.addEventListener('click', (e) => {
                const elemActive = document.querySelector('.day-week__item--active');
                const dayOfWeek = +e.target.closest('li').dataset.index;
                elemActive.classList.remove('day-week__item--active');
                e.target.closest('li').classList.add('day-week__item--active');
                this.displaySelectedWeather(dayOfWeek);
            })
        })
    }

    displaySelectedWeather(dayOfWeek){
        document.querySelector('.day-forecast__container').remove();
        new SelectedForecast(dayOfWeek).render();
    }
}