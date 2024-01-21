import Header from "./header.js";
import RequestHandler from "./requestHandler.js";
import todayPage from "./todayPage/todayPage.js";
import { filteredDays } from "./utils.js";
import FiveDaysPage from "./fiveDaysPage/fiveDaysPage.js";

class App {
    constructor(){
        this.RequestHandler = new RequestHandler();
        this.header = new Header();
        this.todayPage = new todayPage();
        this.currentWeather = null;
        this.fiveDaysPage = new FiveDaysPage();
        this.contentContainer = null;
    }

    init(){
        const firstPromise = this.RequestHandler.getData('weather').then((currentWeather) => {
            this.currentWeather = currentWeather;
        });
        const secondPromise = this.RequestHandler.getData('forecast').then((fiveDaysWeather) => {
            this.fiveDaysWeather = fiveDaysWeather;
            this.filteredDays = filteredDays(this.fiveDaysWeather.list);
        });

        const promises = [firstPromise, secondPromise];

        Promise.all(promises).then(() => {
            this.header.render();
            console.log(this.fiveDaysWeather);
            console.log(this.currentWeather);
    
            const contentContainer = '<div class="content"></div>';
            document.querySelector('.app__wrapper').insertAdjacentHTML('beforeend', contentContainer);
            this.contentContainer = document.querySelector('.content');
            this.todayPage.render();
        })
    }

    clearPage(){
        this.contentContainer.innerHTML = '';
    }
}
const app = new App();
export default app;