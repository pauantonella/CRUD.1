let listaContactos = [];

const objContacto = {
    numero: '',
    nombre: '',
    apellido: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const numeroInput = document.querySelector('#numero');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const estado_academicoInput = document.querySelector('#estado_academico');
const domicilioInput = document.querySelector('#domicilio');
const carreraInput = document.querySelector('#carrera');
const generoInput = document.querySelector('#genero');
const btnAgendarInput = document.querySelector('#btnAgendar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || apellidoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    }

    if(editando) {
        editarContacto();
        editando = false;
    } else {
        objContacto.numero = numeroInput.value;
        objContacto.nombre = nombreInput.value;
        objContacto.apellido = apellidoInput.value;
        objContacto.estado_academico = estado_academicoInput.value;
        objContacto.estado_academico = domicilioInput.value;
        objContacto.estado_academico = carreraInput.value;
        objContacto.estado_academico = generoInput.value;
        


        agregarContacto();
    }
}

function agregarContacto() {
    listaContactos.push({...objContacto});

    mostrarContacto();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objContacto.numero = '';
    objContacto.nombre = '';
    objContacto.apellido = '';
    objContacto.estado_academico = '';
    objContacto.domicilioInput = '';
    objContacto.carreraInput = '';
    objContacto.generoInput = '';


}

function mostrarContacto() {
    limpiarHTML();

    const divContactos = document.querySelector('.div-contactos');

    listaContactos.forEach(contacto => {
        const { numero, nombre, apellido, estado_academico } = contacto;

        const parrafo = document.createElement('p');
        parrafo.textContent = `Numero: ${numero} Nombre: ${nombre} Apellido: ${apellido} Estado academico: ${estado_academico}   Domicilio: ${estado_academico}  Carrera: ${estado_academico}  genero: ${estado_academico} `;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarContacto(contacto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarContacto(contacto);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divContactos.appendChild(parrafo);
        divContactos.appendChild(hr);
    });
}

function cargarContacto(contacto) {
    const { numero, nombre, apellido, estado_academico } = contacto;

    numeroInput.value = numero;
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    estado_academicoInput.value = estado_academico;
    estado_academicoInput.value = domicilio;
    estado_academicoInput.value = carrera;
    estado_academicoInput.value = genero;


    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarContacto() {
    objContacto.numero = numeroInput.value;
    objContacto.nombre = nombreInput.value;
    objContacto.apellido = apellidoInput.value;
    objContacto.estado_academico = estado_academicoInput.value;
    objContacto.estado_academico = estado_academicoInput.value;
    objContacto.estado_academico = estado_academicoInput.value;
    objContacto.estado_academico = estado_academicoInput.value;


    listaContactos.map(contacto => {
    });

    limpiarHTML();
    mostrarContacto();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agendar';

    editando = false;
}

function eliminarContacto(contacto) {
    listaContactos = listaContactos.filter(c => c !== contacto);

    limpiarHTML();
    mostrarContacto();
}

function limpiarHTML() {
    const divContactos = document.querySelector('.div-contactos');
    while(divContactos.firstChild) {
        divContactos.removeChild(divContactos.firstChild);
    }
}
