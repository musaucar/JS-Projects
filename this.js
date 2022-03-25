// obj-func() --> this obj
// this --> global object --> window (global)

/* console.log(this)
console.log(this.location)
console.log(this.location.href)
console.log(window.location.href) */

// console.log(this === window)

// Funciton Declaration

/* function func1(){
    this.name = "musa"
    /* console.log(this)
    console.log(this.location)
    console.log(this.location.href) 
    console.log(this.age)
} */

//Function Expresstion

/* const func2 = function(){
    this.age = 22
    /* console.log(this)
    console.log(this.location)
    console.log(this.location.href) 
    console.log(this.name)
} */

/* func1()
func2() */
/* console.log(name)
console.log(age)
console.log(this.name)
console.log(this.age) */


/* function Person(name2,surname2,age2){
    const obj = {}
    console.log(obj)
    obj.name = name2
    console.log(obj)
    obj.surname = surname2
    console.log(obj)
    obj.age = age2
    obj.fullName = function(){
        return obj.name + " " + obj.surname
    }
    return obj
} */


/* function Person(name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age
    this.fullName = function(){
        return this.name + " " + this.surname
    }
} */


/* class Person{
    constructor(name,surname,age){
        this.name = name
        this.surname = surname
        this.age = age
    }
    fullName = function(){
        return this.name + " " + this.surname
    }
    
} */

/* const luke = new Person("luke", "skywalker",22)
const leia = new Person("Leia", "Organa",22)
console.log(luke)
console.log(leia) */

/* const luke = {
    name: "Luke",
    age: 22,
    surname: "Skywalker",
    fullName: function() {
        console.log(this)
        return this.name + " " + this.surname
    },

    mother : {
        name: "Padme",
        age: 47,
        fullName: function() {
            console.log(this)
            //return this.name + " " + this.surname
        }
    }
}


console.log(luke.fullName())
console.log(luke.mother.fullName()) */

/* const anakin ={
    name: "Anakin",
    funcy: function(){
        console.log(this === anakin)
        console.log(this === window)
    }
}

//console.log(anakin.funcy())


const funcy2 = anakin.funcy
console.log(funcy2()) */


const anakin ={
    name: "Anakin",
    funcy: function(){
        console.log(this === anakin)
        setTimeout(function(){
            console.log(this === anakin)
            console.log(this === window)
        }, 2000)
    }
}

console.log(anakin.funcy())