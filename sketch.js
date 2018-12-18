var landing_gialla;
var landing_bianca;

function preload(){
  landing_gialla = loadImage('assets/Risorsa9.png');
  landing_bianca = loadImage('assets/Risorsa10.png');
}

function setup() {
  createCanvas(windowWidth,3000);

}

function draw() {
  image(landing_gialla,0,0,width,landing_gialla.height);

  if (mouseIsPressed == true) {
    image(landing_bianca,0,0,width,landing_bianca.height);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
