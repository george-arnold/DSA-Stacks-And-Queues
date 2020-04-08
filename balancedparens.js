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
  return stack.top;
};
// isEmpty(): allows you to check if the stack is empty or not
const isEmpty = function (stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
};

const balancedParens = function (mathStatement) {
  const mathStack = new Stack();
  for (i = 0; i < mathStatement.length; i++) {
    //add paren to math stack if it exists
    if (mathStatement[i] === "(") {
      mathStack.push("(");
    }
    // pop the paren if the balancing pair exists
    if (mathStatement[i] === ")") {
      mathStack.pop();
    }
  }
  //returns true if the stack is empty
  //returns false if the stack has something in it
  return isEmpty(mathStack);
};
