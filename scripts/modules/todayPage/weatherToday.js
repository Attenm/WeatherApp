import app from "../app.js";
import { capitalize } from "../utils.js";

export default class TodayWeather {
    constructor(){
        this.weatherWeek = [];
        this.slider = null;
        this.sliderLine = null;
        this.sliderItems - null;
        this.sliderPosition = 0;
        this.btnLeft = null;
        this.btnRight = null;
        this.timestampsAmount = null;
        this.weatherContainer = null;
    }
    render(){
        this.weatherWeek = app.filteredDays;
        this.timestampsAmount = this.weatherWeek[0].length;

        const todayWeatherHtml = `<div class="today-info__container">
                                    ${this.getHeaderHtml()}
                                    ${this.getInfoList()}
                                    </div>`;
        const content = document.querySelector('.content');
        content.insertAdjacentHTML('beforeend', todayWeatherHtml);

        this.resizeItems();

        if(innerWidth <= 768 && this.timestampsAmount > 4){
            this.createBtnRight();
            this.addClickHandler();
        }
    }

    createBtnLeft(){
        if(!document.querySelector('.today-info__btn--left')){
            const leftBtnHtml = `<span class="today-info__btn today-info__btn--left">
                                    <img src="icons/special/arrowright.svg"></img>
                                </span>`;
            this.weatherContainer.insertAdjacentHTML('afterbegin', leftBtnHtml);
            this.btnLeft = document.querySelector('.today-info__btn--left');
        };
    }

    createBtnRight(){
        if(!document.querySelector('.today-info__btn--right')){
            this.weatherContainer = document.querySelector('.today-info__container');
            const btnRightHtml = `<span class="today-info__btn today-info__btn--right">
            <img src="icons/special/arrowright.svg"></img>
            </span>`;
            this.weatherContainer.insertAdjacentHTML('beforeend', btnRightHtml);
            this.btnRight = document.querySelector('.today-info__btn--right');
        }
    }

    handleClick(e){
        if(e.target.matches('.today-info__btn') || e.target.closest('.today-info__btn')){
            this.sliderLine = document.querySelector('.today-info__content__list');
            const itemWidth = parseInt(getComputedStyle(this.sliderItems[0]).width);
            
            if( e.target === this.btnRight || e.target.parentNode === this.btnRight){
                this.sliderPosition -= itemWidth;
                this.createBtnLeft();
                console.log(-(itemWidth * this.timestampsAmount - itemWidth))
                if(this.sliderPosition <= -(itemWidth * 3)){
                    this.btnRight.remove();
                }
            }
            
            if (e.target.matches('.today-info__btn--left') || e.target.parentNode === this.btnLeft){
                this.sliderPosition += itemWidth;
                this.createBtnRight();
                if(this.sliderPosition >= 0){
                    this.btnLeft.remove();
                }
            }

            console.log(this.sliderPosition);
            this.sliderLine.style.transform = `translateX(${this.sliderPosition}px)`
        }
    }

    addClickHandler(){
        this.weatherContainer.addEventListener('click', (e) => {this.handleClick(e)});
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
            const weatherType = capitalize(timeStamp.weather[0].main);
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

    resizeItems(){ 
        this.slider = document.querySelector('.today-info__slider');
        this.sliderItems = this.slider.querySelectorAll('.today-info__content__item');
        const sliderWidth = getComputedStyle(this.slider).width;

        this.sliderItems.forEach(sliderItem => {
            sliderItem.style.minWidth = parseInt(sliderWidth) / 4 + 'px';
        });
    }

    getInfoList(){
        return `<div class="today-info__slider"><ul class="today-info__content__list">${this.getInfoItems()}</ul></div>`;
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