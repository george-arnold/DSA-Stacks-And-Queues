// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

const peek = function (queue) {
  return queue.first.value;
};

const isEmpty = function (queue) {
  return queue.last === null;
};

const display = function (queue) {
  let currNode = queue.first;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
};

const starTrekQ = new Queue();
let newNames = ["Kirk", "Spok", "Uhura", "sulu", "Checkov"];
newNames.forEach((name) => starTrekQ.enqueue(name));

const removeEntryFromQueue = function (entry, queue) {
  // handle first value
  if (queue.first.value === entry) {
    queue.dequeue();
  }

  let prevNode = queue.first;
  let currNode = queue.first.next;

  while (currNode !== null) {
    if (currNode.value !== entry) {
      prevNode.next = currNode.next;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
};

const squareDance = function (newPerson) {
  const men = new Queue();
  const women = new Queue();
  if (isEmpty(men) && isEmpty(women)) {
    if (newPerson === "man") {
      men.queue(newPerson);
    } else {
      women.queue(newPerson);
    }
  }
  if (newPerson === "man") {
    if (isEmpty(women)) {
      men.queue(newPerson);
    } else {
      women.dequeue();
    }
  }
  if (newPerson === "woman") {
    if (isEmpty(men)) {
      women.queue(newPerson);
    } else {
      men.dequeue();
    }
  }
};

function bankProblem(newCustomer) {
  const oBank = new Queue();
  oBank.queue(newCustomer);
  oBank.dequeue();
  let random = Math.floor(Math.random() * 100);
  if (random <= 25) {
    oBank.queue(newCustomer);
  }
}
