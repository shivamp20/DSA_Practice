// class Node{//instantiate node class
//     constructor(value){
//         this.value=value,
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0//track the number of nodes
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty")
//         }
//         else{
//             let curr = this.head;
//             let listValues=''
//             while(curr){
//                 listValues+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }

// let linkList = new linkedList()

// console.log('List is empty?',linkList.isEmpty())
// console.log("List size is:",linkList.getSize())
// linkList.print()
// linkList.prepend(10);
// linkList.print()
// linkList.prepend(20)
// linkList.prepend(30)
// linkList.print()

// class Node{
//     constructor(value){
//         this.value=value,
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null,
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0;
//     }

//     getSize(){
//         return this.size;
//     }
// //O(1)
//     prepend(value){
//         let node = new Node(value)
//         // console.log(node)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             node.next=this.head
//             this.head=node

//         }
//         this.size++;

//     }
// //O(n)
//     append(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             let prev=this.head;
//             while(prev.next){
//                 prev=prev.next

//             }
//             prev.next=node
//         }
//         this.size++;
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return
//         }
//         if(index===0){
//             this.prepend(value)
//         }
//         else{
//             let node = new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             node.next=prev.next;
//             prev.next=node;
//             this.size++;
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is Empty")
//         }
//         else{
//             let curr = this.head;
//             let linkedList=''
//             while(curr){
                
//                 linkedList+=`${curr.value} `;
//                 curr=curr.next

//             }
//             console.log(linkedList)
//         }
        
//     }
// }

// let linkedList=new LinkedList()
// // console.log(linkedList.isEmpty())
// // console.log(linkedList.getSize())
// linkedList.print()
// linkedList.prepend(10)
// linkedList.prepend(20)
// linkedList.prepend(30)
// linkedList.insert(10,0)
// linkedList.insert(30,2)
// // linkedList.insert(20,2)


// linkedList.print()


class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null,
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head;
            this.head=node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }
        else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next
            }
            prev.next=node;
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        else if(index===0){
            this.prepend(value)
        }
        else{
            let node = new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next

            }
            node.next=prev.next;
            prev.next=node;

        }
        this.size++
    }

    removeFrom(index){
        if(index>0 || index>=this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode=this.head;
            this.head=this.head.next
        }
        else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode= prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    searchByValue(value){
        if(this.isEmpty()){
            return -1
        }
        else{
            let curr = this.head;
            while(curr){
                if(curr.value===value){
                    return true
                }

                curr=curr.next
            }
            return false
        }
    }
    reverse(){
        let prev=null
        let curr = this.head;
        while(curr){
            let next = curr.next
            curr.next=prev
            prev=curr;
            curr=next;
        }
        this.head=prev
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }
        else{
            let curr=this.head;
            let listItem=''
            while(curr){
                listItem+=`${curr.value} `
                curr=curr.next;
            }
            console.log(listItem)
        }
    }
}

let linkedList=new LinkedList()
linkedList.print()
// linkedList.prepend(10)
linkedList.append(10)
linkedList.print()
linkedList.append(20)
linkedList.append(30)

// linkedList.prepend(20)
// linkedList.prepend(30)
linkedList.print()
// linkedList.insert(34,1)
// linkedList.print();
// console.log(linkedList.removeFrom(10))
// console.log(linkedList.removeFrom(0))
// console.log(linkedList.searchByValue(34))
linkedList.reverse()


linkedList.print()


















