import Header from "./header.js";
import RequestHandler from "./requestHandler.js";

class App {
    constructor(){
        this.header = new Header();
        this.RequestHandler = new RequestHandler();
    }

    init(){
        this.header.render();
        this.RequestHandler.getData('weather').then((response)=>{
            console.log(response)
        });
        
    }
}
const app = new App();
export default app;