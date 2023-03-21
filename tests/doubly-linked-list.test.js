import DoublyLinkedList from "../src/doubly-linked-list";
import MyObj from './my-obj';

describe('DoublyLinkedList', () => {
    let list;
    let min;
    let max;

    beforeEach(() => {
        list = new DoublyLinkedList();
        min = 1;
        max = 3;
    });

    function pushesElements() {
        for (let i = min; i <= max; i++) {
            list.push(i);
        }
    }

    function verifyNode(current, i) {
        expect(current.element).toBeDefined();
        expect(current.element).toEqual(i);

        // verify next node
        if (i < max) {
            expect(current.next).toBeDefined();
            if (current.next) {
                expect(current.next.element).toEqual(i + 1);
            } 
        } else {
            expect(current.next).toBeUndefined();
        }

        // verify previous node
        if (i > min) {
            expect(current.prev).toBeDefined();
            if (current.prev) {
                expect(current.prev.element).toEqual(i - 1);
            }
        } else {
            expect(current.prev).toBeUndefined();
        }
    }

    function verifyListFromTail() {
        let current = list.getTail();
        for (let i = max; i >= min; i--) {
            expect(current).toBeDefined();
            if (current) {
                verifyNode(current, i);
                current = current.prev;
            }
        } 
    }

    function verifyList() {
        let current = list.getHead();
        for (let i = min; i <= max; i++) {
            expect(current).toBeDefined();
            if (current) {
                verifyNode(current, i);
                current = current.next;
            }
        }
        verifyListFromTail();
    }

    test('starts empty', () => {
        expect(list.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.getHead()).toBeUndefined();
        expect(list.getTail()).toBeUndefined();
    });

    test('pushes elements', () => {
        pushesElements();
        verifyList();
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

    test('inserts elements invalid position empty list', () => {
        expect(list.insert(1, 1)).toEqual(false);
    });

    test('inserts elements at the end of the list', () => {
        max = 5;
        for(let i = min; i <= max; i++) {
            expect(list.insert(i, i - 1)).toEqual(true);
        }
    });

    test('inserts elements in the middle of list', () => {
        expect(list.insert(3, 0)).toEqual(true);
        expect(list.insert(1, 0)).toEqual(true);
        expect(list.insert(2, 1)).toEqual(true);
        verifyList();
    });

    test('returns index of elements', () => {
        let index;
        pushesElements();
        for(let i = min; i <= max; i++) {
            index = list.indexOf(i);
            expect(index).toEqual(i - 1);
        }
    });

    test('removes invalid elements', () => {
        let element;
        pushesElements();
        for (let i = max + 2; i <= max + 4; i++) {
            element = list.remove(i);
            expect(element).toBeUndefined();
        }
    });

    test('removes valid elements', () => {
        let element;
        pushesElements();
        for (let i = min; i <= max; i++) {
            element = list.remove(i);
            expect(element).toBeDefined();
            expect(element).toEqual(i);
        }
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
        for(let i = max + 2; i <= max + 4; i++) {
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
        expect(list.getTail()).toBeUndefined();
        expect(list.isEmpty()).toEqual(true);
    });

    test('removes first element list multiple elements', () => {
        pushesElements();
        const element = list.removeAt(0);
        expect(element).toBeDefined();
        expect(element).toEqual(min);
        min = 2;
        verifyList();
    });

    test('removes element from end of list', () => {
        let element;
        pushesElements();
        const maxIndex = max;
        for(let i = maxIndex; i >= min; i--) {
            element = list.removeAt(i - 1);
            expect(element).toBeDefined();
            expect(element).toEqual(i);
            max--;
            verifyList();
        }
    });

    test('removes elements from middle of list', () => {
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
            expect(current.prev).toBeUndefined();
            expect(current.next).toBeDefined();
            if (current.next) {
                expect(current.next.element).toEqual(3);
                current = current.next;
            }
        }

        // element 3
        expect(current).toBeDefined();
        if (current) {
            expect(current.element).toBeDefined();
            expect(current.element).toEqual(3);
            expect(current.next).toBeUndefined();
            expect(current.prev).toBeDefined();
            if (current.prev) {
                expect(current.prev.element).toEqual(1);
            }
        }
    });

    test('returns the head of the list', () => {
        expect(list.getHead()).toBeUndefined();
        list.push(1);
        expect(list.getHead()).toBeDefined();
    });

    test('returns the tail of the list', () => {
        expect(list.getTail()).toBeUndefined();
        list.push(1);
        expect(list.getTail()).toBeDefined();
    });

    test('returns the correct size', () => {
        expect(list.size()).toEqual(0);
        for (let i = min; i <= max; i++) {
            list.push(i);
            expect(list.size()).toEqual(i);
        }
        const size = max;
        for(let i = min; i <= max; i++) {
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
        list.clear(0);
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
        list.push(3);
        expect(list.toString()).toEqual('1,2,3');
    });

    test('returns toString objects', () => {
        const doublyLinkedList = new DoublyLinkedList();
        expect(doublyLinkedList.toString()).toEqual('');

        doublyLinkedList.push(new MyObj(1, 2));
        expect(doublyLinkedList.toString()).toEqual('1|2');

        doublyLinkedList.push(new MyObj(3, 4));
        expect(doublyLinkedList.toString()).toEqual('1|2,3|4');
    });

    test('returns inverseToString primitive types', () => {
        expect(list.inverseToString()).toEqual('');

        list.push(1);
        expect(list.inverseToString()).toEqual('1');

        list.push(2);
        expect(list.inverseToString()).toEqual('2,1');

        list.clear();
        expect(list.inverseToString()).toEqual('');
    });

    test('returns inverseToString primitive types: string', () => {
        const doublyLinkedList = new DoublyLinkedList();

        doublyLinkedList.push('string1');
        expect(doublyLinkedList.inverseToString()).toEqual('string1');

        doublyLinkedList.push('string2');
        expect(doublyLinkedList.inverseToString()).toEqual('string2,string1');
    });

    test('returns inverseToString objects', () => {
        const doublyLinkedList = new DoublyLinkedList();
        expect(doublyLinkedList.inverseToString()).toEqual('');

        doublyLinkedList.push(new MyObj(1, 2));
        expect(doublyLinkedList.inverseToString()).toEqual('1|2');

        doublyLinkedList.push(new MyObj(3, 4));
        expect(doublyLinkedList.inverseToString()).toEqual('3|4,1|2');
    });
});

