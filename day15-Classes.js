
//constructor function
// function Person(name,surname,age) {
//     this.name = name
//     this.surname = surname
//     this.age = age
//     //this.fullName = fullName
// }

// function fullName() {
//     return this.name + " " + this.surname
// }

// Person.prototype.fullName = function(){
//     return this.name + " " + this.surname
// }

// Person.prototype.friends = ['beyza', 'ersin']

// const musa = new Person('musa', 'uçar',22)
// const nisa = new Person('nisa', 'uçar',17)

// console.log(musa)
// console.log(nisa) 
// console.log(nisa.fullName()) 
// console.log(musa.fullName()) 

// console.log(musa.friends)
// console.log(nisa.friends)

// musa.friends.push('Tamer')
// console.log(musa.friends)

// function Person(name,surname,age) {
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.fullName = fullName
// }


// CLASS EXPRESSION
 
class Person {
    constructor(name,surname,age){
        this.name = name
        this.surname = surname
        this.age = age
    }
    fullName(){
        return this.name + " " + this.surname
    }
}


class engineer extends Person{
    constructor(name,surname,age,job){
        super(name,surname,age)
        this.job = job
    }0
    getMoney(){
        console.log('PARA KAZAN')
    }
}

class ExtendedArray extends Array{
    shuffle(){
        this.sort(() => Math.random() - 0.5)
    }
}

let myArr = new ExtendedArray(1,2,3,4,5)
console.log(myArr);
myArr.shuffle();
console.log(myArr)
// const beyza = new Person('beyza','kaymakçı', 21)
// const musa = new engineer('musa','uçar', 22, 'engineer')

// console.log(beyza)
// console.log(musa)

// OBJE + (name, surname,age) => Person
// Person + job, getMoney() => Engineer
// console.log(musa.getMoney())
// console.log(beyza.getMoney()) // hata alır çünkü beyza engineer klasında yani subclassta extend edilemiyor

 
// const beyza =  new Person('beyza', 'kaymakçı',21)

// class Engineer extends Person {}; // engineer --> subclass(child)   Person --> superclass (parent)

// const musa = new Engineer('Musa', 'Uçar',22);

// console.log(beyza)
// console.log(musa)


// console.log(beyza instanceof Person)
// console.log(musa instanceof Engineer)
// console.log(musa instanceof Person)
// console.log(beyza instanceof Engineer)
 
    //static showName = "Person"

//     static staMethod(){
//         console.log('Static metot çalışıyor')
//     }
// }
// console.log(musa)
// console.log(nisa) 
// console.log(nisa.fullName()) 
// console.log(musa.fullName())

// console.log(musa.friends)
// console.log(nisa.friends)
// musa.friends.push('Tamer')
// console.log(musa.friends)
// console.log(typeof Person)


// const musa = new Person('musa', 'uçar',22)
// const nisa = new Person('nisa', 'uçar',17)


// console.log(musa)
// console.log(nisa)

//console.log(musa.fullName())

// console.log(musa.showName)
// console.log(musa.staMethod())

// console.log(Person.showName)
// console.log(Person.staMethod())

