// Destructuring diziler ve objelerin 
// içerisinden elemanları veya property özellikleri çıkarıp birer 
// değişkene atayıp kullanmak için kullanılan bir yapı 

// const [name,surname,age] = ['Musa', 'Uçar',22]

// console.log(name)

// const user = {          // normal describing 
//     name: 'Musa',
//     sur_name: 'Uçar',
//     Age: 22
// }

// const {name,sur_name: surname,Age:age} = user // Destructuring describing

// console.log(name)
// console.log(surname)
// console.log(age)


// function user({surname}){
//     console.log(surname)
// }

// user({
//     name: 'Beyza',
//     surname: 'Kaymakçı',
//     age: 21
// })

const user = {
    name: 'Musa',
    surname: 'Uçar',
    pets: {
        dogs: ['loki','thor'],
        cats:['tony','grogu','din']
    }
}

// const { pets: {dogs:[ilkKopek, ikinciKopek]} } = user
// console.log(ilkKopek)



