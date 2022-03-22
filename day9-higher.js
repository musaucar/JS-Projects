const callback = (n) => {  // gönderilen değerin karesini alıyor
    return n**2
}
function cube(callback, n){  //çağırılan(callback)
    return callback(n) * n
}
//console.log(cube(callback,3)) //higher order function başka fonsiyonu parametre olarak ileten fonsiyonlardır 


const higherOrder = n => {
    const doSomething = m => {
        const doWhatever = t =>{
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}
//console.log(higherOrder(2)(3)(10))

/////////////////////////////

const numbers = [1,2,3,4]

const sumArray = arr => {
    let sum = 0
    const callback= function(element){
        sum += element
    }
    arr.forEach(callback)
    return sum
}

//console.log(sumArray(numbers))

function sayHello(){
    console.log('hello')
}
//setInterval(sayHello,1000) // fonksinyonu belirtilen süre boyunca uyguluyor

function sayHello(){
    console.log('hello')
}
//setTimeout(sayHello,2000) //belirtilen duration sonra fonsiyonu çağırıyor


//forEach (only arrays)

let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum+=num)
console.log(sum)

const countries = ['Finland','Sweden','Denmark','Turkey','Norway','Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


//MAP  dizi parametresini içeren bir callback function alır ve yeni bir dizi döndürür

const numbers3 = [1,2,3,4,5]
const numbers3Square = numbers3.map((num2)=>num2*num2)

console.log(numbers3Square)

//Filter  array içini filtreleme 

const countriesContainingLand = countries.filter((country) => 
  country.includes('land')
)

console.log(countriesContainingLand)

// find koşulu sağlayan ilk elemanı döndür

const ages = [24,22,25,32,35,18]
const age = ages.find((age)=>age<20)
console.log(age) 

//Sort

const numbers4 = [9.81,3.14,100,37]
console.log(numbers4.sort())


numbers4.sort(function(a,b){
    return a - b     // küçükten büyüğe b - a büyükten küçüğe
})
console.log(numbers4)