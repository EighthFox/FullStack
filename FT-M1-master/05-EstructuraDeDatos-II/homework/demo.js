function LinkedlList(){
    this.head = null;
    this.size = 0;

    // this.insert = function(element){
    //     this.node = new Node(element)
    //     if(this.head != null){

    //     }
    //     this.head = element;
    //     this.size = size + 1;
    // }
};

function Node(data){
    this.data = data;
    this.next = null;
};

LinkedlList.prototype.add = function(value){
    var newNode = new Node(value);
    let current = this.head;
    if(!current){
        this.head = newNode;
        this.size++;
        return newNode;
    }
    while(current.next){
        current = current.next;
    }
    current.next = newNode;
    this.size++;
};

LinkedlList.prototype.remove = function(){
    if(this.head){
      let current = this.head;
      if(!current.next){
        this.head = null;
        this.size--;
        return current.data;
      }
      let current2 = current
      while(current.next){
        current2 = current;
        current = current.next;
      }
      current2.next = null;
      this.size--;
      return current.data;
    }
}

LinkedlList.prototype.search = function(cb){
    let current = this.head;
    if(typeof cb === 'function'){
        while(current){
            if(cb(current.data)){
                return true
            }
            current = current.next;
        }
        return current;
    }
    else{
        while(current){
            if(current.data == cb){
                return current.data
            }
            current = current.next;
        }
        return current;
    }
  }

function isEven(x){
    return (x%2==0);
}

const miLista = new LinkedlList();
miLista.add(11)
miLista.add(15)
miLista.add(7)
miLista.add(10)

console.log(isEven(10))

console.log(miLista);
console.log(miLista.search(1))
console.log(miLista.remove());
console.log(miLista.remove());
console.log(miLista);
//-------------------------------------------

// const nombre = "Jorge";
// var nm = 0
// for(let letter of nombre){
//     console.log(letter);
//     console.log(letter.charCodeAt())
//     nm = nm + letter.charCodeAt()
// }
// console.log(nm)
// console.log(nm % 35)

var array = new Array(35)
console.log(array.length)
var obj = {name: 'hola'}
array[2] = obj;
console.log(obj.name)
console.log(array[2]['name'])

function hash(string_name){
    var hashNumber = 0;
    for (letter in string_name){
        console.log(letter);
        hashNumber = hashNumber + letter.charCodeAt();
    }
    hashNumber = hashNumber;
    return hashNumber;
}

console.log(hash('this is a key'))