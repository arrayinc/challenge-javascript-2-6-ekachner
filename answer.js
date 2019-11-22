// *** YOUR ANSWER BELOW ***

const OUNCES_WATER_TO_CUBIC_INCHES = 9 / 5;
const CUBIC_INCHES_TO_OUNCES_OIL = 0.39;
const GRAMS_PER_OUNCE = 28.35;

function waterToOil(gramsWater){
    return (gramsWater / GRAMS_PER_OUNCE * OUNCES_WATER_TO_CUBIC_INCHES * CUBIC_INCHES_TO_OUNCES_OIL * GRAMS_PER_OUNCE).toFixed(1) + " grams oil needed.";
}

console.log(waterToOil(172.93));
