// document.getElementById('myButton2').onclick = function(){
//     alert('Hata2!')
// }

// function button3Click(){
//     alert('Hata3!')
// }
 
// const allTitles = document.getElementsByTagName('h1')
// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) //4

// for(let i=0;i<allTitles.length;i++){
//     console.log(allTitles[i])
// }

// const allTitles = document.getElementsByClassName('title')
// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) //4

// for(let i=0;i<allTitles.length;i++){
//     console.log(allTitles[i])
// }

// const allTitles = document.getElementById('first-title')
// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) //4

// for(let i=0;i<allTitles.length;i++){
//     console.log(allTitles[i])
// }
// querySelector: HTML öğesini etiket adına, kimliğine veya sınıfına göre seçmek için kullanılabilir. Etiket adı kullanılıyorsa, yalnızca ilk öğeyi seçer.


// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle2 = document.querySelector('#first-title') // select id with first-title
// let firstTitle3 = document.querySelector('.title') // select the first available h1 element with class title

//querySelectorAll: can be used to select html element by its tag name or class. It return a nodeList which is an array like object which support array methods. We can use for loop or forEach to loop through each nodeList elements.


// const allTitles2 = document.querySelectorAll('h1')

// console.log(allTitles2.length) // 4
// for (let i = 0; i < allTitles2.length; i++) {
//   console.log(allTitles2[i])
// }

// allTitles2.forEach(title => console.log(title))
// const allTitles3 = document.querySelectorAll('.title')

// Adding attribute
// An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// titles[3].classList.add('title', 'header-title') //another way to setting an attribute: append the class, doesn't over ride
// console.log(titles)

// setAttribute kullanarak öznitelik ekleme
// setAttribute() yöntemi, herhangi bir html niteliğini ayarlar. Özniteliğin türü ve özniteliğin adı olmak üzere iki parametre alır. Dördüncü başlık için class ve id niteliğini ekleyelim.

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')



// classList kullanarak sınıf ekleme
// Sınıf listesi yöntemi, ek sınıf eklemek için iyi bir yöntemdir. Bir sınıf varsa orijinal sınıfı geçersiz kılmaz, bunun yerine öğe için ek sınıf ekler.


titles[3].classList.add('title','header-title') // romeve = classList.remove

//ADDING TEXT TO HTML ELEMENT
// HTML, bir açılış etiketinin, bir kapanış etiketinin ve bir metin 
// içeriğinin yapı bloğudur. textContent veya *innerHTML özelliğini 
// kullanarak bir metin içeriği ekleyebiliriz.


const titles4 = document.querySelectorAll('h1')
titles4[3].textContent = 'Fourth title'

// Adding style
// Adding Style Color
// Let us add some style to our titles. If the element has even index we give it green color else red.

const titles5 = document.querySelectorAll('h1')
titles5.forEach((title, i)=>{
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0){
        title.style.color = 'green'  //backgroundColor ,fontsize
    } else {
        title.style.color = 'red'
    }
})


// Creating element
// Bir HTML öğesi oluşturmak için etiket adını kullanırız. 
// JavaScript kullanarak bir HTML öğesi oluşturmak çok 
// basit ve basittir. Document.createElement() yöntemini kullanıyoruz. Yöntem, bir dize 
//parametresi olarak bir HTML öğesi etiket adını alır.

// syntax
//document.createElement('tagname')

let title6 = document.createElement('h1')
title6.className = 'title'
title6.style.fontSize = '24px'
title6.textContent = 'Creating HTML element DOM Day 2'
console.log(title6)

// let nelement = document.createElement('input')
// document.body.appendChild(nelement)

let title7
for (let i; i < 3; i++){
    title7 = document.createElement('h1')
    title7.className = 'title'
    title.style.fontSize = '24px'
    title7.textContent = i
    console.log(title7)
}

// Appending child to a parent element
// Oluşturulan bir öğeyi HTML belgesinde görmek için onu alt öğe olarak üst öğeye eklemeliyiz. Document.body kullanarak HTML belge gövdesine erişebiliriz. Document.body, appendChild() yöntemini destekler.

let title8
for (let i = 0; i < 3; i++) {
    title8 = document.createElement('h1')
    title8.className = 'title'
    title8.style.fontSize = '24px'
    title8.textContent = i
    document.body.appendChild(title8)  // for remove removeChild
}

let title16 = document.createElement('h1')
title16.className = 'title'
title16.style.fontSize = '24px'
title16.textContent = 'Sayi giriniz :'
document.getElementsByClassName('title')
document.body.appendChild(title16)

let number = document.createElement('input')
number.id = 'nmbr'
document.body.appendChild(number)
document.getElementById('nmbr').style.display = 'inline-block'

let btn = document.createElement('button')
btn.id = 'button'
document.body.appendChild(btn)
btn.textContent = 'Hesapla'
////////////////////////

function asal(){
    while(true){
        if(number == 1){
            console.log('sayi asal değil')
            continue
        }
        let toplam =0
        for(let i=2;i < number;i++){
            if(number %i==0){
                toplam+=1
            }
        }
        if(toplam<=1){
            console.log('sayi asaldır')
        }else {
            console.log('sayi asal değil')
        
        }
    }
    
}


document.getElementById("btn").addEventListener("click",asal)