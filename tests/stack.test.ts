import Stack from '../src/info/stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack();
    });

    test('starts empty', () => {
        expect(stack.size()).toEqual(0);
        expect(stack.isEmpty()).toEqual(true);
    });

    test('pushes elements', () => {
        stack.push(1);
        expect(stack.size()).toEqual(1);
        stack.push(2);
        expect(stack.size()).toEqual(2);
        stack.push(3);
        expect(stack.size()).toEqual(3);

        expect(stack.isEmpty()).toEqual(false);
    });

    test('pop elements', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
        expect(stack.pop()).toEqual(undefined);
    });

    it('implements LIFO logic', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
        expect(stack.pop()).toEqual(undefined);
    });

    it('allows to peek at the top element in the stack without popping it', () => {
        expect(stack.peek()).toEqual(undefined);
        
        stack.push(1);
        expect(stack.peek()).toEqual(1);

        stack.push(2);
        expect(stack.peek()).toEqual(2);

        stack.pop();
        expect(stack.peek()).toEqual(1);
    });

    it('returns the correct size', () => {
        expect(stack.size()).toEqual(0);
        stack.push(1);
        expect(stack.size()).toEqual(1);
        stack.push(2);
        expect(stack.size()).toEqual(2);
        stack.push(3);
        expect(stack.size()).toEqual(3);

        stack.clear();
        expect(stack.isEmpty()).toEqual(true);

        stack.push(1);
        stack.push(2);
        stack.push(3);

        stack.pop();
        expect(stack.size()).toEqual(2);
        stack.pop();
        expect(stack.size()).toEqual(1);
        stack.pop();
        expect(stack.size()).toEqual(0);
        stack.pop();
        expect(stack.size()).toEqual(0);
    });
});