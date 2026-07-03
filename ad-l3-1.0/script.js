function changeColor(elemento){
    const aleatorio = Math.random();
    let color;
    if (aleatorio <= 0.33)
        color = "red";
    else if (aleatorio <= 0.66)
        color = "blue";
    else
        color = "green";

    elemento.style.color = color;
}

window.onload = function() {
    const elementos = document.getElementsByTagName("h5");
    /* console.log(elementos);
    console.log(elementos.length);
    debugger; */
    for(let i = 0; i < elementos.length; i++){
        elementos[i].setAttribute("onclick", "changeColor(this)");
    }
}
