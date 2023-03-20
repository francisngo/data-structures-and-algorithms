export default class Set {
    constructor() {
        this.items = {};
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    values() {
        return Object.values(this.items);
    }

    // returns a new set with elements from both given sets
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    // returns a new set with elements that exist in both sets
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        
        if(otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }

        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });

        return intersectionSet;
    }

    // returns a new set with all the elements that exist in the first set and do not exist in the second set
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    // confirms whether a given set is a subset of another set
    isSubsetOf(otherSet) {
        const values = this.values();
        return values.every(value => otherSet.has(value));
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return Object.keys(this.items).length);
    }

    clear() {
        this.items = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const values = this.values();
        let objString = `${values[0]}`;
        for (let i =1; i < values.length; i++) {
            objString = `${objString},${values[i].toString()}`;
        }
        return objString;
    }
}