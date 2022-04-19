function check_numbers(num1,num2){
    if(num1%2 ===0 && num2%2===0){
        console.log("Both are Even");
    }
    else{
        console.log("Both are not Even");
    }
}
var x=require("readline-sync").questionInt("enter a number1!!");
var y=require("readline-sync").questionInt("enter a number2!!");
check_numbers(x,y)