// Función que devuelve un color aleatorio (verde, azul o rojo)
function colorAleatorio() {
    const colores = ["green", "blue", "red"];
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}

// Selecciona todas las etiquetas h5
const titulosH5 = document.querySelectorAll("h5");

// Agrega el evento click a cada h5
titulosH5.forEach(h5 => {
    h5.addEventListener("click", () => {
        h5.style.color = colorAleatorio();
    });
});

});
