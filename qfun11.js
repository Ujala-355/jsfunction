(function (){
    console.log("hiii")
})();

(function (){
    var a=require("readline-sync").questionInt("enter a number");
    str=""
    for (var i=1; i<=a; i+=2){
        str+=""+i

    }
    console.log(str) 
})
()