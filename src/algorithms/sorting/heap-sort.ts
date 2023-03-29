/*
Heap sort is an in-place, non-stable, comparison-based sorting algorithm. It sorts the data in place and mutates the original data. It doesn't preserve the relative order or equal elements. If you have two elements with the same value in an unsorted collection, their relative order might be changed (or stay the same) in the sorted collection (non-stable). Finally, the elements are compared to each other to find their ordere (comparison-based). 
*/
import { swap } from "../../utils";

// we don't want to take the maximum value that we put at the end of the array and put it back at index 0. Hence why the if statements check to make sure the children aren't beyond the `length`
export function heapify<T>(array: T[], index: number, length: number = array.length) {
    let largest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    // compare element to its left and right child
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    // if the parent node isn't the largest element, swap it with the largest child
    if (largest !== index) {
        swap(array, index, largest);
        // continue to heapify down the heap
        heapify(array, largest, length);
    }

    return array;
}

export function heapSort<T>(array: T[]) {
    // max heapify the array
    let index = Math.floor(array.length / 2)
    for (let i = index; i >= 0; i--) {
        heapify(array, i);
    }

    // work backwards, moving max elements to the end of the array
    for (let i = array.length - 1; i > 0; i--) {
        // max element of unsorted section of array is at index 0, swap with element at last index in unsorted array
        swap(array, 0, i);
        // re-heapify array, from beginning to the end of the unsorted section
        heapify(array, 0, i);
    }

    return array;
}

