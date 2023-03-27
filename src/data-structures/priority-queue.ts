import { QueueElement } from "../models/queue-element";

export default class PriorityQueue<E, P> {
    private items: any;
    constructor() {
        this.items = [];
    }

    // min priority queue (lower value has higher priority)
    // there is also max priority queue (greater value goes in front of the queue);
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