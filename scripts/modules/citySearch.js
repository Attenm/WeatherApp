export default class CitySearch {

    render(cityName){
        const searchCityContainer = `<div class="search-city__section">
            <div class="search-city__bar-wrapper">
                <img src="icons/special/search.svg" alt="search icon" class="search-icon">
                <input type="text" class="search-city__bar" value="${cityName}">
                <img src="icons/special/location.svg" alt="location icon" class="location-icon">
            </div>
            <div class="user-icon__holder">
                <img src="./images/avatar.png" alt="user avatar" class="user-icon">
            </div>
        </div>`;

        document.querySelector('.content').insertAdjacentHTML('afterbegin', searchCityContainer);
    }
}

