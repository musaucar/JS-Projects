// Promise bir işlem bittiğinde bir sonraki işlemi yaptırmak için kullanılır

const box = document.querySelector('.box')
/*
setTimeout(() => {
    box.classList.add('bigger')
    setTimeout(() => {
        box.classList.add('circle')
        setTimeout(() => {
            box.classList.add('move')
            setTimeout(() => {
                box.classList.add('colored')
                setTimeout(() => {
                    box.classList.remove('colored')
                    setTimeout(() => {
                        box.classList.remove('move')
                        setTimeout(() => {
                            box.classList.remove('circle')
                            setTimeout(() => {
                                box.classList.remove('bigger')  // callback hell
                            }, 500)
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }, 500)
}, 500)
*/


/*
new Promise((resolve , reject) => {
    // işlem bitmiş ve başarılı ise
    resolve({
        name: 'musa',
        surname: 'uçar'
    })

    //işlem hatalı ise
    reject('çözülmedi')
})

.then (data => {
    data.web = 'musacr@outlook.com'
    return data
})
.then(data => console.log(data))
.catch(data =>{
    console.log(data)
})
.finally(()=> console.log('its over'))

*/


/*
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

wait(500)
.then(() => console.log('its started'))
.then(()=> {
    box.classList.add('bigger')
    return wait(500)
})
.then(()=> {
    box.classList.add('circle')
    return wait(500)
})
.then(()=> {
    box.classList.add('move')
    return wait(500)
})
.then(()=> {
    box.classList.add('colored')
    return wait(500)
})
.then(()=> {
    box.classList.remove('colored')
    return wait(500)
})
.then(()=> {
    box.classList.remove('move')
    return wait(500)
})
.then(()=> {
    box.classList.remove('circle')
    return wait(500)
})
.then(()=> {
    box.classList.remove('bigger')
    return wait(500)
})
.finally(() => console.log('its over'))
*/

 const prom1 = new Promise(resolve => setTimeout(resolve , 1000, 'musa ucar'))
 const prom2 = new Promise(resolve => setTimeout(resolve , 800, 'musacr@outlook.com'))
 const prom3 = new Promise((resolve ,reject) => setTimeout(reject , 2000, 'musaucarr'))

//  Promise.all([prom1,prom2,prom3]) // promise all hepsi resolve olduğu zaman çalışır 
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

// Promise.race([prom1,prom2,prom3])  //ilk sonuçlananı
//     .then(response => console.log(response))

// Promise.allSettled([prom1,prom2,prom3])  // hepsi tamamlandığında
//     .then(response => console.log(response))

Promise.any([prom1,prom2,prom3])  // ilk resolve olan 
     .then(response => console.log(response))


