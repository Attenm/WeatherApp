import app from "../app.js";
import CitySearch from "../citySearch.js";
import SelectedForecast from "./selectedForecast.js";
import WeekList from "./weekList.js";

export default class FiveDaysPage {
    constructor(){
        this.wrapper = null;
        this.citySeach = new CitySearch();
        this.app = null;
        this.cityName = null;
        this.weekList = new WeekList();
        this.selectedForecast = new SelectedForecast();
    }

    render(){
        this.wrapper = document.querySelector('.content');
        this.app = app;
        this.cityName = this.app.currentWeather.name;
        this.citySeach.render(this.cityName);
        this.weekList.render();
        this.selectedForecast.render();
    }
}