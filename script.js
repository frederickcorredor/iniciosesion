let uno = document.getElementById("uno"),
    dos = document.getElementById("dos");

function mostrar1() {
    uno.style.display = "block";
    dos.style.display = "none";
}

function mostrar2() {
    uno.style.display = "none";
    dos.style.display = "block";
}

let usuarios = [];

function crearUsuario() {
    let nombreCreado = document.getElementById("nombreCreado").value;
    let passwordCreado = document.getElementById("passwordCreado").value;
    let confirmacion = document.getElementById("confirmacion").value;

    if (nombreCreado !== "" && passwordCreado !== "") {

        if (passwordCreado == confirmacion) {

            function creadorUsuario(nombre, contraseña) {
                this.nombre = nombre;
                this.contraseña = contraseña;
            }

            const nuevoUsuario = new creadorUsuario(nombreCreado, passwordCreado);
            usuarios.push(nuevoUsuario);

            console.log(usuarios);

        } else {
            alert("Verifique la contraseña");
        }

    } else {
        alert("Por favor llene todos los espacios");
    }
}

function iniciarSesion(){
    let nombre2=document.getElementById("nombre4").value,
    contraseña2=document.getElementById("contraseña4").value,
    usuarioEncontrdo= usuarios.find(function(usuario){
        return usuario.nombre === nombre2

        console.log(usuarioEncontrdo)
    })

}
