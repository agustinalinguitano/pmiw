// https://youtu.be/HN7c9vwZmTw
// Perdon que el video se corta, intente grabarlo varias veces y siempre se cortaba, mi pc estaba funcionando mal :(
let img;
let circulosColor = false;
let cuadrosColor = false;
let ColorCirculosR;
let ColorCirculosA;
let ColorCuadrosR;
let ColorCuadrosA;

function preload() {
  img = loadImage("assets/cuadros.png"); // o "assets/cuadros.png" si usás el editor online
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  image(img, 0, 0);
  noStroke();

  // Cuadros
  for (let i = 0; i < height; i += 40) {
    for (let x = 400; x < width; x += 40) {
      if (cuadrosColor) {
        if ((floor(x / 40) + floor(i / 40)) % 2 === 0) {
          dibujarCuadro(x, i, ColorCuadrosA);
        } else {
          dibujarCuadro(x, i, ColorCuadrosR);
        }
      } else {
        if ((floor(x / 40) + floor(i / 40)) % 2 === 0) {
          dibujarCuadro(x, i, 0);
        } else {
          dibujarCuadro(x, i, 255);
        }
      }
    }
  }

  // Círculos
  for (let i = 20; i < height; i += 40) {
    for (let x = 420; x < width; x += 40) {
      if (circulosColor) {
        if ((floor(x / 40) + floor(i / 40)) % 2 === 0) {
          dibujarCirculo(x, i, ColorCirculosR);
        } else {
          dibujarCirculo(x, i, ColorCirculosA);
        }
      } else {
        if ((floor(x / 40) + floor(i / 40)) % 2 === 0) {
          dibujarCirculo(x, i, 255);
        } else {
          dibujarCirculo(x, i, 0);
        }
      }
    }
  }
}

function dibujarCuadro(x, y, c) {
  fill(c);
  rect(x, y, 40, 40);
}

function dibujarCirculo(x, y, c) {
  fill(c);
  circle(x, y, 15);
}

function mousePressed() {
  circulosColor = !circulosColor;
  cuadrosColor = !cuadrosColor;
  ColorCirculosR = generarColorAleatorio(200, 255, 50, 150, 150, 255);
  ColorCuadrosR = generarColorAleatorio(200, 255, 50, 150, 150, 255);
  ColorCirculosA = generarColorAleatorio(200, 255, 200, 255, 0, 100);
  ColorCuadrosA = generarColorAleatorio(200, 255, 200, 255, 0, 100);
}

function generarColorAleatorio(rMin, rMax, gMin, gMax, bMin, bMax) {
  let r = random(rMin, rMax);
  let g = random(gMin, gMax);
  let b = random(bMin, bMax);
  return color(r, g, b);
}
