import CitySearch from "../citySearch.js";
import app from "../app.js";
import WeatherImage from "../todayPage/imageWeather.js";
import InfoBar from "../todayPage/infoBar.js";
import TodayWeather from "../todayPage/weatherToday.js";
import NearCitiesSearch from "../todayPage/nearCitiesSearch.js";
import NeatCities from "../todayPage/nearCities.js";

export default class todayPage {
    constructor(){
        this.wrapper = document.querySelector('.content');
        this.citySearch = new CitySearch();
        this.cityName = null;
        this.weatherImage = new WeatherImage();
        this.infoBar = new InfoBar();
        this.todayWeatherBox = new TodayWeather();
        this.nearCitiesSearch = new NearCitiesSearch();
        this.nearCities = new NeatCities();
    }

    render(){
        this.cityName = app.currentWeather.name;
        this.citySearch.render(this.cityName);
        this.weatherImage.render();
        this.infoBar.render();
        this.todayWeatherBox.render();
        this.nearCitiesSearch.render();
        this.nearCities.render();
    }

    remove(){
        this.wrapper.remove();
    }
}