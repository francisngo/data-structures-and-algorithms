import Set from '../src/set';
import MyObj from './my-obj';

describe('Set', () => {
    let set;

    beforeEach(() => {
        set = new Set();
    });

    it('starts empty', () => {
        expect(set.size()).toEqual(0);
        expect(set.isEmpty()).toEqual(true);
    });

    it('adds elements', () => {
        for (let i = 1; i < 5; i++) {
            set.add(i);
            expect(set.size()).toEqual(i);
        }
    });

    it('does not allow duplicated elements', () => {
        let expected = true;
        for (let i = 1; i < 5; i++) {
            expect(set.add(i)).toEqual(expected);
        }
        expected = false;
        for (let i = 1; i < 5; i++) {
            expect(set.add(i)).toEqual(expected);
        }
    });
});