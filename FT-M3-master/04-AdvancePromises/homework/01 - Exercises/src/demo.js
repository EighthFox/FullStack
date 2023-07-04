arr = [1, 2, 3, 50]

const arrValue = arr.map((value) => 
{
    if(value > 2) return value;
    else {
        let a = [];
        a.push(value+5)
        return a;
    }
})

console.log(arrValue)