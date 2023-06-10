// Node for a deque

class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    addFront(val) {
        let newD = new Node(val)

        if(!this.first) {
            this.first = newD;
            this.last = newD
        } else {
            let head = this.first
            this.first = newD
            this.first.next = head
            head.prev = newD
        }
        this.size += 1 
    }

    removeFront() {
        if(this.size === 0) {
            throw new Error("Nothing in deque")
        }
    
        let val = this.first.val
        this.first = this.first.next
        this.size -= 1
        if(this.size <= 1) this.last = this.first
        return val
    }

    peekFront() {
        return this.first.val
    }

    addBack(val) {
        let newD = new Node(val)

        if(!this.first) {
            this.first = newD;
            this.last = newD
        } else {
            this.last.next = newD
            newD.prev = this.last
            this.last = newD
        }
        this.size += 1 
    }

    removeBack() {
        if(this.size === 0) {
            throw new Error("Nothing in deque")
        }
    
        let val = this.last.val
        this.last = this.last.prev
        this.size -= 1
        if(this.size <= 1) this.last = this.first
        return val
    }

    peekBack() {
        return this.last.val
    }
}



// class Node:
//     def __init__(self, data):
//         self.data = data
//         self.next = None

// class Stack:
//     def __init__(self):
//         self.top = None

//     def push(self, data):
//         new_node = Node(data)
//         if self.top is None:
//             self.top = new_node
//         else:
//             new_node.next = self.top
//             self.top = new_node

//     def pop(self):
//         if self.top is None:
//             return None
//         else:
//             popped = self.top
//             self.top = self.top.next
//             return popped.data

//     def is_empty(self):
//         return self.top is None


// def is_balanced_string(string):
//     stack = Stack()
//     opening_brackets = ['(', '[', '{']
//     closing_brackets = [')', ']', '}']
//     bracket_pairs = {'(': ')', '[': ']', '{': '}'}

//     for char in string:
//         if char in opening_brackets:
//             stack.push(char)
//         elif char in closing_brackets:
//             if stack.is_empty():
//                 return False
//             popped = stack.pop()
//             if bracket_pairs[popped] != char:
//                 return False

//     return stack.is_empty()

// # Testing the function
// test_cases = [
//     "hello",
//     "(hi) [there]",
//     "(hi [there])",
//     "(((hi)))",
//     "(hello (bracket left open at end)",
//     "(nope] (wrong type closed)",
//     "((ok) [nope)] (closed out of order)"
// ]

// for test_case in test_cases:
//     balanced = is_balanced_string(test_case)
//     print(f"{test_case}: {'Balanced' if balanced else 'Imbalanced'}")





// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   function findSurvivor(numPeople, skipCount) {
//     // Create the circular linked list
//     let first = new Node(1);
//     let current = first;
  
//     for (let i = 2; i <= numPeople; i++) {
//       let newNode = new Node(i);
//       current.next = newNode;
//       current = newNode;
//     }
  
//     current.next = first; // Connect the last node to the first to make it circular
  
//     // Find the survivor
//     while (current.next !== current) {
//       // Move forward by skipping the desired number of persons
//       for (let i = 1; i < skipCount; i++) {
//         current = current.next;
//       }
  
//       // Remove the person at the current position
//       current.next = current.next.next;
  
//       // Update the count of skipped persons
//       current = current.next;
//     }
  
//     return current.value; // Return the value of the remaining person
//   }
  


// def calc(expression):
//     tokens = expression.split()

//     stack = []
//     operators = {'+', '-', '*', '/'}

//     for token in reversed(tokens):
//         if token in operators:
//             operand1 = stack.pop()
//             operand2 = stack.pop()

//             if token == '+':
//                 result = operand1 + operand2
//             elif token == '-':
//                 result = operand1 - operand2
//             elif token == '*':
//                 result = operand1 * operand2
//             elif token == '/':
//                 result = operand1 / operand2

//             stack.append(result)
//         else:
//             stack.append(int(token))

//     return stack.pop()

// # Test cases
// print(calc("+ 1 2"))         # Output: 3
// print(calc("* 2 + 1 2"))     # Output: 6
// print(calc("+ 9 * 2 3"))     # Output: 15
// print(calc("- 1 2"))         # Output: -1
// print(calc("- 9 * 2 3"))     # Output: 3
// print(calc("/ 6 - 4 2"))     # Output: 3

