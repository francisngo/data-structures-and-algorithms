import LinkedList from "../src/linked-list";
import MyObj from './my-obj';
import { defaultEquals } from "../src/utils";

describe('LinkedList', () => {
    let list;
    let min; 
    let max;

    beforeEach(() => {
        list = new LinkedList(defaultEquals);
        min = 1;
        max = 3;
    });

    function pushesElements() {
        for (let i = min; i <= max; i++) {
            list.push(i);
        }
    }

    function verifyList() {
        let current = list.getHead();
        for (let i = min; i <= max && current; i++) {
            expect(current).toBeDefined();
            if (current) {
                expect(current.element).toBeDefined();
                expect(current.element).toEqual(i);
                if (i < max) {
                    expect(current.next).toBeDefined();
                    if (current.next) {
                        expect(current.next.element).toEqual(i + 1);
                    }
                } else {
                    expect(current.next).toBeUndefined();
                }
                current = current.next;
            }
        }
    }

    test('starts empty', () => {
        expect(list.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.getHead()).toBeUndefined();
    });

    test('pushes elements', () => {
        pushesElements();
        verifyList();
    });

    test('returns element at specific index: invalid position', () => {
        // list is empty
        expect(list.getElementAt(3)).toBeUndefined();
    });

    test('returns element at specific index', () => {
        let node;
        pushesElements();
        for (let i = min; i <= max; i++) {
            node = list.getElementAt(i - 1);
            expect(node).toBeDefined();
            if (node) {
                expect(node.element).toEqual(i);
            }
        }
    });

    test('inserts elements first position empty list', () => {
        const element = 1;
        max = element;
        expect(list.insert(element, 0)).toEqual(true);
        verifyList();
    });

    test('inserts elements first position not empty list', () => {
        max = 2;
        expect(list.insert(max, 0)).toEqual(true);
        expect(list.insert(min, 0)).toEqual(true);
        verifyList();
    });

    test('inserts elements invalid position empty list', () => {
        expect(list.insert(1,1)).toEqual(false);
    });

    test('inserts elements invalid position not empty list', () => {
        const element = 1;
        expect(list.insert(element, 0)).toEqual(true);
        expect(list.insert(element, 2)).toEqual(false);
    });

    test('inserts elements in the middle of list', () => {
        expect(list.insert(3, 0)).toEqual(true);
        expect(list.insert(1, 0)).toEqual(true);
        expect(list.insert(2, 1)).toEqual(true);
        verifyList();
    });

    test('inserts elements at the end of list', () => {
        max = 5;

        for (let i = min; i <= max; i++){
            expect(list.insert(i, i - 1)).toEqual(true);
        };
    });

    test('returns index of elements', () => {
        let index;
        pushesElements();
        for (let i = min; i <= max; i++) {
            index = list.indexOf(i);
            expect(index).toEqual(i - 1);
        }

        expect(list.indexOf(max + 2)).toEqual(-1);
    });

    test('removes valid elements', () => {
        let element;
        pushesElements();
        for(let i = min; i <= max; i++) {
            element = list.remove(i);
            expect(element).toBeDefined();
            expect(element).toEqual(i);
        }
    });

    test('removes invalid elements', () => {
        let element;
        pushesElements();
        for (let i = max + 2; i <= max + 4; i++) {
            element = list.remove(i);
            expect(element).toBeUndefined();
        };
    });

    test('removes element invalid position empty list', () => {
        let element;
        for (let i = min; i <= max; i++) {
            element = list.removeAt(i - 1);
            expect(element).toBeUndefined();
        }
    });

    test('removes element invalid position not empty list', () => {
        let element;
        pushesElements();
        for (let i = max + 2; i <= max + 4; i++) {
            element = list.removeAt(i);
            expect(element).toBeUndefined();
        }
    });

    test('removes first element list single element', () => {
        const value = 1;
        list.push(value);

        const element = list.removeAt(0);
        expect(element).toBeDefined();
        expect(element).toEqual(value);

        expect(list.getHead()).toBeUndefined();
        expect(list.isEmpty()).toEqual(true);
    });

    test('removes first element list multiple elements', () => {
        pushesElements();

        const element = list.removeAt(0);
        expect(list.getHead()).toBeDefined();
        expect(element).toEqual(min);

        min = 2;
        verifyList();
    });

    test('removes element from middle of list', () => {
        pushesElements();

        const element = list.removeAt(1); // element 2
        expect(element).toBeDefined();
        expect(element).toEqual(2);

        // list should be [1, 3]
        let current = list.getHead();

        // element 1
        expect(current).toBeDefined();
        if (current) {
            expect(current.element).toBeDefined();
            expect(current.element).toEqual(1);
            if (current.next) {
                expect(current.next.element).toEqual(3);
                current = current.next;
            }
        }

        // then element 3
        expect(current).toBeDefined();
        if (current) {
            expect(current.element).toBeDefined();
            expect(current.element).toEqual(3);
            expect(current.next).toBeUndefined();
        }
    });

    test('removes element from end of list', () => {
        let element;
        pushesElements();
        const maxIndex = max;
        for (let i = maxIndex; i >= min; i--) {
            element = list.removeAt(i - 1);
            expect(element).toBeDefined();
            expect(element).toEqual(i);
            max--;
            verifyList();
        }
    });

    test('returns the head of the list', () => {
        expect(list.getHead()).toBeUndefined();
        list.push(1);
        expect(list.getHead()).toBeDefined();
    });

    test('returns the correct size', () => {
        expect(list.size()).toEqual(0);

        for(let i = min; i <= max; i++) {
            list.push(i);
            expect(list.size()).toEqual(i);
        }

        const size = max;
        for (let i = min; i <= max; i++) {
            list.remove(i);
            expect(list.size()).toEqual(size - i);
        }
        expect(list.size()).toEqual(0);
    });

    test('returns if it is empty', () => {
        expect(list.isEmpty()).toEqual(true);
        for (let i = min; i <= max; i++) {
            list.push(i);
            expect(list.isEmpty()).toEqual(false);
        }
        for (let i = min; i < max; i++) {
            list.remove(i);
            expect(list.isEmpty()).toEqual(false);
        }
        list.remove(max);
        expect(list.isEmpty()).toEqual(true);

        pushesElements();
        expect(list.isEmpty()).toEqual(false);

        list.clear();
        expect(list.isEmpty()).toEqual(true);
    });

    test('clears the list', () => {
        expect(list.size()).toEqual(0);
        list.clear();
        expect(list.size()).toEqual(0);
        pushesElements();
        expect(list.size()).toBeGreaterThan(0);
        list.clear();
        expect(list.size()).toEqual(0);
    });

    test('returns toString primitive types', () => {
        expect(list.toString()).toEqual('');
        list.push(1);
        expect(list.toString()).toEqual('1');
        list.push(2);
        expect(list.toString()).toEqual('1,2');
        list.clear();
        expect(list.toString()).toEqual('');
    });

    test('returns toString primitive types: string', () => {
        const linkedList = new LinkedList();
        linkedList.push('string1');
        expect(linkedList.toString()).toEqual('string1');
        linkedList.push('string2');
        expect(linkedList.toString()).toEqual('string1,string2');
    });

    test('returns toString objects', () => {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toEqual('');
        linkedList.push(new MyObj(1, 2));
        expect(linkedList.toString()).toEqual('1|2');
        linkedList.push(new MyObj(3, 4));
        expect(linkedList.toString()).toEqual('1|2,3|4');
    })
});
