// JJON JavaScript OBJECT Notation (Javascript Nesne Gösterimi)
// Yalnızca metin

let data={
    kisiler:[
        {name: 'musa', surname:'uçar',age:22},
        {name: 'bayza', surname:'kaymakçı',age:21},
        {name: 'nisa', surname:'uçar',age:17}
    ],
    islem:"get"
}

// let kayit=JSON.stringify(data)// stringe çevirir
// console.log(kayit)
// let cevir = JSON.parse(kayit) // JSON veriye çevirir
// console.log(cevir)

// for in objeleri    foreach-for of diziler

var kisiler = document.getElementsByClassName("kisiler")[0];

for(let getir in data)
{
    // console.log(typeofdata[getir])
    // for(deger of data[getir]){
    //     console.log(deger)
    // }
    let gelen = data[getir];
    if(getir=="kisiler")
    {
        for(isimler in gelen){
            kisiler.innerHTML +=`<li>${gelen[isimler]["name"]} ${gelen[isimler]["surname"]}</li>`
        }
    }
}
