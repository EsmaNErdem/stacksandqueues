/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newQ = new Node(val);

    if(!this.first){
      this.first = newQ
      this.last = this.first
    } else {
      this.last.next = newQ
      this.last = newQ
    }
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0) {
      throw new Error("Nobody in queue")
    } 

    let val = this.first.val
    this.first  = this.first.next
    this.size -= 1;
    
    if(this.size <= 1) this.last = this.first
    return val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

module.exports = Queue;