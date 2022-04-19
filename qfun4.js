function fun_name(){
    let a=require("readline-sync").questionInt("enter a number");
    let sum=0;
    for (let i=0;i<=a;i++){
        sum+=i;
    }
    console.log(sum)
}
fun_name()




