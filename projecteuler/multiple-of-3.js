/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

URL:  https://projecteuler.net/problem=1
#projecteuler 
#javascript */

const sumNaturalNumbers = (multiple1, multiple2) => {
    let sum = 0;
    for (let index = 1; index < 1000; index++) if (index % multiple1  === 0 || index % multiple2 === 0) sum += index;
    return sum;
}
console.log('---->', sumNaturalNumbers(3, 5)); 
