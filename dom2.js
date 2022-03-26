window.onload = function(){
    let beforeButton = document.querySelector("#beforeButton");
    beforeButton = addEventListener("click", function(){

        let paragraf = document.createElement("p");
        let text = document.createTextNode("Dom ile eklenen text");
        paragraf.setAttribute("id", "p1");

        //paragraf.appendChild(text)
        let myArray = document.getElementsByClassName("deneme")
        myArray[0].insertBefore(paragraf, myArray[0].firstElementChild);
    });
}

