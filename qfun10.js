const v=(a)=>{
    var sum=0;
    for (var i=0; i<=a;i++){
        sum+=i
    }
    console.log(sum);
}
var x=require("readline-sync").questionInt("enter a number")
v(x)
