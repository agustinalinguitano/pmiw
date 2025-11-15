class Sasara {

  constructor( e, s, sistema ) {
    this.x = 237;
    this.y = 240;
    this.t = 150;
    this.v = 20;


    this.enemigo = e;
    this.salvacion = s;
    this.sistema = sistema;
  }

  dibujar() {

    image(sasara[1], this.x, this.y, this.t);
  }

  mover() {
    if (keyCode === LEFT_ARROW ) {

      this.x -= this.v;
    }
    if (keyCode=== RIGHT_ARROW ) {

      this.x += this.v;
    }
  }

  colisionar() {
    for ( let i = 0; i<3; i++ ) {

      if ( dist( this.x, this.y, this.enemigo[i].x, this.enemigo[i].y) < 70 ) {

        image(sasara[2], this.x, this.y, this.t)
         efectos[1].play();
        //this.salvacion.desaparecer();
        this.sistema.perderVida();
        this.enemigo[i].desaparecer();
      }
    }
    if ( dist( this.x, this.y, this.salvacion.x, this.salvacion.y) < 70 ) {

      image(sasara[3], this.x, this.y, this.t)
       efectos[2].play();
       this.sistema.Salvacio();
      this.salvacion.desaparecer();
    }
  }
}
