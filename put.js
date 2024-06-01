let integrantesMap = JSON.parse(sessionStorage.getItem('integrantesMap') || '{}');
console.log("integrantesMap:");
console.log(integrantesMap);
console.log();


// Función para editar un integrante
function cargarDatos() {
    // Obtener el número de identificación del campo de entrada
    const numeroIdentificacion = document.getElementById('numero_identificacion').value;
    console.log("numeroIdentificacion: " + numeroIdentificacion);
    
    let integranteRecovered = integrantesMap[numeroIdentificacion];
    console.log("integranteRecovered:")
    console.log(JSON.stringify(integranteRecovered));

    if (integranteRecovered == null || integranteRecovered === null) {
        alert('Integrante no encontrado.');
        return;
    }

    // Rellenar los campos del formulario con los datos del integrante
    document.getElementById('nombre_completo').value = integranteRecovered.nombreCompleto;
    document.getElementById('fecha_nacimiento').value = integranteRecovered.fechaNacimiento;
    document.getElementById('genero').value = integranteRecovered.genero;
    document.getElementById('nacionalidad').value = integranteRecovered.nacionalidad;
    document.getElementById('ciudad').value = integranteRecovered.ciudad;
    document.getElementById('direccion').value = integranteRecovered.direccion;
    document.getElementById('correo_electronico').value = integranteRecovered.correoElectronico;
    document.getElementById('numero_telefono').value = integranteRecovered.numeroTelefono;
    document.getElementById('nombre_contacto').value = integranteRecovered.nombreContacto || '';
    document.getElementById('telefono_contacto').value = integranteRecovered.telefonoContacto || '';
    document.getElementById('relacion_contacto').value = integranteRecovered.relacionContacto || '';
}

function index() {
    window.location.href = "index.html";
}