let b=10;
function greet(){
    let a =10;
    let b=20;
    function meet(){
        console.log(a);
        console.log(b);
    }
    return meet;
}
const num=greet();
num();