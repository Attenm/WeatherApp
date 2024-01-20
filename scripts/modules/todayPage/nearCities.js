
export default class NeatCities {
    render() {
        const nearCitiesHtml = `<ul class="near-cities__list">
        <li class="near-cities__item">
            <div class="near-cities__name">Черкаси</div>
            <img class="near-cities__weather-icon" src="./icons/weather-icons/heavy-rain.png" alt="heavy rain img">
            <div class="near-cities__weather-state">Дощ</div>
            <div class="near-cities__info">
                <span class="info__date">15.01</span>
                <span class="info__range">-5-0</span>
            </div>
        </li>
        <li class="near-cities__item">
            <div class="near-cities__name">Черкаси</div>
            <img class="near-cities__weather-icon" src="./icons/weather-icons/heavy-rain.png" alt="heavy rain img">
            <div class="near-cities__weather-state">Дощ</div>
            <div class="near-cities__info">
                <span class="info__date">15.01</span>
                <span class="info__range">-5-0</span>
            </div>
        </li>
        <li class="near-cities__item">
            <div class="near-cities__name">Черкаси</div>
            <img class="near-cities__weather-icon" src="./icons/weather-icons/heavy-rain.png" alt="heavy rain icon">
            <div class="near-cities__weather-state">Дощ</div>
            <div class="near-cities__info">
                <div class="info__date">15.01</div>
                <div class="info__range">-5-0</div>
            </div>
        </li>
    </ul>`;

    document.querySelector('.content').insertAdjacentHTML('beforeend', nearCitiesHtml);
    }
}