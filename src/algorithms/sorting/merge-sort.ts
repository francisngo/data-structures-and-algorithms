/*
Merge sort is a sorting algorithm that works by dividing an array into smaller sub arrays, sorting each sub array, and then merging the sorted sub arrays back to gether to form the final sorted array.
Merge sort is good for sorting large datasets because it is relatively efficient and easy to implement. It is often used in conjunction with other algorithms, such as quicksort, to improve the overall performance of a sorting routine.
*/

// solution
function merge<T>(arr1: T[], arr2: T[]) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    // if there are additional values in the given arrays, push the rest
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort<T>(array: T[]) {
    if (array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let left: any = mergeSort(array.slice(0, middle));
    let right: any = mergeSort(array.slice(middle));
    return merge(left, right);
}

// tests
merge([1, 10, 50], [2, 14, 99, 100]); 
// [1, 2, 10, 14, 50, 99, 100];

mergeSort([10, 24, 76, 73, 72, 1, 9]);