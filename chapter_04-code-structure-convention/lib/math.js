/**
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: Tanmoy Choudhury
 * Reference: Sumit Saha (Learn with Sumit)
 * Date: 09/03/2024
 *
 */

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers
math.getRandomNumber = function getRandomNumber(min, max) {
    let mini = min;
    let maxi = max;
    mini = typeof mini === 'number' ? mini : 0;
    maxi = typeof maxi === 'number' ? maxi : 0;
    return Math.floor(Math.random() * (maxi - mini + 1) + min);
};

// Export the library
module.exports = math;
