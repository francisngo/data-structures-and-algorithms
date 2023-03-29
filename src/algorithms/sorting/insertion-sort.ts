/*
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. 

Characteristics of Insertion Sort:
- This algorithm is one of the simplest algorithm with simple implementation 
- Basically, insertion sort is efficient for small data values
- Insertion sort is adaptive in nature, i.e., it is appropriate for data sets which are already partially sorted. 
*/

export function insertionSort<T>(array: T[]) {
    for (let i = 1; i < array.length; i++) {
        let currentVal = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentVal;
    }
    return array;
}