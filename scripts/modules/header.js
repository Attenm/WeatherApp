
export default class Header{
    constructor() {
        this.appWrapper = document.querySelector('.app__wrapper');
    }

    render(){
        const headerHtml = `<div class="header">
            <div class="navigation">
                <a href="index.html" class="logo__container">
                    <img src="icons/weather-icons/moon-partially-cloudy.png" alt="weather app logo" class="logo">
                </a>
                <ul class="weather-range__list">
                    <li class="weather-range__item weather-range__item--active">Сьогодні</li>
                    <li class="weather-range__item">6 днів</li>
                </ul>
            </div>
            <div class="burger-menu__icon-holder">
                <img src="icons/special/burger.svg" class="burger-menu-icon" alt="burger menu icon">
            </div>
        </div>`;

        this.appWrapper.insertAdjacentHTML('afterbegin', headerHtml);
    }
}