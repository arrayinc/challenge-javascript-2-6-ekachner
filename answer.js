// *** YOUR ANSWER BELOW ***

const OUNCES_WATER_TO_CUBIC_INCHES = 9 / 5;
const CUBIC_INCHES_TO_OUNCES_OIL = 0.39;
const GRAMS_PER_OUNCE = 28.35;

function waterToOil(ouncesOfWater){
    return (ouncesOfWater * OUNCES_WATER_TO_CUBIC_INCHES * CUBIC_INCHES_TO_OUNCES_OIL).toFixed(2) + " oz. oil needed.";
}

function ounceToGrams(ounces){
    return "= " + ounces * GRAMS_PER_OUNCE + " grams.";
}

console.log(waterToOil(6.1));
console.log(ounceToGrams(13));