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

BinarySearchTree.prototype.contains = function(value){
    // var result = false;
    // if(value === this.value){
    //     return true
    // }else{
    //     if(this.left){
    //         result = result || (this.left.contains(value))
    //     }
    //     else{
    //         return false;
    //     }
    //     if(this.right){
    //         result = result || (this.right.contains(value))
    //     }
    //     else{
    //         return false
    //     }
    //     return result;
    // }
    var result = false;
    if(value === this.value){
        return true
    }
    if(this.left){
        result = result || (this.left.contains(value))
    }
    if(this.right){
        result = result || (this.right.contains(value))
    }
    return result;
}

BinarySearchTree.prototype.depthFirstForEach = function (order){
    var tree = [];
    switch (order){
        case "post-order":
            if(this.left){
                tree = tree.concat(this.left.depthFirstForEach(order));
            }
            if(this.right){
                tree = tree.concat(this.right.depthFirstForEach(order));
            }
            tree.push(this.value);
            break;
        case 'pre-order':
            tree.push(this.value);
            if(this.left){
                tree = tree.concat(this.left.depthFirstForEach(order))
            }
            if(this.right){
                tree = tree.concat(this.right.depthFirstForEach(order))
            }
            break;
        case 'in-order':
        default:
            if(this.left){
                tree = tree.concat(this.left.depthFirstForEach(order))
            }
            tree.push(this.value);
            if(this.right){
                tree = tree.concat(this.right.depthFirstForEach(order))
            }
            break;
    }
    return tree;
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, pend){
    // var tree = [];
    // tree.push(this.value);
    // if(this.left && this.right){
    //     tree.push(this.left.value);
    //     tree.push(this.right.value);
    //     //tree = tree.concat(this.left.breadthFirstForEach())
    //     //tree = tree.concat(this.right.breadthFirstForEach())
    // }
    // return tree;
    if (!pend){
        var pend = [];
    }
    cb(this.value);

    if (this.left) pend.push(this.left);
    if (this.right) pend.push(this.right);

    if (pend > 0 ) pend.shift().breadthFirstForEach(cb, pend);
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
console.log(root.contains(5))
console.log(root.depthFirstForEach('post-order'))

var arry = []
arry = arry.concat([4])
console.log(arry)
arry = arry.concat([7])
console.log(arry)
arry.push(6)
console.log(arry)
arry.push(10)
console.log(arry)