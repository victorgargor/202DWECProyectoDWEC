document.getElementById('botonCrearFormulario').addEventListener('click', function() {
    // Crear el formulario
    let formulario = document.createElement('form');
    
    // Crear y agregar la cabecera Contacto
    let cabecera = document.createElement('h2');
    cabecera.innerText = "Contacto";
    formulario.appendChild(cabecera);

    // Crear campo Nombre
    let labelNombre = document.createElement('label');
    labelNombre.setAttribute('for', 'nombre');
    labelNombre.innerText = "Nombre: ";
    formulario.appendChild(labelNombre);
    
    let inputNombre = document.createElement('input');
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.placeholder = "Introduce tu nombre";
    formulario.appendChild(inputNombre);
    
    formulario.appendChild(document.createElement('br')); 
    
    // Crear campo Apellidos
    let labelApellidos = document.createElement('label');
    labelApellidos.setAttribute('for', 'apellidos');
    labelApellidos.innerText = "Apellidos: ";
    formulario.appendChild(labelApellidos);
    
    let inputApellidos = document.createElement('input');
    inputApellidos.type = "text";
    inputApellidos.id = "apellidos";
    inputApellidos.placeholder = "Introduce tus apellidos";
    formulario.appendChild(inputApellidos);
    
    formulario.appendChild(document.createElement('br')); 
    
    // Crear campo Email
    let labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'email');
    labelEmail.innerText = "Email: ";
    formulario.appendChild(labelEmail);
    
    let inputEmail = document.createElement('input');
    inputEmail.type = "text";
    inputEmail.id = "email";
    inputEmail.placeholder = "Introduce tu email";
    formulario.appendChild(inputEmail);
    
    formulario.appendChild(document.createElement('br')); 
    
    // Crear campo Asunto
    let labelAsunto = document.createElement('label');
    labelAsunto.setAttribute('for', 'asunto');
    labelAsunto.innerText = "Asunto: ";
    formulario.appendChild(labelAsunto);
    
    let inputAsunto = document.createElement('input');
    inputAsunto.type = "text";
    inputAsunto.id = "asunto";
    inputAsunto.placeholder = "Introduce el asunto";
    formulario.appendChild(inputAsunto);
    
    formulario.appendChild(document.createElement('br')); 
    
    // Crear campo Mensaje 
    let labelMensaje = document.createElement('label');
    labelMensaje.setAttribute('for', 'mensaje');
    labelMensaje.innerText = "Mensaje: ";
    formulario.appendChild(labelMensaje);
    
    let textareaMensaje = document.createElement('textarea');
    textareaMensaje.id = "mensaje";
    textareaMensaje.placeholder = "Introduce tu mensaje";
    formulario.appendChild(textareaMensaje);
    
    formulario.appendChild(document.createElement('br'));
    
    // Crear botón Enviar
    let botonEnviar = document.createElement('input');
    botonEnviar.type = "button";
    botonEnviar.value = "Enviar";
    botonEnviar.classList.add('boton');
    
    // Agregar la acción de mostrar alerta al hacer clic en el botón
    botonEnviar.onclick = function() {
        alert("Mensaje enviado correctamente");
    };
    
    formulario.appendChild(botonEnviar);
    
    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(formulario);
});
