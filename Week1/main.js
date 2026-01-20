console.log("Hello Anurag Yadav");

function arithmatic(a, b, callfunc){
    return callfunc(a,b);
}

function sum(a,b){
    return a+b;
}

const result = arithmatic(2,4, sum);
console.log("Result is: " + result)

function diff(a,b){
    return a-b;
}

const res = arithmatic(2,4, diff);
console.log("Result is: " + res)


let employee = {
    name: "Anurag",
    salary: "$12345",

    address: {
        vill: "sonpa",
        pin: "802114"
    }

}

const detail = employee["address"]["pin"];
console.log(detail);
