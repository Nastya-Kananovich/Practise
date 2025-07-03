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
