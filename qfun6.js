(function (){
    var a=require("readline-sync").questionInt("enter a number");
    if (a%2==0){
        console.log(a,"even number")
    }
    else{
        console.log(a,"odd number")
    }
})
()
