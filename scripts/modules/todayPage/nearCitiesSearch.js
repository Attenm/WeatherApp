
export default class NearCitiesSearch {
    render() { 
        const nearSearchHtml = `<div class="near-cities__bar-wrapper">
            <input type="text" class="near-cities__search-bar" value="Міста поруч">
            <img src="icons/special/search.svg" alt="search icon" class="near-cities__search-icon">
        </div>`;
        
        document.querySelector('.content').insertAdjacentHTML('beforeend', nearSearchHtml);

    }
}