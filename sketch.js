var landing_desktop;
var landing_mobile;

function preload(){
  landing_desktop = loadImage('assets/Landing_Desktop.png');
  landing_mobile = loadImage('assets/Landing_Mobile.png');
}

function setup() {
  createCanvas(windowWidth,3000);

}

function draw() {
  image(landing_desktop,0,0,width,landing_desktop.height);

  if (width < 600) {
    image(landing_mobile,0,0,width,landing_mobile.height);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
