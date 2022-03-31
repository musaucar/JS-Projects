let sayi1 = document.getElementById("s1");
let sayi2 = document.getElementById("s2");
let soru = document.getElementById("soru");
let btn = document.getElementById("btn");
btn.onclick = function(){
    let text = "";
    let sy1 = Number(sayi1.value);
    let sy2 = Number(sayi2.value);
    let qst = Number(soru.value);
    if(qst == 1){
         text = "sayıların toplamı :" +  (sy1+sy2);
    }else if(qst == 2){
         text = "sayıların farkı :" + (sy1-sy2);
    }else if(qst == 3){
         text = "sayıların çarpımı :" + (sy1*sy2);
    }else if(qst == 4){
         text = "sayıların bölümü :" + (sy1/sy2);
    }else{
        text = "yanlış işlem"
    }
    document.getElementById("sonuc").innerHTML = text;
}
