import { DOES_NOT_EXIST } from '../../utils';

export function binarySearch<T> (array: T[], value: T) {
    // binary search only works on sorted array
    const sortedArray = array.sort((a: any, b: any) => a - b);
    let start = 0;
    let end = sortedArray.length - 1;
    let mid = Math.floor((start + end) / 2);

    // while starts does not meet the end
    while (start <= end) {
        // if the given value is less than the current middle
        // shift our end to be one less than middle
        if (value < sortedArray[mid]) {
            end = mid - 1;
        // if the given value is greater than the current middle
        // shift our start to be one more than middle
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return sortedArray[mid] === value ? mid : DOES_NOT_EXIST;
}

export function binarySearchRecursive<T> (array: T[], value: T, start: number, end: number): number {
    // binary search only works on sorted array
    const sortedArray = array.sort((a: any, b: any) => a - b);
    // start, middle and end index
    let mid = Math.floor((start + end) / 2);

    // base condition
    if (start > end) return -1;
    
    // if given value matches value at mid, return mid
    if (sortedArray[mid] === value) return mid;

    // if mid value is greater than given value, search in the left half of mid
    if (sortedArray[mid] > value) {
        return binarySearchRecursive(sortedArray, value, start, mid - 1);
    // if mid value is less than given value, search in the right half of mid
    } else {
        return binarySearchRecursive(sortedArray, value, mid + 1, end);
    }
}