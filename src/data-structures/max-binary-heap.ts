export default class MaxBinaryHeap<E> {
    private heap: any;
    constructor() {
        this.heap = [];
    }

    push(element: string | number) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        let item = this.heap[0];
        let lastIndex = this.heap.length - 1;
        this.heap[0] = this.heap[lastIndex];
        this.heap.pop();
        this.heapifyDown(0);
        return item;
    }

    heapifyUp(index: number) {
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element <= parent) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    heapifyDown(index: number) {
        while (index < this.heap.length) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let largestChildIndex = index;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestChildIndex]) {
                largestChildIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestChildIndex]) {
                largestChildIndex = rightChildIndex;
            }
            if (largestChildIndex === index) break;
            this.swap(largestChildIndex, index);
            index = largestChildIndex;
        }
    }

    swap(i: number, j: number) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }


}