export type IEqualsFunction<T> = (a: T, b: T) => boolean;

export type ICompareFunction<T> = (a: T | null | undefined, b: T | null | undefined) => number;

export const DOES_NOT_EXIST = -1;

export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0,
}

export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

export function defaultCompare<T>(a:T, b: T): number {
    if (a === b) return Compare.EQUALS;
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
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

export function swap(array: any[], a: number, b: number) {
    [array[a], array[b]] = [array[b], array[a]];
}

export function reverseCompare<T>(compareFn: ICompareFunction<T>): ICompareFunction<T> {
    return (a, b) => compareFn(b, a);
}

export enum Colors {
    WHITE = 0,
    GREY = 1,
    BLACK = 2
}

export function initializeColor(vertices: (string | number)[]) {
    const color: any = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
}