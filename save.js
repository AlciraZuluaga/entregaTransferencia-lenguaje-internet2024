
function guardarIntegrante() {
    let integrantesMap = JSON.parse(sessionStorage.getItem('integrantesMap') || '{}');
    console.log("integrantesMap:");
    console.log(integrantesMap);
    console.log();

    // Obtener los valores de los campos del formulario
    const numeroIdentificacion = document.getElementById('numero_identificacion').value;
    const nombreCompleto = document.getElementById('nombre_completo').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const genero = document.getElementById('genero').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const ciudad = document.getElementById('ciudad').value;
    const direccion = document.getElementById('direccion').value;
    const correoElectronico = document.getElementById('correo_electronico').value;
    const numeroTelefono = document.getElementById('numero_telefono').value;
    const nombreContacto = document.getElementById('nombre_contacto').value;
    const telefonoContacto = document.getElementById('telefono_contacto').value;
    const relacionContacto = document.getElementById('relacion_contacto').value;

    // Crear el objeto JSON
    const datosIntegrante = {
        nombreCompleto,
        fechaNacimiento,
        genero,
        nacionalidad,
        ciudad,
        numeroIdentificacion,
        direccion,
        correoElectronico,
        numeroTelefono,
        nombreContacto,
        telefonoContacto,
        relacionContacto
    };

    // ingresa o edita el valor del Integrante.
    integrantesMap[numeroIdentificacion] = datosIntegrante;

    const datosJSON = JSON.stringify(datosIntegrante, null, 4);

    console.log(datosJSON);
    console.log("bonito");
    console.log(JSON.stringify(integrantesMap));

    //https://www.w3schools.com/HTML/html5_webstorage.asp
    sessionStorage.setItem("integrantesMap", JSON.stringify(integrantesMap));
    //sessionStorage.setItem("integrantesMap", integrantesMap);
    document.getElementById("formularioPost").reset();

    /**
     
    const jsonMapRecovered = sessionStorage.getItem('integrantesMap');
    console.log("jsonMapRecovered: " +  jsonMapRecovered);
     */
    const integrantesMapRecovered = JSON.parse(sessionStorage.getItem('integrantesMap') || '{}');
    console.log(integrantesMapRecovered);
    let integranteRecovered = integrantesMapRecovered[numeroIdentificacion];
    console.log("integranteRecovered:")
    console.log(integranteRecovered);

}

const botonEnviar = document.getElementById('formularioPost').querySelector('button[type="submit"]');
botonEnviar.addEventListener('click', guardarIntegrante);

function index() {
    window.location.href = "index.html";
}
