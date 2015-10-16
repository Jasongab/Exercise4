var imgbg //mask
var imgBob;//spongebob



function preload() {
imgbg=loadImage('img/images-3.jpg');// mask 
imgBob=loadImage('img/images-1.jpg');// spongebob
imgPic=loadImage('img/images-2.jpg'); ///de la soul    
}
    




function setup() {
createCanvas(displayWidth,displayHeight);
image(imgPic,0,0,displayWidth,displayHeight); 

   
}

function draw(){
    image(imgbg);
    image(imgBob, mouseX, mouseY);
    
    
    var x1= random(0,displayWidth);
    var y1=0;
    
    var x2 = round(x1 + random(-7,7));
    var y2 =round(random(-5,5));
    
    var w = random(35,70)
    var h = displayHeight; 
    
    copy(x1,y1,w,h, x2,y2,w,h);

}