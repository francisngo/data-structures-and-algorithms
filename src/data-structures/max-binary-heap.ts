export default class MaxBinaryHeap<E> {
    private heap: any;
    constructor() {
        this.heap = [];
    }

    push(element: string | number) {
        this.heap.push(element);
        this.heapifyUp();
    }

    // removing an element will remove the top element 
    // with highest priority then heapifyDown
    delete() {
        if (!this.heap.length) return null;
        let item = this.heap[0];
        let lastIndex = this.heap.length - 1;
        this.heap[0] = this.heap[lastIndex];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    peak() {
        if (!this.heap.length) return null;
        return this.heap[0];
    }

    getLeftChildIndex(parentIndex: number) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex: number) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(index: number) {
        return this.getParentIndex(index) >= 0;
    }

    hasLeftChild(index: number) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index: number) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    leftChild(index: number) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index: number) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index: number) {
        return this.heap[this.getParentIndex(index)];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while(this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while(this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }

    swap(i: number, j: number) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}