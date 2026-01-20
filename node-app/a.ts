function repeat(fn: ()=> void){
    setInterval(fn, 1000);
}

repeat(()=>{
    console.log("hii")
});