// *** YOUR ANSWER BELOW ***

const OUNCES_WATER_TO_CUBIC_INCHES = 9 / 5;
const CUBIC_INCHES_TO_OUNCES_OIL = 0.39;

function convertWaterOuncesToOil(ouncesOfWater){
    let cubicInches = ouncesOfWater * OUNCES_WATER_TO_CUBIC_INCHES;
    let ouncesInOil = cubicInches * CUBIC_INCHES_TO_OUNCES_OIL;
    return ouncesInOil;
}
console.log(convertWaterOuncesToOil(6.1));