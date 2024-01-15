import Header from "./header.js";

class App {
    constructor(){
        this.header = new Header();
    }

    init(){
        this.header.render();
    }
}
const app = new App();
export default app;