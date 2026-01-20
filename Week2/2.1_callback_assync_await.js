console.log("Starting 2.1 Class...")

function square(a){
    return a * a;
}
function cube(a){
    return a * a * a;
}
function quad(a){
    return a * a * a * a;
}

function sumofOperation(a, b, cb){
    let val1 = cb(a);
    let val2 = cb(b);
    // cb();
    return val1+val2

}

let res = sumofOperation(2, 3, square);
let res1 = sumofOperation(2, 3, cube);
console.log(res)
console.log(res1)