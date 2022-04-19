function average(n1,n2,n3){
    console.log("sum of three no=",n1+n2+n3)
    console.log("Average of three no=",(n1+n2+n3)/3)
}
var a=require("readline-sync").questionInt("enter a first no");
var b=require("readline-sync").questionInt("enter a second no");
var c=require("readline-sync").questionInt("enter a third no");
average(a,b,c)