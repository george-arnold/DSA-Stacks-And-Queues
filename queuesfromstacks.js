const Stack = require("./Stackclass");
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
const Stack1 = new Stack();
const Stack2 = new Stack();

const Enqueue = function (element) {
  Stack1.push(element);
};

const Dequeue = function () {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) {
      return "Cannot dequeue";
    }
    while (Stack1.length > 0) {
      let p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
};
