function mostrarMenu() {
    let menu = prompt("Elige tu menú:\n1. Menú 1\n2. Menú 2\n3. Menú 3");

    if (menu == 1) {
        alert("Has elegido el Menú 1.");
    } else if (menu == 2) {
        alert("Has elegido el Menú 2.");
    } else if (menu == 3) {
        alert("Has elegido el Menú 3.");
    } else {
        alert("Por el momento no disponemos de más menús. Por favor, elige 1, 2 o 3.");
    }
}    
mostrarMenu();