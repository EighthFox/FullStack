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

const miLista = new LinkedlList();
miLista.add(10)
miLista.add(15)
miLista.add(7)

console.log(miLista);

//-------------------------------------------

const nombre = "Jorge";
var nm = 0
for(let letter of nombre){
    console.log(letter);
    console.log(letter.charCodeAt())
    nm = nm + letter.charCodeAt()
}
console.log(nm)
console.log(nm % 35)