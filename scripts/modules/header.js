import app from './app.js';


export default class Header{
    constructor() {
        this.appWrapper = document.querySelector('.app__wrapper');
        this.navigation = null;
        this.app = null;
    }

    render(){
        this.app = app;
        const headerHtml = `<div class="header">
            <div class="navigation">
                <a href="index.html" class="logo__container">
                    <img src="icons/weather-icons/03n.png" alt="weather app logo" class="logo">
                </a>
                <ul class="weather-range__list">
                    <li class="weather-range__item weather-range__item--active" data-weathertype="weather">Сьогодні</li>
                    <li class="weather-range__item" data-weathertype="forecast">5 днів</li>
                </ul>
            </div>
            <div class="burger-menu__icon-holder">
                <img src="icons/special/burger.svg" class="burger-menu-icon" alt="burger menu icon">
            </div>
        </div>`;

        this.appWrapper.insertAdjacentHTML('afterbegin', headerHtml);

        this.navigation = document.querySelector('.weather-range__list');
        this.handleEvent();
    }

    handleEvent(){
        this.navigation.addEventListener('click', (e) => {
            if(e.target.matches('.weather-range__item')){
                this.toggleStyles(e);
                const forecastType = e.target.dataset.weathertype;
                if(forecastType === "weather"){
                    this.app.fiveDaysPage.remove();
                    this.app.todayPage.render();
                } else {
                    this.app.todayPage.remove();
                    this.app.fiveDaysPage.render();
                }
            }
        })
    }

    toggleStyles(e){
        [...e.target.closest('ul').children].forEach(navItem => {
            navItem.classList.remove('weather-range__item--active');
        });
        e.target.classList.add('weather-range__item--active');
    }
}