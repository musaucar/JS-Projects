for(let i = 1; i <= 5;i++) {
    console.log(`${i} * ${i} = ${i*i}`) // girilen sayıya kadar olan sayıların karesini bulan döngü
}

const names = ['Musa','Nisa','Ahmet','Cihat','Beyza','Luke']
for (let i = 0; i< names.length;i++){
    console.log(names[i])
}

const numbers = [1,2,3,5,8]
let sum = 0
for(let i = 0; i<numbers.length;i++){
    sum += numbers[i]
}
console.log('Toplam',sum)

let countries = ['turkey','germany','italia']
let newCountries = []
for(let i = 0; i<countries.length;i++){
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries)

let i = 0
while(i < names.length){
    console.log('isim',names[i])
    i++
}

do{
    console.log('isim',names[i])
    i++
}while(i<names.length)

// for of loop ==== diziler için loop

for(let name of names){
    if(name == 'Beyza'){
        console.log(`${name} bulundu`) // break döngüden çıkmak için kullanıyoruz
        break
    }
    console.log('Ad',name)
}
