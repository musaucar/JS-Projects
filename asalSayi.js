
let text = "";
let sayi = 0;

function asalHesapla(){
    let sayac = 0;
    let s2 = 0;
    sayi = document.getElementById('sayi').value;
    for(let i = 2; i<sayi;i++){
        if(sayi%i==0){
            sayac++;
        }
    }if(sayac == 0){
        text = "Girilen sayı asal bir sayıdır."
    }else{
        text = "Girilen sayı asal değildir. 1 ve kendisi hariç <strong/>" + sayac + " sayıya bölünüyor";
    }
    document.getElementById('demo').innerHTML = text;
}