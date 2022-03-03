function init(mathFunction){
    var a = 5
    var b = 6

    

    if( a < b ){
        let c = mathFunction(b,a)
        console.log(c);
        /* (function(){
            var c = b - a
            
        })(); */
        
    }else{
        let c = mathFunction(a,b)
        console.log(c);
        /* (function(){
            var c = a - b
            
        })(); */
    }
    
}

function initC(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}
function initD(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

init(initD)
