//galat hai
const prime = (n) => {
    var i = 1;
    var c = 0;
    while (i <= n) {
        if (n % i === 0) {
            c++
        }
        i++
    }
    if (c === 2) {
        console.log("prime number", n)
    }
    else {
        console.log("Not prime number", n)
    }

}
var n = require("readline-sync").questionInt("enter a number");
prime(n)