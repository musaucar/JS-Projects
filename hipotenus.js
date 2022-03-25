// Hipotenüs bulma 
function Hesapla(){
    let k1 = document.getElementById('kenar1').value;
    let k2 = document.getElementById('kenar2').value;
    let hipo = Math.sqrt((k1*k1)+(k2*k2));
    document.getElementById("sonuc").innerHTML = "Hipotenüs: " + hipo; 
}
let hesapBtn=document.getElementById("btn")
hesapBtn.onclick = Hesapla;