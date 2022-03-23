// Regular Expressions

//without flag
// let pattern = 'love'
// let refEx = new RegExp(pattern)

// let pattern = 'love'
// let flag = 'gi'
// let refEx = new RegExp(pattern,flag)

const str = 'i love Javascript'
const pattern = /love/   // /asjfa/  ifadesi textteki sözcüğü arar
const result = pattern.test(str)  //test() bir dizideki eşleşmeyi test eder. true falsr döndürür
//console.log(result)  true


const str2 = 'i love Javascript'
const pattern2 = /love/g  
const result2 = str2.match(pattern) // match() tüm eşleşmeleri içeren bir dizi döndürür
//console.log(result2)

const str3 = 'i love Javascript'
const pattern3 = /love/g  
const result3 = str.search(pattern3)  // dizideki eşleşmeyi test eder. arama başarız olursa eşleşmenin dizinini veya -1 döndürür
//console.log(result3)

// Replace()
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/g, 'Javascript')
//console.log(matchReplaced)   // dizindeki seçileni değiştirme. /g koyulursa bütün dizindeki koyulmazsa ilk eleman  /Pyhton/gi de aynı görevi yapar

const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
let matches = txt2.replace(/%/g, '')
//console.log(matches)

//[] ile dizindeki seçilenin küçük büyük ayrımı için kullanılır
const pattern6 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt6 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches5 = txt.match(pattern6)
//console.log(matches5)  


// \ escape characters (+) one or more times
const pattern7 = /\d+/g  // d rakamlar anlamına gelir  //
const txt7 = 'This regular expression example was made in March 6,  2022.'
const matches7 = txt7. match(pattern7)

//console.log(matches7)

const pattern8 = /[a]./g  // köşeli parantez a anlamına gelir ve . (nokta) yeni satır dışında herhangi bir karakter anlamına gelir
const txt8 = 'Apple and banana are fruits'
const matches8 = txt8.match(pattern8)

//console.log(matches8) 

// ? 
const txt9 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern9 = /[Ee]-?mail/g  // ? opsiyonel anlamına gelir
matches9 = txt9.match(pattern9)

//console.log(matches9) 


const txt10 = 'This regular expression example was made in December 6,  2019.'
const pattern10 = /\d{4}/g  // aradığımız dizinin uzunluğunu belirtebiliyoruz. 4 karakterli sayı arıyoruz
const matches10 = txt10.match(pattern10)
console.log(matches10)  //2019       {1,4} dersek 1 ve 4 karakterli sayıları alır