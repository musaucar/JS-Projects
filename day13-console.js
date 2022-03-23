// Console object method

console.log('30 days of javascript')

console.log('%c30 Days Of javascript' , 'color:green')

console.warn('This is a warning') // console'a warning mesajı verir 

console.error('this is an error messages')  // console'a error mesajı verir


const names = ['Musa','Nisa','Ahmet','Cihat']
console.table(names)   // verilen değerleri tablo olarak console'a basar. dizi ve obje olmak zorunda


const user ={
    name:'musa',
    title: 'Programmer',
    country:'Turkey',
    city:'İstanbul',
    age:22

}
console.table(user)


// console.time
const countries = [
    ['finland','Helsinki'],
    ['turkey',  'Ankara'],
    ['Germany','Berlin']
]
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')

//console.info()
console.info('30 days of javascript(info)')  // tarayıcı console'da bilgi mesajı görüntüler

//console.assert()
// iddia yanlışsa konsola hata mesajı yazar. Doğruysa hiçbir şey olmaz. İlk parametre bir onaylama ifadesidir. Bu ifade yanlışsa, Onaylama başarısız hata mesajı görüntülenecektir
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

//The console.group() can help to group different log groups.

const names2 = ['musa', 'nisa', 'ahmet', 'cihat']
const countries2 = [
  ['turkey', 'ankara'],
  ['italia', 'rome'],
  ['germany', 'berlin']
]
const user2 = {
  name: 'musa',
  title: 'Programmer',
  country: 'turkey',
  city: 'istanbul',
  age: 22
}

console.group('Names')
console.group(names2)
console.groupEnd()

console.group('User')
console.group(user2)
console.groupEnd()


// console.count() fonksiyonun kaç kez çağrıldığını ekrana basan metot
const func = () => {
    console.count('has been called')
  }
func()
func()
func()

//console.clear()  console'u temizlemek için kullanılır


