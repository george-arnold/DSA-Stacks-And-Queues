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

function palindrome(s) {
  // clean the string
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // create stacl
  const palindromeCheck = new Stack();
  // push each character into stack
  for (let i = 0; i < s.length; i++) {
    palindromeCheck.push(s.charAt(i));
  }
  //check the top character against the orignal string's first character
  //if it's the same, remove the top character and repeat against the second character
  // and so on
  //default to true
  let isPalindrome = true;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === palindromeCheck.top.data) {
      palindromeCheck.pop();
    } else {
      //changes to false if any character along the top does not match top of data as data pops
      isPalindrome = false;
    }
  }
  return isPalindrome;
}
