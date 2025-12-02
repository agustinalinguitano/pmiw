
let inicio;
let sasara = [];
let dial;
let jakurai = [];
let daisu = [];
let ichijiku;
let fondo;
let png = [];
let finales = [];
let mic;
let fotos = [];

let e;
let indice;

let velImagen = 5;
let x = 480;
let limiteX = 61;
let y = -290;
let limiteY = 135;
let degrade = 0;

let ost = [];
let musicaIniciada = false;
let cambio = false;
let botones = [];
let voces = [];



function preload() {
  
    inicio =   loadImage('assets/inicio1.png')
    
    finales[1] = loadImage('assets/final.png')
    finales[2] = loadImage('assets/final1.png')
    finales[3] = loadImage('assets/final2.png')
    finales[4] = loadImage('assets/creditos.png')

    ichijiku = loadImage('assets/ichijiku1.webp')

    fondo = loadImage('assets/fondo.webp')

    sasara[1] = loadImage('assets/sasara2.webp')
    sasara[2] = loadImage('assets/jakuraiysasara1.webp')
    sasara[3] = loadImage('assets/sasaraenojado.webp')
    sasara[4] = loadImage('assets/sasaramojado.jpg')

    jakurai[1] = loadImage('assets/jakurai1.webp')
    jakurai[2] = loadImage('assets/jakuraideterminado.jpg')


    daisu[1] = loadImage('assets/dicefeliz.webp')
    daisu[2] = loadImage('assets/diceenojado.webp')
    
     ramugen = loadImage('assets/ramudagentaro.jpg')
     
     rosho = loadImage('assets/rosho.jpg')
     
     png[1] = loadImage('assets/fondo2.png')
     png[2] = loadImage('assets/sasara2.png')
     png[3] = loadImage('assets/jakurai2.png')
     png[4] = loadImage('assets/dialogo2.png')
     png[5] = loadImage('assets/dialogo3.png')
     png[6] = loadImage('assets/diceenojado2.png')
     png[7] = loadImage('assets/dialogosolo.png')
     png[8] = loadImage('assets/sasaradia.png')
     png[9] = loadImage('assets/jakuraidia.png')
     
     ost[1] = loadSound('assets/ost-1.mp3');
     ost[2] = loadSound('assets/ost-2.mp3');
     ost[3] = loadSound('assets/ost-3.mp3');
     ost[4] = loadSound('assets/undertale.mp3');

     
     fotos[1] = loadImage('assets/sasarapez.png')
     fotos[2] = loadImage('assets/sasarafoto.png')
     
     botones[1] = loadSound('assets/efecto-1.mp3');
     botones[2] = loadSound('assets/efecto-2.mp3');
     botones[3] = loadSound('assets/efecto-3.mp3');
     
     voces[1] = loadSound('assets/dicegrito.mp3');
     voces[2] = loadSound('assets/sasaramalvado.mp3');
     voces[3] = loadSound('assets/sasarayei.mp3');
     voces[4] = loadSound('assets/jakuraiye.mp3');
     voces[5] = loadSound('assets/jakurairisa.mp3');
     voces[6] = loadSound('assets/jakuraipensativo.mp3');
     voces[7] = loadSound('assets/sasara-oh.mp3');


     mic = loadImage('assets/microfono.png')
     
     



  dial = loadStrings( 'assets/dialogos4.txt');
  indice = 0;
  e = 0;  // "pantalla_01"
  
  
}


function setup() {
  createCanvas(640, 480);
  background(255);
  console.log( dial );
  textSize(15);
  
  image(mic, mouseX, mouseY);
  noCursor();

} 


