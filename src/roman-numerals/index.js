/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    
    const romanNumerial = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}
    
    let lastStrIndex = roman.length - 1
    let decimal = romanNumerial[roman[lastStrIndex]];

    // Looping from back
    for(let i = lastStrIndex; i >= 0; i--){

        let current = romanNumerial[roman[i]];
        let next = romanNumerial[roman[i - 1]];

        if( next >= current){
            decimal += next;
        }else if(next < current){
            decimal -= next;
        }
    }

    return decimal;
    
}

module.exports = romanToDecimal;
