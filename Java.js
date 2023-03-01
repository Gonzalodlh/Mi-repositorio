


let Texto_btn = document.getElementById ("Texto_btn");
 
let Texto = document.getElementById ("Texto");

Texto_btn.addEventListener ("click", toggleText); 

function toggleText () {
    Texto.classList.toggle ("show");

    if (Texto.classList.contains ("show")) {
            Texto_btn.innerHTML = "Leer menos" ;
        }
    else {
    (Texto_btn.innerHTML = "Leer mas")
}

}