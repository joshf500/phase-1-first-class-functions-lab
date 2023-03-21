// Code your solution in this file!
let names = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(names){return names.slice(0,2)}
const returnLastTwoDrivers = function(names){return names.slice(-2)}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(multiple){
    function multiplier(fare){
        return multiple*fare}
        return multiplier
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers =function(names,other){
    if (other==returnFirstTwoDrivers){
        return returnFirstTwoDrivers(names)
    }  
    if (other==returnLastTwoDrivers){
        return returnLastTwoDrivers(names)
}
}