// Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.
//JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

// try{
//     // code that may throw an error
//     // hata verilecek kod 
// } catch (err) {
//     // code to be executed if an error occurs
//     // hata oluşursa yürütülecek kod 
// } finally {
//     // code to be executed regardless of an error occurs or not
//     // hata olup olmaksızın yürütülecek kod
// }

try{ 
    let lastName = 'Uçar'
    let fullName = fistName +  ' ' + lastName
} catch (err) {
    //console.log(err)
}

try{
    let lastName1 = 'Uçar'
    let fullName1 = fistName1 + ' ' + lastName1
}catch (err) {
    console.error(err)
}finally {
    console.log('In ant case i will be executed')  
}


try {
    let lastName = 'uçar'
    let fullName = fistName + ' ' + lastName2
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

//throw 'error2'


const thowErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try{
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x >10) throw 'too High'
    }catch (err) {
        console.log(err)
    }
}

thowErrorExampleFun()
