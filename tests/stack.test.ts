import Stack from '../src/stack';

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

    test('implements LIFO logic', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
        expect(stack.pop()).toEqual(undefined);
    });

    test('allows to peek at the top element in the stack without popping it', () => {
        expect(stack.peek()).toEqual(undefined);
        
        stack.push(1);
        expect(stack.peek()).toEqual(1);

        stack.push(2);
        expect(stack.peek()).toEqual(2);

        stack.pop();
        expect(stack.peek()).toEqual(1);
    });

    test('returns the correct size', () => {
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

    test('returns if it is empty', () => {
        expect(stack.isEmpty()).toEqual(true);
        stack.push(1);
        expect(stack.isEmpty()).toEqual(false);
        stack.push(2);
        expect(stack.isEmpty()).toEqual(false);
        stack.push(3);
        expect(stack.isEmpty()).toEqual(false);
        
        stack.clear();
        expect(stack.isEmpty()).toEqual(true);

        stack.push(1);
        stack.push(2);
        stack.push(3);

        stack.pop();
        expect(stack.isEmpty()).toEqual(false);
        stack.pop();
        expect(stack.isEmpty()).toEqual(false);
        stack.pop();
        expect(stack.isEmpty()).toEqual(true);
        stack.pop();
        expect(stack.isEmpty()).toEqual(true);
    });

    test('clears the stack', () => {
        stack.clear();
        expect(stack.isEmpty()).toEqual(true);

        stack.push(1);
        stack.push(2);

        stack.clear();
        expect(stack.isEmpty()).toEqual(true);
    });

    test('returns toString primitive types', () => {
        expect(stack.toString()).toEqual('');

        stack.push(1);
        expect(stack.toString()).toEqual('1');

        stack.push(2);
        expect(stack.toString()).toEqual('1,2');

        stack.clear();
        expect(stack.toString()).toEqual('');

        const stackString = new Stack<string>();
        stackString.push('string1');
        expect(stackString.toString()).toEqual('string1');

        stackString.push('string2');
        expect(stackString.toString()).toEqual('string1,string2');
    });

    test('returns toString objects', () => {
        class MyObj {
            constructor(public string1: any, public string2: any) {}
            toString() {
                return `${this.string1.toString()}|${this.string2.toString()}`;
            }
        }
        const stackMyObj = new Stack<MyObj>();
        expect(stackMyObj.toString()).toEqual('');

        stackMyObj.push(new MyObj(1, 2));
        expect(stackMyObj.toString()).toEqual('1|2');

        stackMyObj.push(new MyObj(3, 4));
        expect(stackMyObj.toString()).toEqual('1|2,3|4');
    });
});