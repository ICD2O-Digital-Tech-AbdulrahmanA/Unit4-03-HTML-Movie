"use strict";
/**
 * This function checks if the temperature is hot or cold.
 */
function calculate () {
    // turn user input into variables
    let age = parseInt(document.getElementById('age').value);
    let display = ""
    if (age < 8) {
            display = ("You cannot go see a movie alone, please go get a guardian.");
        } else if (age >= 8 && age <= 10) {
            display = ("You can go see G movies alone");
        } else if (age > 10 && age <= 13) {
            display = ("You can go see PG movies alone");
        } else if (age > 13 && age < 17) {
            display = ("You can go see PG-13 movies alone.");
        } else if (age >= 17) {
            display = ("You can go see restricted movies alone.");
        } else {
            display = ("Sorry, please enter a valid age.");
        }


    // process
    document.getElementById('MovieAge').innerHTML = display
}