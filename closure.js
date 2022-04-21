
function outer(){
    var a="ujala";
    console.log(a)
    function innerfun(){
        var b="saini";
        console.log(b);
        console.log(a)
    }
    innerfun()
}
outer()