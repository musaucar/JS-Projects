// ARROW FUnCTION

//Funciton decleration

// function square(num){
//     return (num*num)
// }


// console.log(square(4))

// // Function Expression

// const square2 = function(num){
//     return (num*num)
// }

// console.log(square2(6))

//Arrow Function Expression

//const square3 = function(num) {return (num*num)}
//const square3 = (num) => {return (num*num)}
// const square3 = num => (num*num)

// console.log(square3(8))


/* window.name = "luke"

function tellName() {
    console.log(this)
    console.log(this.name)
}

tellName() */


/* const person = {
    name: "leia",
    tellName: function(){
        console.log(this)
        console.log(this.name)
    }
}

person.tellName()  */

/* window.name = "luke"

const tellName = () => {
    console.log(this)
    console.log(this.name)
}

tellName()

const person = {
    name: "leia",
    tellName: () => {
        console.log(this)
        console.log(this.name)  // arrow function this metotu için daha iyi
    } 
}

person.tellName() */

/* window.name = "Luke"

const person = {
    name: "Leia",
    tellName:function(){
        console.log(this)
        console.log(this.name)

        setTimeout(function() {
            console.log(this)
            console.log(this.name)
        }, 2000);
    }
} */

/* person.tellName() */

/* window.name = "Luke"

const person = {
    name: "Leia",
    tellName:function() {
        console.log(this)
        console.log(this.name)

        setTimeout(() => {
            console.log(this)
            console.log(this.name)
        }, 2000);
    }
}

person.tellName() */

/* const  Person = (name,surname,age) => {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname
    }
}

const person1 = new Person("Luke","Skywalker", 25);
console.log(person1) */

/* window.year = 100; 

const myObj = {
    year: 2022,
    showyear: function(){
        console.log(this.year, this)
    },
    showyear2: () => console.log(this.year,this)
}


myObj.showyear()
myObj.showyear2() */

// CALL

window.name = "anakin"
window.grade = 100

const student = {
    examresult: () => {
        return this.name + " " + this.grade
    }
}

const student1 = {
    name:"luke",
    grade: 80
}

const student2 = {
    name:"leia",
    grade: 77
}

console.log(student.examresult.call(student1))
console.log(student.examresult.call(student2))