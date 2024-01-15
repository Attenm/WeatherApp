
class Location {
    constructor(){
        this.navigator = navigator;
    }

    getUserLocation() {
        return new Promise((resolve, reject)=>{
            if('geolocation' in this.navigator){
                navigator.geolocation.getCurrentPosition((position)=>{
                    this.latitude = position.coords.latitude;
                    this.longtitude = position.coords.longitude;
                    console.log(this.latitude);
                    console.log(this.longtitude);
                    resolve();
                }, reject);
            } else {
                this.latitude = 49.0962944;
                this.longtitude = 33.4331904;
                resolve();
            }
        })
    }
}

const location = new Location();
export default location;