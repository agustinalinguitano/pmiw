class Sistema {

  constructor() {


    this.enemigos = [];


    for ( let i = 0; i<3; i++ ) {
      this.enemigos[i] = new PezMalo( random(10) );
    }

    this.salvacion = new Salvacion( random(10) );
    this.jugador = new Sasara( this.enemigos, this.salvacion, this );

    this.vidasActuales = 3;
    this.vidasMaximas = 3;
  }

  dibujar() {

    this.salvacion.actualizar();
    this.salvacion.dibujar();
    this.salvacion.reciclar();

    this.jugador.dibujar();
    this.jugador.colisionar();
    //
    for ( let i = 0; i<3; i++ ) {
      this.enemigos[i].actualizar();
      this.enemigos[i].dibujar();
      this.enemigos[i].reciclar();
    }
  }

  teclear() {
    this.jugador.mover();
  }

  perderVida() {
    this.vidasActuales--;
    console.log("Vidas: " + this.vidasActuales);
  }

  Salvacio() {
    if (this.vidasActuales < this.vidasMaximas) {
      this.vidasActuales++;
      console.log("Vidas: " + this.vidasActuales);
    }
  }
}
