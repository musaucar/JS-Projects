ad = 'musa'  // window scope altında gözükür

let name = 'musa'         //global scope 
let surname = 'uçar'
function LetsLearnScope() {
    //console.log(name,surname)
    if(true){
        let name = 'Beyza'         //blok kapsamı (block scope)
        let surname = 'kaymakçı'   // local scope 
        //console.log(name,surname)
    }
    //console.log(name,surname)
}

LetsLearnScope()
//console.log(name,surname)

// local belli kapsam içerisinde erişebildiğimiz değişkenler için. Global bütün

  // OBJECT

const user  = {
    name: 'Musa',   // key: value
    surname: 'uçar',
    age: '22',
    isMarried: false,
    test:{
        deneme:'Deneme text'
    },
    'phone number' : 052524512245,
    skills :[
        'HTML',
        'Javascript',
        'CSS',
        'Pyhton'
    ],
    siblings:[
        {
            name :'Nisanur',
            surname: 'Uçar'
        },
        {
            name :'Ahmet Cihat',
            surname: 'Uçar'
        }
    ],
    getFullname2: () => `${user.name} ${user.surname}`,
    getFullName: function(){  // Object method
        return `${this.name} ${this.surname}`
    }
}


// console.log(user.isMarried ? 'evli': 'bekar')

let keyName ='siblings'
//console.log(user[keyName]) //dinamik

user.skills.push('React')
user.skills.push('C#')

//console.log(user)

//let newUser = Object.assign({},user)  referans user kopyalama
let newUser = {...user} // user kopyalama

newUser.name = 'Ahmet'
//console.log(newUser)

//console.log(Object.values(user)) // objenin keys ve value döndürme

for (let [key,val] of Object.entries(user)){   // entry değerlerini tek tek yazdıırıp görmek için
    ///console.log(`Key = ${key} value= ${val}`)
}

console.log(user.hasOwnProperty('name')) // içinde bir property olup olmadığını kontrol etmek için


Object.freeze(user) // objeyi freeze eder yeni hiçbir şey eklenemez veya çıkarılamaz