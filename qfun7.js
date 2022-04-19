const a=()=>{
    var b=require("readline-sync").questionInt("enter a number");
    var i=0;
    var c=0;
    while (i<=b){
        if (b%i===0){
            c++
        }
        i++
    }
    if (c==2){
        console.log("prime number",c);
    }
    else{
        console.log("not prime number",c);
    }
}
a()