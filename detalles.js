// Recuperar el parámetro de la URL
var urlParams = new URLSearchParams(window.location.search);
var saborIndex = urlParams.get('id');

// Obtener la lista de sabores desde el almacenamiento local
var sabores = JSON.parse(localStorage.getItem('sabores')) || [];

// Verificar si se proporcionó un índice válido
if (saborIndex !== null && !isNaN(saborIndex) && sabores[saborIndex]) {
    // Convertir el índice a un número entero

    // Lógica para mostrar la información del helado correspondiente
    mostrarDetallesHelado(saborIndex);
} else {
    // Si no se proporciona un índice válido, mostrar un mensaje de error
    document.getElementById('detalleSabor').innerHTML = 'No se proporcionó un índice válido.';
}

function mostrarDetallesHelado(index) {
    // Obtener el sabor correspondiente del array (sabores)
    var sabor = sabores[index];

    // Verificar si el sabor existe
    if (sabor) {
        // Construir el HTML con la información del helado
        var detallesHTML = `
            <p><strong>Nombre:</strong> ${sabor.nombre}</p>
            <p><strong>Sabor Especial:</strong> ${sabor.especial}</p>
            <p><strong>Sabor Exótico:</strong> ${sabor.exotico}</p>
            <p><strong>Sabor Clásico:</strong> ${sabor.clasico}</p>
            <p><strong>Fecha de Producción:</strong> ${sabor.fechaProduccion}</p>
        `;

        // Mostrar la información en el elemento con ID "detalleSabor"
        document.getElementById('detalleSabor').innerHTML = detallesHTML;
    } else {
        // Si el sabor no existe, mostrar un mensaje de error
        document.getElementById('detalleSabor').innerHTML = 'El sabor no existe.';
    }
}

function baja() {
    // Lógica para dar de baja el sabor
    if (confirm('¿Estás seguro de que quieres dar de baja este sabor?')) {
        // Eliminar el sabor del array y actualizar el almacenamiento local
        sabores.splice(saborIndex, 1);
        localStorage.setItem('sabores', JSON.stringify(sabores));

        // Redirigir a la página principal o realizar otra acción
        window.location.href = 'index.html';
    }
}

function cambio() {
    // Lógica para activar el modo de edición
    // Mostrar el formulario de edición y ocultar los botones
    document.getElementById('formularioEdicion').style.display = 'block';

    // Poblar el formulario con los datos actuales del sabor
    document.getElementById('editEntityName').value = sabores[saborIndex].nombre;
    document.getElementById('editAttribute1').value = sabores[saborIndex].especial;
    document.getElementById('editAttribute2').value = sabores[saborIndex].exotico;
    document.getElementById('editAttribute3').value = sabores[saborIndex].clasico;
    document.getElementById('editDateAttribute').value = sabores[saborIndex].fechaProduccion;
}

function actualizarHelado() {
    // Lógica para actualizar el sabor con los datos del formulario de edición
    sabores[saborIndex].nombre = document.getElementById('editEntityName').value;
    sabores[saborIndex].especial = document.getElementById('editAttribute1').value;
    sabores[saborIndex].exotico = document.getElementById('editAttribute2').value;
    sabores[saborIndex].clasico = document.getElementById('editAttribute3').value;
    sabores[saborIndex].fechaProduccion = document.getElementById('editDateAttribute').value;

    // Actualizar el almacenamiento local
    localStorage.setItem('sabores', JSON.stringify(sabores));

    // Redirigir a la página de detalles con el índice actual
    window.location.href = 'detalles.html?id=' + saborIndex;
}