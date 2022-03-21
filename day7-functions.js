function multiply(num1, num2) {
    return num1 * num2
}

let total = multiply(5,2)

function sumArrayValues(array){
    let total = 0
    for(let i = 0; i<array.length ; i++){
        total += array[i]
    }
    return total
}

let dizi = [2,4,6,8,10,12]

console.log('toplam: ',sumArrayValues(dizi))

const sayHello = function(name){
    return `hello ${name}`
}

console.log(sayHello('musa'))   // anonim function

;(function(){
    console.log('he yo');  // kendi kendini çağıran fonksiyon
})()

let sayHello2 = (function(name){
    console.log(`Hola ${name}`)
})('musa')

// normal fonksiyon (regular)
function hello(name){
    return `Hello ${name}`
}


//arrow fonksiyon
const hello2 = (name,surname) => `hello ${name} ${surname}`

const toplama = (num1, num2, ...numbers) => {
    console.log(num1)
    console.log(numbers)
}
toplama(2,5,8,9,11)

console.log(hello2('Bruce','Wayne'))

function multiply(num1, num2 = 2){
    return num1 * num2
}

console.log(multiply(10))
console.log(multiply(15,5))

//call vs. invoke

function test(){
    console.log("test fonksiyonu çalıştı")
}

//call
test()

function invorker(func){
    func()
}

//invoke
invorker(test)
