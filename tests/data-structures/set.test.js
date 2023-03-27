import Set from '../src/data-structures/set';
import MyObj from './my-obj';

describe('Set', () => {
    let set;

    beforeEach(() => {
        set = new Set();
    });

    function addValues(min, max) {
        set = new Set();
        for (let i = min; i <= max; i++) {
            set.add(i);
        }
        return set;
    }

    test('starts empty', () => {
        expect(set.size()).toEqual(0);
        expect(set.isEmpty()).toEqual(true);
    });

    test('adds elements', () => {
        for (let i = 1; i < 5; i++) {
            set.add(i);
            expect(set.size()).toEqual(i);
        }
    });

    test('does not allow duplicated elements', () => {
        let expected = true;
        for (let i = 1; i < 5; i++) {
            expect(set.add(i)).toEqual(expected);
        }
        expected = false;
        for (let i = 1; i < 5; i++) {
            expect(set.add(i)).toEqual(expected);
        }
    });

    test('deletes elements', () => {
        for (let i = 1; i < 5; i++) {
            set.add(i);
        }

        for (let i = 1; i < 5; i++) {
            expect(set.delete(i)).toEqual(true);
        }

        // elements should not exist
        for (let i = 1; i < 5; i++) {
            expect(set.delete(i)).toEqual(false);
        }

        expect(set.isEmpty()).toEqual(true);
    });

    test('returns if element exists', () => {
        for (let i = 1; i < 5; i++) {
            set.add(i);
            expect(set.has(i)).toEqual(true);
        }
    
        for (let i = 1; i < 5; i++) {
            expect(set.delete(i)).toEqual(true);
            expect(set.has(i)).toEqual(false);
        }
    });

    test('returns the correct size', () => {
        expect(set.size()).toEqual(0);
    
        for (let i = 1; i < 5; i++) {
            set.add(i);
            expect(set.size()).toEqual(i);
        }
    
        const max = 5;
        for (let i = 1; i < max; i++) {
            set.delete(i);
            expect(set.size()).toEqual(max - i - 1);
        }
    
        expect(set.size()).toEqual(0);
        expect(set.isEmpty()).toEqual(true);
    });

    test('returns if it is empty', () => {
        expect(set.isEmpty()).toEqual(true);
    
        for (let i = 1; i < 5; i++) {
            set.add(i);
            expect(set.isEmpty()).toEqual(false);
        }
    
        for (let i = 1; i < 5; i++) {
            set.delete(i);
            expect(set.isEmpty()).toEqual(!(i < 4));
        }
    
        expect(set.size()).toEqual(0);
        expect(set.isEmpty()).toEqual(true);
    });

    test('clears the set', () => {
        set.clear();
        expect(set.isEmpty()).toEqual(true);
    
        set.add(1);
        set.add(2);
    
        set.clear();
        expect(set.isEmpty()).toEqual(true);
    });

    test('union between empty sets', () => {
        const set1 = new Set();
        const set2 = new Set();
    
        let setResult = set1.union(set2);
        expect(setResult.isEmpty()).toEqual(true);
    
        setResult = set2.union(set1);
        expect(setResult.isEmpty()).toEqual(true);
    });

    test('union between equal sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(1, 5);
    
        let setResult = set1.union(set2);
        for (let i = 1; i <= 5; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    
        setResult = set2.union(set1);
        for (let i = 1; i <= 5; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    });

    test('union between different sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(6, 10);
    
        let setResult = set1.union(set2);
        for (let i = 1; i <= 10; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    
        setResult = set2.union(set1);
        for (let i = 1; i <= 10; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    });

    test('union between sets with common values', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(3, 6);
    
        let setResult = set1.union(set2);
        for (let i = 1; i <= 6; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    
        setResult = set2.union(set1);
        for (let i = 1; i <= 6; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    });

    test('intersection between empty sets', () => {
        const set1 = new Set();
        const set2 = new Set();
    
        let setResult = set1.intersection(set2);
        expect(setResult.isEmpty()).toEqual(true);
    
        setResult = set2.intersection(set1);
        expect(setResult.isEmpty()).toEqual(true);
    });
    
    test('intersection between equal sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(1, 5);
    
        let setResult = set1.intersection(set2);
        for (let i = 1; i <= 5; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    
        setResult = set2.intersection(set1);
        for (let i = 1; i <= 5; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    });
    
    test('intersection different sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(6, 10);
    
        let setResult = set1.intersection(set2);
        expect(setResult.isEmpty()).toEqual(true);
    
        setResult = set2.intersection(set1);
        expect(setResult.isEmpty()).toEqual(true);
    });
    
    test('intersection between sets with common values', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(3, 6);
    
        let setResult = set1.intersection(set2);
        for (let i = 3; i <= 5; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    
        setResult = set2.intersection(set1);
        for (let i = 3; i <= 5; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    });

    test('difference between empty sets', () => {
        const set1 = new Set();
        const set2 = new Set();
    
        let setResult = set1.difference(set2);
        expect(setResult.isEmpty()).toEqual(true);
    
        setResult = set2.difference(set1);
        expect(setResult.isEmpty()).toEqual(true);
    });
    
    test('difference between equal sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(1, 5);
    
        let setResult = set1.difference(set2);
        expect(setResult.isEmpty()).toEqual(true);
    
        setResult = set2.difference(set1);
        expect(setResult.isEmpty()).toEqual(true);
    });
    
    test('difference different sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(6, 10);
    
        let setResult = set1.difference(set2);
        for (let i = 1; i <= 5; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    
        setResult = set2.difference(set1);
        for (let i = 6; i <= 10; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    });
    
    test('difference between sets with common values', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(3, 6);
    
        let setResult = set1.difference(set2);
        for (let i = 1; i <= 2; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    
        setResult = set2.difference(set1);
        for (let i = 6; i <= 6; i++) {
            expect(setResult.has(i)).toEqual(true);
        }
    });

    test('isSubsetOf between empty sets', () => {
        const set1 = new Set();
        const set2 = new Set();
    
        expect(set1.isSubsetOf(set2)).toEqual(true);
        expect(set2.isSubsetOf(set1)).toEqual(true);
    });
    
    test('isSubsetOf between equal sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(1, 5);
    
        expect(set1.isSubsetOf(set2)).toEqual(true);
        expect(set2.isSubsetOf(set1)).toEqual(true);
    });
    
    test('isSubsetOf different sets', () => {
        const set1 = addValues(1, 5);
        const set2 = addValues(6, 10);
    
        expect(set1.isSubsetOf(set2)).toEqual(false);
        expect(set2.isSubsetOf(set1)).toEqual(false);
    });
    
    test('isSubsetOf between sets with common values', () => {
        const set1 = addValues(1, 8);
        const set2 = addValues(3, 6);
        expect(set1.isSubsetOf(set2)).toEqual(false);
        expect(set2.isSubsetOf(set1)).toEqual(true);
    
        const set3 = addValues(1, 5);
        const set4 = addValues(3, 6);
        expect(set3.isSubsetOf(set4)).toEqual(false);
        expect(set4.isSubsetOf(set3)).toEqual(false);
    });

    test('returns toString primitive types', () => {
        expect(set.toString()).toEqual('');
    
        set.add(1);
        expect(set.toString()).toEqual('1');
    
        set.add(2);
        expect(set.toString()).toEqual('1,2');
    
        set.clear();
        expect(set.toString()).toEqual('');
    });

    test('returns toString primitive types: string', () => {
        const set = new Set();
        set.add('string1');
        expect(set.toString()).toEqual('string1');
        set.add('string2');
        expect(set.toString()).toEqual('string1,string2');
    });

    test('returns toString object', () => {
        const set = new Set();
        expect(set.toString()).toEqual('');

        set.add(new MyObj(1, 2));
        expect(set.toString()).toEqual('1|2');

        set.add(new MyObj(3, 4));
        expect(set.toString()).toEqual('1|2,3|4');
    });
});