 let weather1 = prompt("how is the weather: ",'good, bad')
 if(weather1 == "bad"){
     console.log("take an umbrealla")
 }else if(weather1 == "good"){
     console.log("nevermind")
 }else{
     console.log("status not specified")
 }

 let result = parseInt(prompt('2+5 kaç yapar :','2+5'))
 console.log(
     result === 7 ? "Doğru cevap" : "Yanlış cevap"
 )


let weather = prompt("how is waether :")
switch(weather) {
    case 'rainy':
        console.log("Take an umbrealla")
        break
    case 'cloudy':
        console.log("It might be cold. You need a jacket")  
        break
    case 'sunny':
        console.log("Go out freely.") 
        break    
    default:
        console.log("status not specified")
}