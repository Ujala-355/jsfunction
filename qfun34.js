function is_equal_lenth(str1,str2){
    if(str1.length === str2.length){
        console.log(str1);
        console.log(str2);
    }
    else if(str1.length > str2.length){
        console.log(str1);
    }
    else{
        console.log(str2);
    }
}
var name_1=require("readline-sync").question("enter a first name")
var name_2=require("readline-sync").question("enter a second name")
is_equal_lenth(name_1,name_2);