/*Write a function that will take in any array and reverse it.
NOTES:
Array should be reversed in place! (no need to return it)
Usual builtins have been deactivated. Don't count on them.
You'll have to do it fast enough, so think about performances
*/
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}


const myArray = [10, 20, 30, 40, 50];
console.log("До:", myArray);

reverseArray(myArray);

console.log("После:", myArray);
