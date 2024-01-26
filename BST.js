//Create node class
class Node{
    constructor(value){//to initialize node value and accepts value as parameter
        this.value=value,
        this.left=null,
        this.right=null
    }
}

//define BST class
class binarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }
        else{
            this.inserNode(this.root,newNode)
        }
    }
    //later
   



}

const bst = new binarySearchTree()
console.log("Tree is empty?" ,bst.isEmpty())