function draw() {
  console.log( mouseX + "/" + mouseY);
  
    if (e === 45 && !cambio) {
    ost[1].stop();
    ost[2].loop();
    cambio = true;
    }
    
    if (e === 54 && !cambio) {
    ost[1].stop();
    ost[2].stop();
    ost[3].loop();
    cambio = true;
    }
    
    if (e === 34 && !cambio) {
    ost[1].stop();
    ost[2].stop();
    ost[3].stop();
    ost[4].loop();
    cambio = true;
    }
    
    // if (e === 37 && !cambio) {
    //ost[4].stop();
    //ost[1].stop();
    //ost[3].stop();
    //ost[2].loop();
    //cambio = true;
    //}


    
  if ( e== 0) {
    image( inicio, 0, 0 );
    //fill(255);
    //strokeWeight(5);
    //stroke(0)
  }
  
  
  //----------------------------------------- PANTALLA INICIO
  if ( e== 1) {
    image( ichijiku, 0, 0 );
    //fill(255);
    //strokeWeight(5);
    //stroke(0)
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 2) { //---------------------- 1
    
    if( y < limiteY){
      y += velImagen;
    }
    if( x > limiteX){
      x -= velImagen;
    }
    
    image( png[1], 0,0);
    image( png[2], 0,y);
    image( png[3], 0,x);
    image( png[4], 0,0);
    
    
    texto();
    text(dial[indice], 92, 325, 500);
    
    //if(ost[1].isPlaying){
    //  ost[1].play
    //}
    
  } else if ( e == 3) { //-----------------------2

    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 4) { //-----------------------3

    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 5) { //-----------------------4

    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 6) { //-----------------------5 inicia competencia

    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 7) { //-----------------------6

    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 8) { //-----------------------7

    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 9) { //-----------------------8 ELECCION DE CARNADA

    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    //textAlign(CENTER);
    text("Carnada Normal", 275 , 162);
    text("Carnada Rara", 280 , 223);

  } else if ( e == 10) { //-----------------------9
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 11) { //-----------------------10
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 12) { //-----------------------11
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 13) { //-----------------------12
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 14) { //-----------------------13 ELECCION DE SI DEJAR A SASARA PESCAR O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    text("Dejar pescar a Sasara", 265 , 162);
    text("Jakurai sigue pescando", 270 , 223);

  } else if ( e == 15) { //-----------------------14 
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 16) { //-----------------------15
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 17) { //-----------------------16
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 18) { //-----------------------17
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 19) { //-----------------------18
    image( fotos[1], 0, 0 );
    image( png[7], 0, 0 );
    
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 20) { //-----------------------19
    image( fotos[1], 0, 0 );
    image( png[7], 0, 0 );
    
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 21) { //-----------------------20
    image( sasara[2], 0, 0 );
    
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 22) { //-----------------------21
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 23) { //-----------------------22 FINAL SASARA RARO
    image( finales[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 24) { //-----------------------23
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 25) { //-----------------------24
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 26) { //-----------------------25
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 27) { //-----------------------26 FINAL GANAN JAKURAI NO PUEDE CELEBRAR 
    image( finales[2], 0, 0 );
    //image( png[6], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
   
    
  } else if ( e == 28) { //-----------------------27
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 29) { //-----------------------28
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 30) { //-----------------------29
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 31) { //-----------------------30
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 32) { //-----------------------31 ELECCION DE SI DEJAR A JAKURAI PESCAR O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    text("Dejar pescar a Jakurai", 265 , 162);
    text("Sasara tiene una corazonada", 250 , 223);
    
  } else if ( e == 33) { //-----------------------32
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 34) { //-----------------------33 
    image( jakurai[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 35) { //-----------------------34
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 36) { //-----------------------35 ELECCION DE SI PESCAR EN BURBUJAS O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    text("Pescar en las burbujas", 275 , 162);
    text("No pescar en las burbujas", 265 , 223);
    
  } else if ( e == 37) { //-----------------------36
    image( jakurai[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 38) { //-----------------------37
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 39) { //-----------------------38
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 40) { //-----------------------39 FINAL RAMUGEN
    image( ramugen, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 41) { //-----------------------40
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 42) { //-----------------------41
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 43) { //-----------------------42
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 44) { //-----------------------43 ELECCION DE VER QUE PASA O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
     text("No ver que pasa", 275 , 162);
    text("Ver que pasa", 285 , 223);
    
  } else if ( e == 45) { //-----------------------44
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 46) { //-----------------------45
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 47) { //-----------------------46
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 48) { //-----------------------47
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 49) { //-----------------------48
    
    if( y < limiteY){
      y += velImagen;
    }
    
    image( png[1], 0 ,0 );
    image( png[6], y, 0 );
    image( png[5], 0, 0 );
    
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 50) { //-----------------------49
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 51) { //-----------------------50
    image( daisu[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 52) { //-----------------------51
    image( daisu[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 53) { //-----------------------52 FINAL DAISU
    image( sasara[2], 0, 0 );
    
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 54) { //-----------------------53
    image( fotos[2], 0, 0 );
    image( png[7], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 55) { //-----------------------54
    image( rosho, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 56) { //-----------------------55
    image( fotos[2], 0, 0 );
    image( png[8], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 57) { //-----------------------56
    image( sasara[4], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 58) { //-----------------------57
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 59) { //-----------------------58
    image( sasara[4], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 60) { //-----------------------59 FINAL ROSHO
    image( sasara[4], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 61) { //-----------------------60
    image( sasara[4], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  }else if ( e == 62) { //-----------------------60
    image( finales[1], 0, 0 );
    
  }else if ( e == 63) { //-----------------------60
    image( finales[4], 0, 0 );
    
  }
  
  noCursor();
  //image(mic, mouseX, mouseY);
  
  if(mouseIsPressed === true){
  image(mic, mouseX, mouseY, 20, 20);
  }else{
  image(mic, mouseX, mouseY);
  }
  
}


function mousePressed() {
  
//--------------------------------------------------- BOTONES PARA ELECCIONES
  
  if (e === 9) {
    if (mouseX > 110 && mouseX < 110+455 && mouseY > 140 && mouseY < 140+35) {
      e = 10;
      indice = 10;
      botones[1].play();
      return;
    }if (mouseX > 110 && mouseX < 110+455 && mouseY > 200 && mouseY < 200+35) {
      e = 28;
      indice = 28;
      botones[1].play();
      return;
    }
    return;
  }
  
  if (e === 14) {
    if (mouseX > 110 && mouseX < 110+455 && mouseY > 140 && mouseY < 140+35) {
      e = 15;
      indice = 15;
      botones[1].play();
      return;
    }if (mouseX > 110 && mouseX < 110+455 && mouseY > 200 && mouseY < 200+35) {
      e = 24;
      indice = 24;
      botones[1].play();
      return;
    }
    return;
  }
  
  if (e === 32) {
    if (mouseX > 110 && mouseX < 110+455 && mouseY > 140 && mouseY < 140+35) {
      e = 33;
      indice = 33;
      botones[1].play();
      return;
    }if (mouseX > 110 && mouseX < 110+455 && mouseY > 200 && mouseY < 200+35) {
      e = 41;
      indice = 41;
      botones[1].play();
      return;
    }
    return;
  }
  
   if (e === 36) {
    if (mouseX > 110 && mouseX < 110+455 && mouseY > 140 && mouseY < 140+35) {
      e = 37;
      indice = 37;
      botones[1].play();
      return;
    }if (mouseX > 110 && mouseX < 110+455 && mouseY > 200 && mouseY < 200+35) {
      e = 24;
      indice = 24;
      botones[1].play();
      return;
    }
    return;
  }
  
  if (e === 44) {
    if (mouseX > 110 && mouseX < 110+455 && mouseY > 140 && mouseY < 140+35) {
      e = 45;
      indice = 45;
      botones[1].play();
      return;
    }if (mouseX > 110 && mouseX < 110+455 && mouseY > 200 && mouseY < 200+35) {
      e = 54;
      indice = 54;
      botones[1].play();
      return;
    }
    return;
  }
  
  //------------------------------------------------------- PANTALLA DE FINALES
  
   if(e === 23){
   e = 62;
   indice = 62;
   return;
   }
  if(e === 27){
   e = 62;
   indice = 62;
   return;
   }
   if(e === 40){
   e = 62;
   indice = 62;
   return;
   }
   if(e === 53){
   e = 62;
   indice = 62;
   return;
   }
   if(e === 60){
   e = 62;
   indice = 62;
   return;
   }

  //---------------------------------------------------------- BOTON DE REINICIO Y PANTALLA FINAL
  
if(e === 62){
   if(mouseX > 309 && mouseX < 435 && mouseY > 244 && mouseY < 287){
      e = 0;
      indice = 0;
      botones[1].play();
      ost[1].stop();
      ost[2].stop();
      ost[3].stop();
      ost[4].stop();
      cambio = false;
      musicaIniciada = false;
      return;
   } else if (mouseX > 147 && mouseX < 273 && mouseY > 244 && mouseY < 287){
      e = 63;
      botones[1].play();
      return;
   }
  return;
}

if( e === 63){
  if(mouseX >234 && mouseX < 356 && mouseY > 290 && mouseY < 315){
  e = 0;
  indice = 0;
  botones[1].play();
  ost[1].stop();
  ost[2].stop();
  ost[3].stop();
  ost[4].stop();
  cambio = false;
  musicaIniciada = false;
  return;
  }
  return;
}


//------------------------------------- SONIDO

  //if(e === 0){
  //  if( ost[1].isPlaying());
  //  ost[1].stop
  //  e = 0
  //  indice = 0
  //} else if( e === 1){
  //ost[1].play
  //e = 1
  //indice = 1
  //}
 if (!musicaIniciada && e === 0) {
    ost[1].loop();
    musicaIniciada = true;
 }
  if (e === 44) {
    ost[1].stop();  
    ost[2].loop();  
  }
  
if (e === 48) {
    voces[1].play();
  }
 
 if (e === 41) {
    voces[2].play();
  }
  
  if (e === 54) {
    voces[7].play();
  }
  if (e === 15) {
    voces[2].play();
  }
  if (e === 17) {
    voces[7].play();
  }
  if (e === 19) {
    voces[5].play();
  }
  if (e === 4) {
    voces[6].play();
  }
  if (e === 49) {
    voces[6].play();
  }
 if (e === 46) {
    voces[3].play();
  }
 
  botones[2].play();
   e++;
  indice++;
  botones
  if ( indice == 61 ) {
    indice = 0;
  }
  if ( e == 61 ) {
    e = 0;
  }

}

function keyPressed() {
  e--;
  indice--;
}
