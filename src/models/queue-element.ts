export class QueueElement<E, P> {
    constructor(public element: E, public priority: P) {
        this.element = element;
        this.priority = priority;
    }
}