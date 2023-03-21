import { defaultToString } from './utils';
import { ValuePair } from './models/value-pair';

export default class Dictionary<K, V> {
    private table: { [key: string]: ValuePair<K, V> };

    constructor(private toStrFn: (key: K) => string = defaultToString) {
        this.table = {};
    }

    set(key: K, value: V) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key: K): V | undefined {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    hasKey(key: K) {
        return this.table[this.toStrFn(key)] != null;
    }

    remove(key: K) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    values(): V[] {
        return this.keyValues().map(
            (valuePair: ValuePair<K, V>) => valuePair.value
        );
    }

    keys(): K[] {
        return this.keyValues().map(
            (valuePair: ValuePair<K, V>) => valuePair.key
        );
    }

    keyValues(): ValuePair<K, V>[] {
        return Object.values(this.table);
    }
}