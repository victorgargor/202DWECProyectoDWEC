window.onload = function() {
    // Obtenemos las propiedades del objeto screen
    const properties = [
        { name: 'Ancho de la pantalla', value: screen.width },
        { name: 'Alto de la pantalla', value: screen.height },
        { name: 'Profundidad de color', value: screen.colorDepth },
        { name: 'Resolución de color', value: screen.pixelDepth },
        { name: 'Ancho de la pantalla disponible', value: screen.availWidth },
        { name: 'Alto de la pantalla disponible', value: screen.availHeight },
        { name: 'Orientación de la pantalla', value: screen.orientation.type }
    ];

    const container = document.getElementById('screen-properties');

    // Mostramos las propiedades en el HTML
    properties.forEach(property => {
        const div = document.createElement('div');
        div.classList.add('property');
        div.innerHTML = `<strong>${property.name}:</strong> ${property.value}`;
        container.appendChild(div);
    });
};
