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
            console.log(list);
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

    it('starts empty', () => {
        expect(list.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.getHead()).toBeUndefined();
    });

    it('pushes elements', () => {
        pushesElements();
        verifyList();
    });

    it('returns element at specific index: invalid position', () => {
        // list is empty
        expect(list.getElementAt(3)).toBeUndefined();
    });

    it('returns element at specific index', () => {
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

    it('inserts elements first position empty list', () => {
        const element = 1;
        max = element;
        expect(list.insert(element, 0)).toEqual(true);
        verifyList();
    });

    it('inserts elements first position not empty list', () => {
        max = 2;
        expect(list.insert(max, 0)).toEqual(true);
        expect(list.insert(min, 0)).toEqual(true);
        verifyList();
    });

    it('inserts elements invalid position empty list', () => {
        expect(list.insert(1,1)).toEqual(false);
    });

    it('inserts elements invalid position not empty list', () => {
        const element = 1;
        expect(list.insert(element, 0)).toEqual(true);
        expect(list.insert(element, 2)).toEqual(false);
    });

    it('inserts elements in the middle of list', () => {
        expect(list.insert(3, 0)).toEqual(true);
        expect(list.insert(1, 0)).toEqual(true);
        expect(list.insert(2, 1)).toEqual(true);
        verifyList();
    });

    it('inserts elements at the end of list', () => {
        max = 5;

        for (let i = min; i <= max; i++){
            expect(list.insert(i, i - 1)).toEqual(true);
        };
    });

    it('returns index of elements', () => {
        let index;
        pushesElements();
        for (let i = min; i <= max; i++) {
            index = list.indexOf(i);
            expect(index).toEqual(i - 1);
        }

        expect(list.indexOf(max + 2)).toEqual(-1);
    });

    it('removes valid elements', () => {
        let element;
        pushesElements();
        for(let i = min; i <= max; i++) {
            element = list.remove(i);
            expect(element).toBeDefined();
            expect(element).toEqual(i);
        }
    });

    it('removes invalid elements', () => {
        let element;
        pushesElements();
        for (let i = max + 2; i <= max + 4; i++) {
            element = list.remove(i);
            expect(element).toBeUndefined();
        };
    });

    it('removes element invalid position empty list', () => {
        let element;
        for (let i = min; i <= max; i++) {
            element = list.removeAt(i - 1);
            expect(element).toBeUndefined();
        }
    });

    it('removes element invalid position not empty list', () => {
        let element;
        pushesElements();
        for (let i = max + 2; i <= max + 4; i++) {
            element = list.removeAt(i);
            expect(element).toBeUndefined();
        }
    });
});
