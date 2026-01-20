function doSomething(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            // console.log("I am inside promise...")
            resolve("Done")
        }, 2000)
    })
    return p;
}

doSomething().then(function(){
    console.log("I am outside...")
})
// doSomething()