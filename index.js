const returnFirstTwoDrivers = function (scuberDrivers) {
    return scuberDrivers.slice (0, 2)    
}
returnFirstTwoDrivers (['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function (scuberDrivers) {
    return scuberDrivers.slice (2, 4)    
}
returnLastTwoDrivers (['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

console.log(selectingDrivers [0](scuberDrivers))

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}
const fareDoubler = createFareMultiplier(2);  
const fareTripler = createFareMultiplier(3);  

function selectDifferentDrivers(scuberDrivers, selectingDrivers){
    return selectingDrivers(scuberDrivers)
}