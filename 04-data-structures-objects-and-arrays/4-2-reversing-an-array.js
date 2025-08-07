/* Reversing an Array

Arrays have a reverse method that changes the array by inverting the order in 
which its elements appear. For this exercise, write two functions, reverseArray 
and reverseArrayInPlace. The first, reverseArray, should take an array as its 
argument and produce a new array that has the same elements in the inverse 
order. The second, reverseArrayInPlace, should do what the reverse method does: 
modify the array given as its argument by reversing its elements. Neither may 
use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous 
chapter, which variant do you expect to be useful in more situations? Which one 
runs faster?

*/

function reverseArray(arr) {
    let reversed = []

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }

    return reversed
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let opposite = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = arr[i]
        arr[i] = opposite
    }

    return arr
}


let myArray = ["A", "B", "C"]
console.log(reverseArray(myArray)) // → ["C", "B", "A"]
console.log(myArray) // → ["A", "B", "C"]

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue) // → [5, 4, 3, 2, 1]
