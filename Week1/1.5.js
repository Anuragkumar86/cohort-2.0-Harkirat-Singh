console.log("Starting my code...")

setTimeout(show, 20000)

const n = 100000
let result = 0;
for(let i=0; i<n ; i++){
    result += i;
}
console.log(result)

function print(){
    console.log("I am inside print...")
}
function show(){
    console.log("I am inside show...")
}

setTimeout(print, 10000)