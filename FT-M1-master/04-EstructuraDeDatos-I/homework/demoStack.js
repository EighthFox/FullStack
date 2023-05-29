function Stack(){
    this.arr = [];
}

Stack.prototype.add=function(element){
    this.arr.push(element);
}

Stack.prototype.remove=function(element){
    this.arr.pop(element);
}


const miStack = new Stack();

console.log(miStack);