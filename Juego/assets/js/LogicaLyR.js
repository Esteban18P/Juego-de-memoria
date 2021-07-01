console.log('Registro y Validacion de Usuarios');

const FyVregistro = document.getElementById("FyVregistro");
let lista = [];

FyVregistro.addEventListener('submit', (e) => {

    e.preventDefault();

    const NombreIn = document.getElementById("NombreIn");
    const ApellidoIn = document.getElementById("ApellidoIn");
    const CorreoIn = document.getElementById("CorreoIn");
    const ContraseñaIn = document.getElementById("ContraseñaIn");

    const nuevoU = {

        nombre: NombreIn.value,
        apellido: ApellidoIn.value,
        correo: CorreoIn.value,
        contraseña: ContraseñaIn.value,
    }

    /*
    const Vusuario = {

        correo: CorreoIn.value,
        contraseña: ContraseñaIn.value,
    }
    */

    guardarU(nuevoU);
    //consultarU(Vusuario);

})

const guardarU = (usuario) => {

    if (localStorage.getItem('usuarios')== null) {

        lista.push(usuario)
        const listaString = JSON.stringify(lista)
        localStorage.setItem('usuarios' , listaString)
        
    }else{

        lista = JSON.parse(localStorage.getItem('usuarios'))

        if (!validarU(lista, usuario.correo)) {
            
            lista.push(usuario)
            const listaString = JSON.stringify(lista)
            localStorage.setItem('usuarios' , listaString)

        }else{

            console.log("Él usuario ya existe ");
            alert("¡ERROR!: El correo que digitó ya existe");

        }
    }
}

/*
const consultarU = (usuario) => { 

    lista = JSON.parse(localStorage.getItem('usuarios'))

    if (validarL(lista, usuario.correo.contraseña)) {
        
        const listaString = JSON.stringify(lista);
        location.href = "home.html";

    }else{

        alert("¡ERROR!: El correo o la contraseña estan mal digitasdos (Intentelo de nuevo)");

    }
}
*/


const validarU = (arreglo, correoU) =>{

    let existe = false

    for(let u of arreglo){

        if(u.correo == correoU){

            existe = true
            return existe

        }
    }

    return existe

}

/*
const validarL = (arreglo, correoU, contraseñaU) =>{

    let existe = false

    for(let u of arreglo){

        if(u.correo == correoU && u.contraseña == contraseñaU){

            existe = true
            return existe

        }
    }

    return existe

}
*/

