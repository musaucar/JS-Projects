let vize = document.getElementById('txtVize');
let final = document.getElementById('txtFinal');
let btnHesapla = document.getElementById('hesap')
let ortalama;
btnHesapla.onclick = function(){
    let durum = "";
    let vizeNotu = Number(vize.value);
    let finalNotu = Number(final.value);
    let ortalama = (vizeNotu*0.4)+(finalNotu*0.6);
    if(ortalama >= 50 && finalNotu >= 50){
        durum = "GEÇTİNİZ".style.color = "green";
    }
    else if(ortalama>= 50 && finalNotu<50){
        durum = "FİNAL NOTU 50'DEN KÜÇÜK! KALDINIZ.";
    }else{
        durum="ORTALAMANIZ 50' DEN KÜÇÜK! KALDINIZ.";
    }
    document.getElementById("lblSonuc").innerHTML = "Ortalamanız : " + ortalama + "<br>" + durum;
}

 