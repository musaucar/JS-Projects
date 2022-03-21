 const names = Array(3).fill(5)

 console.log(names)

 let names2 = ['Musa', 22, 1999, 'Uçar']

 console.log(names2.length)
 
  //console.log('musa uçar'.length)

// let array1 = [1,2,3]
// let array2 = [4,5,6]       
// let array3 = [7,8,9]

// let result = array1.concat(array2, array3,[10,11,12])   diziye ekleme yapıyor 
//console.log(result)

let names3 = ['Musa','Nisa','Ahmet','Cihat']
names3.pop()
names3.shift()  // ilk elemanı diziden çıkarıyor

names3.unshift('Beyza') // dizinin başına eleman ekleme 

console.log(names3)


console.log('musa'.split('').reverse().join('')) // asum
// let sonDeger = names3.pop() // pop sondaki elemanı çıkarıyor
// let sonDeger2 = names3.pop()
// console.log(sonDeger,sonDeger2) // diziden çıkarıyor ama tutuyor
// console.log(names3)


// console.log(names3)
// names3.push('Bruce') diziye eleman ekleme 
// console.log(names3)

//console.log(names3.includes('Musa'))

//console.log(Array.isArray(names3))

//console.log(names3.toString()) 

//console.log(names3.slice(1,3))  seçilenler arsı çıkarma 
// console.log(names3.splice(1,2, 'Damian','Wayne')) seçilenler arası değiştirme 
// console.log(names3)