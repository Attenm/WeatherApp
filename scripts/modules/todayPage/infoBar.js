import app from "../app.js";

export default class InfoBar {
    render(){
        // const precipitationPropability = ;
        // const dewPoint = ;
        //const windSpeed = app.wind.speed;
        const infoBarList = `<ul class="info-bar__list">
            <li class="info-bar__item">
                <img class="info-bar__icon" src="./icons/weather-icons/humidity.png" alt="humidity icon">
                <span class="info-bar__value">6%</span>
            </li>
            <li class="info-bar__item">
                <img class="info-bar__icon" src="./icons/weather-icons/wind.png" alt="wind speed icon">
                <span class="info-bar__value">19 km/h</span>
            </li>
        </ul>`;
        
        document.querySelector('.content').insertAdjacentHTML('beforeend', infoBarList);
    }
}