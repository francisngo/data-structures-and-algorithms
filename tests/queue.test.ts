import Queue from "../src/queue";

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('starts empty', () => {
        expect(queue.size()).toEqual(0);
        expect(queue.isEmpty()).toEqual(true);
    });

    test('enqueues elements', () => {
        queue.enqueue(1);
        expect(queue.size()).toEqual(1);
        queue.enqueue(2);
        expect(queue.size()).toEqual(2);
        queue.enqueue(3);
        expect(queue.size()).toEqual(3);

        expect(queue.isEmpty()).toEqual(false);
    });

    test('dequeue elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.dequeue()).toEqual(3);
    });

    test('implements FIFO logic', () => {
        queue.enqueue(1);
        expect(queue.peek()).toEqual(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);
        queue.enqueue(3);
        expect(queue.peek()).toEqual(1);

        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.dequeue()).toEqual(3);
        expect(queue.dequeue()).toEqual(undefined);
    });

    test('allows to peek at the front element in the queue without dequeuing it', () => {
        expect(queue.peek()).toEqual(undefined);

        queue.enqueue(1);
        expect(queue.peek()).toEqual(1);

        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);

        queue.dequeue();
        expect(queue.peek()).toEqual(2);
    });

    test('returns the correct size', () => {
        expect(queue.size()).toEqual(0);
        queue.enqueue(1);
        expect(queue.size()).toEqual(1);
        queue.enqueue(2);
        expect(queue.size()).toEqual(2);
        queue.enqueue(3);
        expect(queue.size()).toEqual(3);

        queue.clear();
        expect(queue.isEmpty()).toEqual(true);

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size()).toEqual(3);

        queue.dequeue();
        expect(queue.size()).toEqual(2);
        queue.dequeue();
        expect(queue.size()).toEqual(1);
        queue.dequeue();
        expect(queue.size()).toEqual(0);
        queue.dequeue();
        expect(queue.size()).toEqual(0);
    });
});