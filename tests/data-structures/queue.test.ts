import Queue from "../../src/data-structures/queue";

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

    test('returns if it is empty', () => {
        expect(queue.isEmpty()).toEqual(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toEqual(false);
        queue.enqueue(2);
        expect(queue.isEmpty()).toEqual(false);
        queue.enqueue(3);
        expect(queue.isEmpty()).toEqual(false);

        queue.clear();
        expect(queue.isEmpty()).toEqual(true);

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.isEmpty()).toEqual(false);

        queue.dequeue();
        expect(queue.isEmpty()).toEqual(false);
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(false);
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
    });

    test('clears the queue', () => {
        queue.clear();
        expect(queue.isEmpty()).toEqual(true);

        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.isEmpty()).toEqual(false);

        queue.clear();
        expect(queue.isEmpty()).toEqual(true);
    });

    test('returns toString primitive types', () => {
        expect(queue.toString()).toEqual('');

        queue.enqueue(1);
        expect(queue.toString()).toEqual('1');

        queue.enqueue(2);
        expect(queue.toString()).toEqual('1,2');

        queue.clear();
        expect(queue.toString()).toEqual('');

        const queueString = new Queue<string>();
        queueString.enqueue('string1');
        expect(queueString.toString()).toEqual('string1');

        queueString.enqueue('string2');
        expect(queueString.toString()).toEqual('string1,string2');
    });
    
    test('returns toString objects', () => {
        class MyObj {
            constructor(public string1: any, public string2: any) {}
            toString() {
            return `${this.string1.toString()}|${this.string2.toString()}`;
            }
        }
        const queueMyObj = new Queue<MyObj>();
        expect(queueMyObj.toString()).toEqual('');

        queueMyObj.enqueue(new MyObj(1, 2));
        expect(queueMyObj.toString()).toEqual('1|2');

        queueMyObj.enqueue(new MyObj(3, 4));
        expect(queueMyObj.toString()).toEqual('1|2,3|4');
    });
});