function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (node){
    if(this.value > node){
        if(!this.left){
            this.left = new BinarySearchTree(node);
            return this.left;
        }
        else{
            this.left.insert(node)
        }
    }
    else if(this.value < node){
        if(!this.right){
            this.right = new BinarySearchTree(node);
            return this.right;
        }
        else{
            this.right.insert(node)
        }
    }
}

BinarySearchTree.prototype.size = function(){
    var i = 0
    if(this.left){
        i = i + this.left.size();
        i++
    }
    if(this.right){
        i = i + this.right.size();
        i++
    }
    return i;
}

const root = new BinarySearchTree(8);
console.log(root)
root.insert(6)
console.log(root)
root.insert(10)
console.log(root)
root.insert(4)
console.log(root)
root.insert(7)
console.log(root)
console.log(root.size())