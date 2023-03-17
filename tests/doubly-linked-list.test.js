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
            console.log(list);
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

    it('inserts elements invalid position empty list', () => {
        expect(list.insert(1, 1)).toEqual(false);
    });

    it('inserts elements at the end of the list', () => {
        max = 5;
        for(let i = min; i <= max; i++) {
            expect(list.insert(i, i - 1)).toEqual(true);
        }
    });

    it('inserts elements in the middle of list', () => {
        expect(list.insert(3, 0)).toEqual(true);
        expect(list.insert(1, 0)).toEqual(true);
        expect(list.insert(2, 1)).toEqual(true);
        verifyList();
    });

    it('returns index of elements', () => {
        let index;
        pushesElements();
        for(let i = min; i <= max; i++) {
            index = list.indexOf(i);
            expect(index).toEqual(i - 1);
        }
    });

    it('removes invalid elements', () => {
        let element;
        pushesElements();
        for (let i = max + 2; i <= max + 4; i++) {
            element = list.remove(i);
            expect(element).toBeUndefined();
        }
    });

    it('removes valid elements', () => {
        let element;
        pushesElements();
        for (let i = min; i <= max; i++) {
            element = list.remove(i);
            expect(element).toBeDefined();
            expect(element).toEqual(i);
        }
    });
});

