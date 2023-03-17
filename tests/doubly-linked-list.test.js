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
        // expect(list.getTail()).toBeUndefined();
    });

    test('pushes elements', () => {
        pushesElements();
        verifyList();
    })
});

