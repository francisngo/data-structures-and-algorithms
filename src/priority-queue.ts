import { QueueElement } from "./models/queue-element";

export default class PriorityQueue<E, P> {
    private items: any;
    constructor() {
        this.items = [];
    }

    enqueue(element: E, priority: P) {
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }
}