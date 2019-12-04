//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
createCanvas(400, 400);
}

function draw() {
  background(220);
}

let numDiv;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(212, 244, 254);
  numDiv = 8;//map(mouseX,0,width,5,50);

  for (i = 0; i < numDiv-1; i++){
    for (j = 0; j <numDiv-1; j++){
      avatar((i+1)*width/numDiv,(j+1)*height/numDiv, 15);

    }
  }
}

function avatar(posX, posY, diam){

  fill (252, 242, 123)
  ellipse(posX-diam/1.2,posY-diam/1.2,diam/1.2);
  fill (252, 242, 123)
  ellipse(posX+diam/1.5,posY-diam/1.2,diam/1.2);
  fill (251, 229, 218 )
  ellipse(posX-diam/1.2,posY-diam/1.2,diam/1.9);
  fill (251, 229, 218 )
  ellipse(posX+diam/1.5,posY-diam/1.2,diam/1.9);


  fill(252, 242, 123)
  ellipse(posX,posY,diam*2);


  fill (0)
  ellipse(posX+diam*0,posY+diam/5,diam/2.5);

  fill (251, 203, 179 )
  ellipse(posX+diam*0,posY+diam/1.5,diam/3);

  fill (250)
  ellipse(posX-diam/1.9,posY-diam/5,diam/1.5);
  ellipse(posX+diam/1.9,posY-diam/5,diam/1.5);
  fill (0)
  ellipse(posX-diam/1.9,posY-diam/5,diam/2.5);
  ellipse(posX+diam/1.9,posY-diam/5,diam/2.5);
  fill (250)
  ellipse(posX-diam/1.6,posY-diam/3,diam/5);
  ellipse(posX+diam/2.2,posY-diam/3,diam/5);

}
