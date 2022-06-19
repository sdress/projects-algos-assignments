class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    addFront(value){
        // creating new node value
        let new_node = new Node(value);

        // if no head in SLL, create one
        if(!this.head){
            this.head = new_node;
            return this;
        }

        // saving current head as node.next
        new_node.next = this.head;
        // updating new head
        this.head = new_node;
        return this;
    }

    removeFront(){
        // return null if list is empty
        if(!this.head){
            return null;
        }

        // declaring variable 'removed' as current head
        let removed = this.head;

        this.head = removed.next;

        return this;
    }

    front(){
        // return null if list is empty
        if(!this.head){
            return null;
        }

        // return only value of head, not node
        return this.head.data;
    }
}

let SLL1 = new SLL();
console.log('-- addFront() --')
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));

console.log('-- removeFront() --');
console.log(SLL1.removeFront());
console.log(SLL1.removeFront());

console.log('-- front() --');
console.log(SLL1.front());
console.log(SLL1.removeFront());
console.log(SLL1.front());