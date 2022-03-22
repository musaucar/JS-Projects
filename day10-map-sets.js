// set method

const languages = [
    'English',
    'Turkish',
    'English',
    'French',
    'Spanish',
    'Spanish',
    'Turkish',
]
 
const setOfLanguages = new Set(languages)

for(const languages of setOfLanguages){
    //console.log(languages)
}
 
// adding an element to a set 
const companies = new Set()   //yeni bir set oluşturduk
console.log(companies)  // 0 eleman gözüküyor

companies.add('Google')    // set'e eleman ekledik 
companies.add('META')
companies.add('Amazon')
companies.add('SpaceX')
companies.add('Apple')

//console.log(companies)  // 5 elemanl bir set basıldı

console.log(companies.delete('Google'))  // delete methodu ile set'ten eleman silebiliriz
console.log(companies.size)
console.log(companies.has('Apple'))  // set içinde eleman var mı kontrolü

// companies.clear()  //bütün elemanları kaldırır


// intersection of sets dizilerdeki ortak elemanları set ile getiren metot

let a = [1,2,3,4,5]
let b = [3,4,5,6]

let A = new Set(a)
let B = new Set(b)
 
let c = a.filter((num) => B.has(num)) // arrow function
let C = new Set(c)

console.log(C)

//MAP METHOD
//endisine parametre olarak gönderilen dizinin her bir elemanını belirlenen bir işleme tabi tutup, yeni bir dizi meydana getirir.

const numbers5 = [1,4,9]
numbers5.forEach((number, index) => {
    //numbers5[index] = number * 2;
})

const result = numbers5.map(number => number * 2)  // map metotdu ile kullanılış 
const result2 = numbers5.map(number => Math.sqrt(number))

console.log(result2)

// Object map using

const users =[
    {
        name:'Musa',
        surname:'Uçar',
        age: 22  
    },
    {
        name:'Beyza',
        surname:'Kaymakçı',
        age: 21  
    }
]

const date = new Date()
const result3 = users.map(user =>{
    return {
        fullName: `${user.name} ${user.surname}`,
        yearOfBirth: date.getFullYear() - user.age
    }
})
console.log(users)
console.log(result3)

const todos = [
    {
        id: 1,
        name: 'Todo 1',
        complated: false
    },
    {
        id: 2,
        name: 'Todo 2',
        complated: false
    }
]

console.log(todos.map(todo => {
    if(todo.id == 2){
        todo.complated =true;
    }
    return todo;
}))
