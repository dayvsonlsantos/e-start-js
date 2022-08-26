function tornarMaiusculo() {
    var paragrafos = document.getElementsByTagName("p");
    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].innerHTML = paragrafos[i].innerHTML.toUpperCase();
    }
}

function alterarCor() {
    document.getElementById("titulo").style.color = "red";
}