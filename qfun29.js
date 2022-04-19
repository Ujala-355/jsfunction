function fun(l1,l2){
    for (var i=0;i<6;i++){
        if (l1[i]%2===0 && l2[i]%2===0){
            console.log("both are even");
        }
        else{
            console.log("both are not even");
        }
    }
}
fun([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])