/*
Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order. Here order can be anything like increasing order or decreasing order.

Bubble sort compares the element from index 0 and if the 0th index is greater than 1st index then the values get swapped and if the 0th index is less than the 1st index then nothing happens. 
The 1st index compares to the 2nd index then the 2nd index compares to the 3rd, and so on...

Pseudocode
- Start looping from with a variable called i, at the end of the array, towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1; 
- if arr[j] is greater than arr[i + 1], swap those two values
*/
import { swap } from "../../utils";

export function bubbleSort<T>(array: T[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}