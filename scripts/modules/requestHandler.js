import {url, apiKey} from './constants.js'
import location from "./location.js";

export default class RequestHandler {

    getData(requestType) {
        return location.getUserLocation().then(()=>{
            
            const requestUrl = `${url}${requestType}?lat=${location.latitude}&lon=${location.longtitude}&appid=${apiKey}`;
            return new Promise((resolve, reject) => {
                fetch(requestUrl)
                    .then((response) => {
                        return response.json();
                    })
                    .then (data => {
                        resolve(data);
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        });
    }
}