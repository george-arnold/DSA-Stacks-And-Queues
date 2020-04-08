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
const peek = function (stack) {
  return stack.top.data;
};
// isEmpty(): allows you to check if the stack is empty or not
const isEmpty = function (stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
};
// display(): to display the stack - what is the 1st item in your stack?
const display = function (stack) {
  let string = "";
  while (stack.top !== null) {
    string += stack.top.data;
  }
  return string;
};

//Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
const starTreck = new Stack();
starTreck.push("Kirk");
starTreck.push("Spock");
starTreck.push("Mccoy");
starTreck.push("Scotty");
// Remove McCoy from your stack and display the stack
starTreck.pop();
starTreck.pop();
starTreck.push("Scotty");
display(starTreck);

// Using the Stack class above, implement the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?
module.exports = Stack;
