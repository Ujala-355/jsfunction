// callback function
const first_fun=(x)=>{
    var you=require("readline-sync").question("enter a name");
    x(you);
}
const second_fun=(y)=>{
    console.log("hii",y);
}
first_fun(second_fun)