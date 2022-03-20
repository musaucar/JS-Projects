let numOne = 3
let numTwo = 3

console.log(numOne ==numTwo)  // true

let js = 'Javascript'
let py = 'Python'
 
console.log(js == py) //false

let lightOn = true
let lightOff = false 
 
console.log(lightOff == lightOn)  //false

let nums = [1, "musa", 3]  // nonprimitive

console.log(nums)


let nums1 = [1,2,3]
//let nums2 = [1,2,3]
let nums2 = nums1       // true

console.log(nums1 == nums2)  //false

let user1={
    name: 'musa',
    surname: 'uçar' 
}

let user2={
    name: 'musa',
    surname: 'uçar'
}

console.log(user1==user2)  // false because user1 and user2 are primitive values


// Math.floor(Math.random()*11)  ---> random number between 1 and 10

let name = 'Musa'
let surname = 'Uçar'

let a = 5 
let b = 4


// let fullName = name + ' ' + surname
// console.log(fullName)

let fullName = `${name} 

test 
deneme 

a + b = ${a + b}

${surname}` // değişken içinde başka bir değişkenin değerini kullanmak için dolar işareti içine süslü parantez ile getirilen değişken yazılır (backtick altgr + ,)

console.log(fullName)