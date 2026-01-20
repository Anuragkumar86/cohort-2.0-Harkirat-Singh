"use strict";
function repeat(fn) {
    setInterval(fn, 1000);
}
repeat(() => {
    console.log("hii");
});
