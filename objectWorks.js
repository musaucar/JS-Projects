// Objects


// property -- method: bir nesne ile ilişkili fonksiyonlara denir.

const person1 = {
    name: "Musa",
    surname: "Uçar",
    age: 22,
    languages: ["Turkish","English","Spanish"],
    fullName: function(){
        return this.name + " " + this.surname;
    },
    address:{
        city:"İstanbul",
        district: "Ümraniye"
    }
}

/* const name = "Luke";
const age = 40;
 */

// Object literal

const Person = {
    name: "anakin",
    surname: "skywalker",
    age: 30,
    fullName: function(){
        return this.name + " " + this.surname;
    }
}

console.log(Person)

// Dot Notation

console.log(Person.name);
console.log(Person.age);
console.log(Person.fullName());

Person.job = "Student";

console.log(Person);
console.log(Person.job);

// bracket Notation

console.log(Person['name']);
console.log(Person['age']);
console.log(Person['fullName']());
console.log(Person['na'+'me']); // 'na'+'me' ---> 'name'

const Person2 = {
    name: "leia",
    surname: "organa",
    age: 25,
    fullName: function(){
        return this.name + " " + this.surname;
    }
}

Person2.address = {};
console.log(Person2);

Person2.address.city = "naboo";
console.log(Person2);


// Constructor ---> Yapıcı metot

/* function Person3(name,surname,age){
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.fullName = function(){
        return obj.name + " " + obj.surname;
    }
    return obj;
} */

function Person3(name,surname,age){
    
    console.log(this)

    this.name = name;
    this.surname = surname;
    this.fullName = function(){
        return this.name + " " + this.surname;
    }
    console.log(this)
}

/* const person29 = new Person3("obi-wan","kenobi",40);
const person30 = new Person3("din","djarin",35); */


//Object Constructor

const person12 = new Object();
person12.name = 'Han';
person12.surname = 'Solo';
person12.age = 30;
person12.fullName= function(){
    return this.name + " " + this.surname;
}

// Object.create() ile nesne olusturmak

const person22 = {
    name: "boba",
    surname: "fet",
    age: 36,
    fullName: function(){
        return this.name + " " + this.surname;
    }
}

console.log(person22);

const nesne = Object.create(person22);
nesne.name = "cristiano";
nesne.surname = "ronaldo";
nesne.age = 37;

console.log(nesne);
console.log(nesne.fullName());