function license_checker(speed){
    var point=(speed-70)/5
    if (speed<=70){
        console.log("ok")
    }
    if (speed>=70 && speed<130){
        console.log(point,"warning! please slow your speed")
    }
    else if(speed>=130){
        console.log(point,"licence suspended")
    }
}
var x=require("readline-sync").questionInt("enter a no");
license_checker(x)