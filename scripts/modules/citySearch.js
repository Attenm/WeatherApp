export default class CitySearch {
    constructor(){
        this.form = null;
    }

    render(cityName){
        const searchCityContainer = `<div class="search-city__section">
            <form class="search-city__bar-wrapper">
                <img src="icons/special/search.svg" alt="search icon" class="search-icon">
                <input type="text" class="search-city__bar" value="${cityName}">
                <img src="icons/special/location.svg" alt="location icon" class="location-icon">
            </form>
            <div class="user-icon__holder">
                <img src="./images/avatar.png" alt="user avatar" class="user-icon">
            </div>
        </div>`;

        document.querySelector('.content').insertAdjacentHTML('afterbegin', searchCityContainer);
        this.form = document.querySelector('.search-city__bar-wrapper');
        this.handleSubmit();
    }

    handleSubmit(){
        this.form.addEventListener('submit', () => {
            const input = this.form.querySelector('input');
            const cityName = input.value;
            findCityByName(cityName)
        })
    }

}

