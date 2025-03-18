// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let maximoAmigos = 5
let arrayAmigos = []
let nombreAmigo = ''

function agregarAmigo() {
nombreAmigo = document.getElementById('amigo').value;
if (nombreAmigo == '') {
   alert ("Por favor, ingresa un nombre valido");
}  else {
     actualizaListaAmigos (); 
     limpiarCaja();
   }
}

function actualizaListaAmigos(){
if (arrayAmigos.length==maximoAmigos) {    
    alert ('No se pueden ingresar mas amigos');
} else {
    // agrega a array si nombre no esta incluido en la lista 
    if (arrayAmigos.includes(nombreAmigo)) {	
	   console.log ('esta en array');
	}  else {
	   arrayAmigos.push(nombreAmigo);		   
	   }  	   
	   // con cliclo for muestro los amigos ingresados en array	   
	   let stAmigos='amigos:'  // variable para agregar los amigos
	   for (let step = 0; step < arrayAmigos.length; step++) {           
           //console.log(arrayAmigos[step]);
		   // no lo muestra como el video, asi que lo hice hacia el lado en variable stAmigos
		   stAmigos += arrayAmigos[step]+ " "
		   //asignarTextoElemento('#listaAmigos',arrayAmigos[step]);
		   asignarTextoElemento('#listaAmigos',stAmigos);
         }	
	}	
}

function sortearAmigo() {
if (arrayAmigos.length<maximoAmigos) {   
   alert (`Debe haber ${maximoAmigos} amigos para el sorteo`)
}  else {
   let nAleatorio=Math.floor(Math.random()*maximoAmigos)+1;
   //console.log (nAleatorio);
   let ganador = 'El amigo secreto sorteado es: ' + arrayAmigos[nAleatorio-1];   
   asignarTextoElemento('#resultado',ganador);   
   }
}

function limpiarCaja() {
// limpiar la caja donde se escribe el amigo
document.querySelector('#amigo').value='';
}

function asignarTextoElemento(elemento,texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
