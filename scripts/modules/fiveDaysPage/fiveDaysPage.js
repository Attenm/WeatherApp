import app from "../app.js";
import CitySearch from "../citySearch.js";

export default class FiveDaysPage {
    constructor(){
        this.wrapper = null;
        this.citySeach = new CitySearch();
        this.app = null;
        this.cityName = null;
    }

    render(){
        this.wrapper = document.querySelector('.content');
        this.app = app;
        this.cityName = this.app.currentWeather.name;
        this.citySeach.render(this.cityName);
    }

    remove(){
        this.wrapper.innerHTML = '';
    }
}