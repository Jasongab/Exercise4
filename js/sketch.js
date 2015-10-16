var imgbg
var imgBob;



function preload() {
imgbg=loadImage('img/images-3.jpg');//
imgBob=loadImage('img/spongeBob.png');// 
}
    




function setup() {
createCanvas(displayWidth,displayHeight);

image(imgbg);
image(imgBob);
}
