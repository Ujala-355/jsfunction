var a =()=>{
    var b=require("readline-sync").questionInt("enter a number");
    for (var i=0; i<=b;i++){
        if (i%2===0){
            console.log(i,"even number")
        }
        else{
            console.log(i,"odd number")
        }
    }
}
a()
