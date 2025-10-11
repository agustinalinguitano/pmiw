function boton ( x, y){
  //fill(0, 0, 0, 150);
  //strokeWeight(2);
  //stroke(255, 255, 255, 255)
  //rect(x, y, 455, 35)
  
  if(mouseX > x && mouseX < x + 455 && mouseY > y && mouseY < y + 35){
    fill(0, 0, 0, 250);
    strokeWeight(2);
    stroke(255, 255, 255, 255)
  }else {
  fill(0, 0, 0, 130);
  strokeWeight(2);
  stroke(255, 255, 255, 255)
  
  }
  rect(x, y, 455, 35)

  return mouseX > x && mouseX < x + 455 && mouseY > y && mouseY < y + 35;
}

//function botonSeleccionado ( x, y){
//  fill(0, 0, 0, 230);
//  strokeWeight(2);
//  stroke(255, 255, 255, 255)
//  rect(x, y, 455, 35)
//}

function texto(){
  fill(255);
  strokeWeight(5);
  stroke(0)
  textAlign(LEFT);
}
