
export const capitalize = function(string){
    return string.replace(string[0], string[0].toUpperCase());
}

export const filteredDays = function(timeStamps){
    const groupedByDay = [];
    let currentGroup = [];
    
    for (let i = 0; i < timeStamps.length; i++) {
        if (i > 0 && new Date(timeStamps[i].dt*1000).getDate() === new Date(timeStamps[i - 1].dt*1000).getDate()) {
            currentGroup.push(timeStamps[i]);
        } else {
            currentGroup = [timeStamps[i]];
            groupedByDay.push(currentGroup);
        }
    }

    return groupedByDay;
}

export const findCityByName = function(cityName){
    
}
 