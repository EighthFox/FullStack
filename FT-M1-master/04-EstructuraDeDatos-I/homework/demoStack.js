function Stack(){
    this.arr = [];
};

Stack.prototype.add=function(element){
    this.arr.push(element);
};

Stack.prototype.remove=function(){
    return this.arr.pop();
};

Stack.prototype.size=function(){
    return this.arr.length;
}


const miStack = new Stack();

console.log(miStack);
miStack.add(10);
console.log(miStack);
miStack.add(20);
console.log(miStack);
miStack.add(2);
console.log(miStack);
miStack.remove();
console.log(miStack);
console.log(miStack.size())