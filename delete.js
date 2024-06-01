let integrantesMap = JSON.parse(sessionStorage.getItem('integrantesMap') || '{}');
console.log("integrantesMap:");
console.log(integrantesMap);
console.log();

// Función para eliminar un integrante
function eliminarIntegrante() {
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

    // Confirmar la eliminación
    if (!confirm(`¿Está seguro de eliminar al integrante con el número de identificación ${numeroIdentificacion}?`)) {
        return;
    }

    // Eliminar el integrante del integrantesMap
    integrantesMap[numeroIdentificacion] = null;


    //https://www.w3schools.com/HTML/html5_webstorage.asp
    if (typeof (Storage) !== "undefined") {
        sessionStorage.setItem("integrantesMap", JSON.stringify(integrantesMap));
        //sessionStorage.setItem("integrantesMap", integrantesMap);
        document.getElementById("formulario").reset();
    } else {
        console.log("Sorry! No Web Storage support..");
        return;
    }

    // Mostrar mensaje de confirmación
    alert('Integrante eliminado correctamente.');
}

const botonEnviar = document.getElementById('formularioDelete').querySelector('button[type="submit"]');
botonEnviar.addEventListener('click', eliminarIntegrante);

function index() {
    window.location.href = "index.html";
}