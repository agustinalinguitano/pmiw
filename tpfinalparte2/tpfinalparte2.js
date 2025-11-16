// https://youtu.be/bTRzC_TfqD0
let vidas = []
  let sasara = []
  let peces = []
  let fondo
  let pantallas = []
  let ichisama;
let cronometro;

let efectos = []

  let musicaIniciada = false;
let cambio = false;


let e;
let tiempo = 0;
let segundos = 60000; 
let cronometroIniciado = false;

let videojuego;

function preload() {

  vidas[0] = loadImage('/assets/vidas0.png')
    vidas[1] = loadImage('/assets/vidas1.png')
    vidas[2] = loadImage('/assets/vidas2.png')
    vidas[3] = loadImage('/assets/vidas3.png')

    cronometro = loadImage('/assets/reloj1.png')

    sasara[1] = loadImage('/assets/sasara1.png')
    sasara[2] = loadImage('/assets/sasara2.png')
    sasara[3] = loadImage('/assets/sasara3.png')

    peces[1] = loadImage('/assets/pez.png')
    peces[2] = loadImage('/assets/salvacion.png')

    pantallas[1] = loadImage('/assets/ganar.png')
    pantallas[2] = loadImage('/assets/perder.png')
    pantallas[3] = loadImage('/assets/inicio.png')
    pantallas[4] = loadImage('/assets/tutorial.png')
    pantallas[5] = loadImage('/assets/creditos.png')

    efectos[1] = loadSound('assets/grito.mp3');
  efectos[2] = loadSound('assets/sasaraSalvacion.mp3');
  ichisama = loadSound('assets/ichisama.mp3');


  fondo = loadImage('/assets/fondo1.png')

    e = 0;
}


function setup() {
  createCanvas(640, 480 );


  videojuego = new Sistema();
}

function draw() {

  
  background( 255 );

// FRENA LA MUSICA AL TERMINAR EL JUEGO
  if ((e === 3 || e === 4) && musicaIniciada) {
    ichisama.stop();
    musicaIniciada = false;
  }
  
  
  image(fondo, 0, 0);


  if (e == 0) {
    image(pantallas[3], 0, 0);
    //noFill();
    //stroke(255,0,0);
    //rect (191,77,223,87);
    //rect(439,402,154,48);
  }



  if (e == 1) {
    image(pantallas[4], 0, 0);
  }



  if (e == 2) {

    if (!cronometroIniciado) {
      tiempo = millis();
      cronometroIniciado = true;
    }
    
    // TE INDICAN EL TIEMPO RESTANTE, HACE QUE EL TIEMPO VAYA DE 1 MINUTO A 0
    
    let tiempoTranscurrido = millis() - tiempo;
    let tiempoRestante = segundos - tiempoTranscurrido;
    let segundosRestantes = floor(tiempoRestante / 1000);



    if (segundosRestantes < 0) {
      segundosRestantes = 0;
    }

    image(cronometro, 0, 0);
    
    fill(255, 255, 255);
    //strokeWeight(10);
    //stroke(10);
    textSize(20);
    
    // ------- TE INDICA SI ESTAS A MENOS DE 10 SEGUNDOS
   
    if (segundosRestantes <= 10) {
      fill(255, 0, 0);
    } else {
      fill(255, 255, 255);
    }

    text(segundosRestantes, 105, 60);

// INICIA LA CLASE

    videojuego.dibujar();
    
    // MUESTRA LAS VIDAS A MEDIDA QUE LAS VAS PERDIENDO
    image(vidas[videojuego.vidasActuales], 0, 0);

// SI LLEGAS A 0 VIDAS TE LLEVA A LA PANTALLA DE PERDER
    if (videojuego.vidasActuales <= 0) {
      e = 3;
    }
    
// SI TERMINA EL TIEMPO GANASTE

    if (tiempoRestante <= 0) {
      e = 4;
    }
  }



  if (e == 3) {
    image(pantallas[2], 0, 0);
    //noFill();
    //stroke(255, 0, 0);
    //strokeWeight(5);
    //rect(233, 192, 239, 70);
  }

  if (e == 4) {
    image(pantallas[1], 0, 0);
  }

  if  (e == 5) {
    image(pantallas[5], 0, 0);
  }
}


function mousePressed() {


// ----------- INICIAR MUSICA
  
  if (!musicaIniciada && e === 1) {
    ichisama.loop();
    musicaIniciada = true;
  }

//-------- NO TE DEJA AVANZAR DE LA PANTALLA 2

  if ( e == 2) {
    e=2
      return;
  }


  //if ( e == 3) {
  //  e = 0;
  //}
  //if ( e==4) {
  //  e=0;
  //}
  
  //--------------- INICIAR JUEGO
  
  if (e === 0) {
    if (mouseX > 191 && mouseX < 191+223 && mouseY > 77 && mouseY < 77+87) {
      e = 1;
      return;
    }
  }

//---------------- CREDITOS

  if (e === 0) {
    if (mouseX > 439 && mouseX < 439+154 && mouseY > 402 && mouseY < 402+48) {
      e = 5;
      return;
    }
    return;
  }

//---------------- VOLVER A PANTALLA DE INICIO

  if (e === 5) {
    if (mouseX > 489 && mouseX < 489+52 && mouseY > 378 && mouseY < 378+38) {
      e = 0;

      return;
    }
    return;
  }

//----------------------------------BOTON REINICIO

  if (e === 3) { // -------------- PERDER

    if (mouseX > 233 && mouseX < 472 && mouseY > 192 && mouseY < 262) {

      e = 0;
      tiempo = 0; 
      cronometroIniciado = false; 
      musicaIniciada = false;
      cambio = false;
      videojuego = new Sistema();
      return;
    }
    return;
  }

  if (e === 4) { //-------------------- GANAR

    if (mouseX > 233 && mouseX < 472 && mouseY > 192 && mouseY < 262) {
      e = 0;
      tiempo = 0; 
      cronometroIniciado = false; 
      musicaIniciada = false;
      cambio = false;
      videojuego = new Sistema();
      return;
    }
    return;
  }
  
  if (e === 1) {
    e++;
  }
}



function keyPressed() {

  videojuego.teclear();
}
