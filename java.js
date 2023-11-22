var sabores = [];

// Obtener sabores del almacenamiento local o inicializar si no existe
var sabores = JSON.parse(localStorage.getItem('sabores')) || [];

function alta() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('entityName').value;
    var especial = document.getElementById('attribute1').value;
    var exotico = document.getElementById('attribute2').value;
    var clasico = document.getElementById('attribute3').value;
    var fechaProduccion = document.getElementById('dateAttribute').value;

    // Validar que todos los campos estén llenos
    if (!nombre || !especial || !exotico || !clasico || !fechaProduccion) {
        document.getElementById('result').innerHTML = 'Por favor, complete todos los campos.';
        return;
    }

    // Crear un objeto sabor con los datos del formulario
    var nuevoSabor = {
        nombre: nombre,
        especial: especial,
        exotico: exotico,
        clasico: clasico,
        fechaProduccion: fechaProduccion
    };

    // Agregar el nuevo sabor a la lista
    sabores.push(nuevoSabor);

    // Guardar la lista de sabores en el almacenamiento local
    localStorage.setItem('sabores', JSON.stringify(sabores));

    // Limpiar los campos del formulario
    document.getElementById('entityName').value = '';
    document.getElementById('attribute1').value = '';
    document.getElementById('attribute2').value = '';
    document.getElementById('attribute3').value = '';
    document.getElementById('dateAttribute').value = '';


}

function cambiarColorCampo(campo) {
    // Cambiar el color del borde del campo a rojo
    campo.style.borderColor = 'red';
}

function restaurarColorCampo(campo) {
    // Restaurar el color original del borde del campo
    campo.style.borderColor = '';
}

function limpiarYRestaurarColorCampos(campos) {
    // Limpiar los campos del formulario
    campos.forEach(function(campo) {
        campo.value = '';
        restaurarColorCampo(campo);
    });
}



function consulta() {
    // Lógica para operación de consulta
    // (Por ejemplo, mostrar los sabores como botones)
    var saboresContainer = document.getElementById('saboresContainer');

    // Limpiar el contenedor de sabores
    saboresContainer.innerHTML = '';

    if (sabores.length > 0) {
        // Mostrar cada sabor como un botón
        sabores.forEach(function(sabor, index) {
            var button = document.createElement('button');
            button.textContent = sabor.nombre;
            button.onclick = function() {
                redirigirADetalles(index);
            };
            saboresContainer.appendChild(button);
        });

        // Mostrar mensaje de éxito
        document.getElementById('result').innerHTML = 'Lista de sabores obtenida con éxito';
    } else {
        document.getElementById('result').innerHTML = 'No hay sabores para mostrar';
    }
    
}

function redirigirADetalles(index) {
 // Redirigir a la página de detalles con el índice del nuevo sabor
 var nuevoSaborIndex = sabores.length - 1;  // Último índice
 var urlDetalles = 'detalles.html?id=' + nuevoSaborIndex;
 window.location.href = urlDetalles
}


function limpiarFormulario() {
    // Limpiar los campos del formulario
    document.getElementById('entityName').value = '';
    document.getElementById('attribute1').value = '';
    document.getElementById('attribute2').value = '';
    document.getElementById('attribute3').value = '';
    document.getElementById('dateAttribute').value = '';
}