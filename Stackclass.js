class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

//Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
const starTreck = new Stack();
starTreck.push("Kirk");
starTreck.push("Spock");
starTreck.push("Mccoy");
starTreck.push("Scotty");

//
// Using the Stack class above, implement the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?
// Remove McCoy from your stack and display the stack

const peek = function () {
  //how do I get the stack into here?
};
