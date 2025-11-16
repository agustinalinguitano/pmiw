class Salvacion {

  
  constructor( velocidad ) { 
    
    this.x = Math.floor( Math.random() * 800 );
    this.y = -100;
    
    this.vel = velocidad;
    this.mostrar = true;  
  }

 
  dibujar() {
    if ( this.mostrar ) {  
      image(peces[2], this.x, this.y);
    }
  }

  actualizar() {
  
  this.y = this.y + this.vel;
}

  reciclar() {
  
  if (this.y >= height + 100) {
    this.x = int(random(width));
    this.y = -100;
    this.mostrar = true; 
  }
}

  
  desaparecer() {
    this.mostrar = false;
    this.x = Math.floor( Math.random() * 800 );
    this.y = -100;
  }
}
