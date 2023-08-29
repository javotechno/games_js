let canvas = document.getElementById("Canvas");

let ctx =
  canvas.getContext(
    "2d"
  ); 
  

let x = canvas.width / 2;
let y = canvas.height - 30;


let dx = 5;
let dy = -3;
let radioBola = 15;
let colorBola = getRandomColor();

// Paleta variables

let paletaAltura = 10;
let paletaAncho = 75;
let paletaX = (canvas.width - paletaAncho) / 2;

// Control de la paleta

let botonDerecho = false;
let botonIzquierdo = false;


let puntaje = 0;

// Ladrillos variables
let ladrilloFila = 3;
let ladrilloColumna = 5;
let ladrilloAncho = 80;
let ladrilloAlto = 20;
let ladrilloPadding = 10;
let ladrilloMarginTop = 30;
let ladrilloMarginLeft = 20;


const ladrillos = [];
for (i = 0; i < ladrilloColumna; i++) {
  ladrillos[i] = [];
  for (l = 0; l < ladrilloFila; l++) {
    ladrillos[i][l] = {
      x: 0,
      y: 0,
      status: 1,
    };
  }
}

// Teclas de la paleta

document.addEventListener("keydown", teclaApretada, false);
function teclaApretada(e) {
  if (e.keyCode == 39) {
    botonDerecho = true;
  } else if (e.keyCode == 37) {
    botonIzquierdo = true;
  }
}
document.addEventListener("keyup", teclaSuelta, false);
function teclaSuelta(e) {
  if (e.keyCode == 39) {
    botonDerecho = false;
  } else if (e.keyCode == 37) {
    botonIzquierdo = false;
  }
}

setInterval(dibujar, 20);


