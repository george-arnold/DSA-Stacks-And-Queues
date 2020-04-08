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

const sortingStack = function (stackToSort) {
  const decoyStack = new Stack();

  for (let i = 0; i < stackToSort.length; i++) {
    // take top of stackToSort,
    let newValue = peek(stackToSort);
    // copy stackToSort to decoyStack and pop stackToSort
    decoyStack.push(newValue);
    stackToSort.pop();
    // compare top of stackToSort to decoyStack
    // if stackToSort is smaller, jump back to beginning of loop
    if (peek(stackToSort) === peek(decoyStack)) {
      continue;
    } else {
      // hold the value of decoyStack's top to holdValue,
      let holdValue = peek(decoyStack);
      decoyStack.pop();
      // copy stackToSort to decoyStock and pop stackToSort
      let newValue = peek(stackToSort);
      // copy stackToSort to decoyStack and pop stackToSort
      decoyStack.push(newValue);
      stackToSort.pop();
      // push holdValue back into decoyStack
      decoyStack.push(holdValue);
    }
  }
};
