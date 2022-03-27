// For Loop

let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

let text = "";

for(let i = 0; i < days.length;i++){
    text += days[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

/////////////////

for(let i = 1; i <= 10;i++){
    
    for(let x = 1;x <= 10;x++){
       //console.log(i + " x " + x + " = " + (i*x));
    }
    //console.log("--------------")
}
 
// ForEach Loop and For..in (for array and objects)

let array = [123,42,543,34,"text","982",true]

for(let i = 0; i < array.length;i++){
    //console.log(array[i])
}

let person = {
    name: "musa",
    surname: "uçar",
    school: "Hacettepe university"
};

/* for (let x in array){
    console.log(array[x])
} */

for (let x in person){
    //console.log(person[x]) // <-- person object values  // console.log(x)  <-- person object keycodes 
}

array.forEach(function(veriable,indis,array){
    //console.log(veriable);
    console.log(indis);
    console.log(array)
});

// While Loop

let total  = 0;
let counter = 1;
let sayi;

while(sayi!=0){
    sayi = prompt(counter +". sayı giriniz :");
    total+=Number(sayi);
    counter++;  
}

document.write(counter +" sayının toplamı :"+total)

// For of Loop