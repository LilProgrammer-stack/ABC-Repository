function changeColor (elemento){
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

