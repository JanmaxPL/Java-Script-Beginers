'use: strict';

console.log('Challenge 4')

// Coding Challenge #4 

// Let's improve Steven's tip calculator even more, this time using loops! 
// Your tasks: 
// 1. Create an array 'bills' containing all 10 test bill values 
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals') 
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for 
// loop to perform the 10 calculations! 
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52 
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
// tips and totals arrays 😉  
// Bonus: 
// 4.  Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
// an argument. This function calculates the average of all numbers in the given 
// array. This is a difficult challenge (we haven't done this before)! Here is how to 
// solve it: 
// 4.1.  First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable 'sum' that starts at 0. Then loop over the 
// array using a for loop. In each iteration, add the current value to the 
// 'sum' variable. This way, by the end of the loop, you have all values 
// added together 
// 4.2.  To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements) 
// 4.3.  Call the function with the 'totals' array 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let wartosc = 0;


function calcTip(wartosc) {
    let podsumowanie = 0;
    if (wartosc > 50 && wartosc < 300) {
        podsumowanie = wartosc * 0.15;
    } else {
        podsumowanie = wartosc * 0.20;
    }
    return podsumowanie;
};

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
    console.log(`Rachunek bazowy wynosi ${bills[i]} napiwek wynosi ${tips[i]}, co daje ${totals[i]} `);
}

console.log(tips);
console.log(totals);

let sum = 0;

function calcAverage(arr) {
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        //console.log(sum);
    };
    avg = sum / arr.length;

    return console.log(avg);
};

calcAverage(bills);
calcAverage(tips);
calcAverage(totals);


