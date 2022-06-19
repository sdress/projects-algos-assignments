// copied and pasted from fronts assignments
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

    display(){
        let runner = this.head;
        let num_str = '';

        while(runner !== null){
            num_str += runner.data + ", ";
            runner = runner.next;
        }

        return num_str;
    }
}

SLL2 = new SLL();
console.log(SLL2.addFront(76));
console.log(SLL2.addFront(2));
console.log(SLL2.display());
console.log(SLL2.addFront(11.41));
console.log(SLL2.display());
