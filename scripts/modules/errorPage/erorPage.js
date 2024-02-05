import app from "../app.js";

class ErrorPage {
    constructor(cityName){
        this.pageHtml = '';
        this.cityName = cityName;
        this.wrapper = document.querySelector('.content');
        this.btn = null;
    }

    render(){
        this.wrapper.classList.add('error-page');
        if(innerWidth < 768){
            document.querySelector('.header').remove();
            this.pageHtml += `<img class="error-page__img" 
                                src="images/error-small.png" alt="404 Image">
                            `;
        }

        this.pageHtml += `  <div class="error-page__text">
                                <div class="error-page__header">OOPS!</div>
                                <div>${this.cityName} not found.<br>Please, enter another location</div>
                            </div>
                            <button class="error-page__btn">Go back to main page</button>
                        `;

        this.wrapper.innerHTML = `${this.pageHtml}`;
        this.eventHandler();
    }

    eventHandler(){
        this.btn = this.wrapper.querySelector('.error-page__btn');
        const appWrapper = document.querySelector('.app__wrapper');
        this.btn.addEventListener('click', () => {
            appWrapper.innerHTML = '';
            app.init();
        })
    }
}

export default ErrorPage;