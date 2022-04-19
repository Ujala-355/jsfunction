var a=require("readline-sync").questionInt("enter a number");
var sum=0;
var b=()=>{
    for (var i=0; i<=a; i++){
        sum+=i
    }
    console.log(sum)
}
b()
