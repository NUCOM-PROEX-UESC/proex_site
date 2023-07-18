function ocultarElementosPorID() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf("#") + 1);

    var section = document.getElementById("newsSection");

    var elementos = section.getElementsByTagName("*");

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];

        if (elemento.id !== id && !elemento.contains(document.getElementById(id))) {
            elemento.style.display = "none";
        }
    }
    
    var elementoEspecifico = document.getElementById(id);
    if (elementoEspecifico) {
        elementoEspecifico.style.display = "block";
        var filhos = elementoEspecifico.getElementsByTagName("*");
        for (var j = 0; j < filhos.length; j++) {
            filhos[j].style.display = "block";
        }
    }
}

ocultarElementosPorID();