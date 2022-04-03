let liste = ['./Photos1/paper.png','./Photos1/scissors.png','./Photos1/rock.png'];
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');
let pcSecim = document.getElementById('pc-secim');
let sonucYazdır = document.getElementById('sonuc');

paper.onclick = secimYap;
scissors.onclick = secimYap;
rock.onclick = secimYap;

function secimYap(){
    let text="";
    let pc = rastgeleScm();
    let secim = this.dataset.id;
    if(pc==0 && secim==0){
        text = "İkinizde aynı seçimi yaptınız"; 
    }else if(pc == 0 && secim == 1){
        text= "Kazandın, makas kağıdı keser";
    }else if(pc == 0 && secim == 2){
        text = "Kaybettin, kağıt taşı sarar";
    }else if(pc == 1 && secim == 0){
        text = "Kaybettin, makas kağıdı keser";
    }else if(pc == 1 && secim == 1){
        text = "ikinizde aynı seçimi yaptınız";
    }else if(pc == 1 && secim == 2){
        text = "Kazandın, Taş makası kırar";
    }else if(pc == 2 && secim == 0){
        text = "Kazandın, kağıt taşı sarar";
    }else if(pc == 2 && secim == 1){
        text = "Kaybettin, Taş makası kırar";
    }else if(pc == 2 && secim == 2){
        text = "İkinizde aynı seçimi yaptınız";
    }
    sonucYazdır.innerHTML=text;
}

function rastgeleScm(){
    let sayi = Math.round(Math.random()*2);
    pcSecim.src=liste[sayi];
    return sayi;
}