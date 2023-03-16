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

    it('starts empty', () => {
        expect(list.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.getHead()).toBeUndefined();
    });

    // it('pushes elements', () => {
    //     pushesElements();
    //     verifyList();
    // });

    it('returns element at specific index: invalid position', () => {
        // list is empty
        expect(list.getElementAt(3)).toBeUndefined();
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
});
