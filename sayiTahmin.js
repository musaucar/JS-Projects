let sayac, rsayi, hak=10;
let baslat = document.getElementById('baslat')
let tahmin = document.querySelector("#tahmin");
let sayi = document.querySelector("#sayi");

baslat.onclick = function(){
    tahmin.disabled=false;
    rsayi=Math.round(Math.random()*100);
    sayac = 0;
    window.alert(rsayi);

}
tahmin.onclick = function(){
    sayac++;
    if(rsayi!=sayi.value && sayac>=hak){
        window.alert("Tahmin hakkınız kalmadı. Tutulan sayı: " + rsayi);
        tahmin.disabled = true;
    }
    if(rsayi==sayi.value){
        window.alert("Tebrikler bildiniz. Tutulan sayı: " + rsayi);
    }else if(sayi.value>rsayi){
        window.alert("Daha küçük bir sayı giriniz.");
    }else{
        window.alert("Daha büyük bir sayı giriniz.");
    }
}
