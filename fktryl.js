function Hesapla(){
    let faktoriyel = 1;
    let sayi = document.getElementById('sayi').value
    sayi = Number(sayi)

    if(sayi>=0){
        for(let i=1; i<=sayi;i++){
            faktoriyel = faktoriyel*i;
        }
        document.getElementById('sonuc').innerHTML =sayi +  " sayısının faktöriyeli : " + faktoriyel;    
    }
}

let hesaplaBtn = document.getElementById('btnHesapla');

hesaplaBtn.onclick = Hesapla;
