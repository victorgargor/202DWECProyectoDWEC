// Función para cambiar el estilo de la división 1 y su párrafo con setAttribute
document.getElementById("b1-1").addEventListener("click", function () {
    const div1 = document.getElementById("div1");
    div1.setAttribute("style", "width: 500px; height: 150px; background-color: lightyellow; border: 3px solid red;");
});

document.getElementById("b1-2").addEventListener("click", function () {
    const p1 = document.getElementById("p1");
    p1.setAttribute("style", "color: green; font-size: 18px;");
});

// Función para cambiar el estilo de la división 2 y su párrafo con className
document.getElementById("b2-1").addEventListener("click", function () {
    const div2 = document.getElementById("div2");
    div2.className = "div2Alt";
});

document.getElementById("b2-2").addEventListener("click", function () {
    const p2 = document.getElementById("p2");
    p2.className = "parrafo33";
});

// Función para cambiar el estilo de la división 3 y su párrafo con CSS externo
document.getElementById("b3-1").addEventListener("click", function () {
    const div3 = document.getElementById("div3");
    div3.classList.add("div3Alt");
    // Crear la etiqueta <link> para el CSS externo dinámicamente
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "4.Practica-09.css";
    document.head.appendChild(link);
});

document.getElementById("b3-2").addEventListener("click", function () {
    const p3 = document.getElementById("p3");
    p3.classList.add("parrafo33");
    // Crear la etiqueta <link> para el CSS externo dinámicamente
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "4.Practica-09.css";
    document.head.appendChild(link);
});