export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

export function defaultToString(item: any): string {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}