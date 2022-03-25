function outerFunction() {
    let count = 0;
    function innerFunction() { // closure bir dış fonksiyonu içine fonsiyon yazmaya için verir
        count++                 // bir outer fonksiyon içinde bir inner fonksiyon varsa ve bu inner fonkisyona dışardan erişmek istiyorsak kullanılır
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


function outerFunction2() {
    let count = 0; 
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    return{
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction2()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)