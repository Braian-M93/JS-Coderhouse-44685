function saludar() {
  let bienvenido = "Hola!!";
  console.log("Hola!!");
  alert("Hola " + nombreUsuario);
}

let nombreUsuario = prompt("ingrese su nombre");
console.log("bienvenido" + nombreUsuario);
alert("bienvenido " + nombreUsuario);

let edad = prompt("ingrese su edad");
let esMayorDeEdad = edad >= "18";
if (esMayorDeEdad) {
  console.log("puede ingresar al bar");
  alert("Disfrute su visita por nuestra pagina");
} else {
  console.log("aun no puede");
  alert("no tiene edad apropiada, por favor retirese de la pagina");
}

saludar();
{
  for (let i = 1; i <= 2; i++) {
    let edad = prompt("ingrese su edad por favor");
    alert("confirmando su edad");
    if (esMayorDeEdad) {
      break;
    }
  }
}
