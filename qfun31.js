function perfect(n){
    var i=1;
    var sum=0;
    while (i<n){
        if (n%i===0){
            sum+=i
        }
        i++
    }
    if (n===sum){
        console.log("perfect number");
    }
    else{
        console.log("not perfect numbr")
    }
}
var n=require("readline-sync").questionInt("enter a number")
perfect(n)
