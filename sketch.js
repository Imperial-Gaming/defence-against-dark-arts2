var download, background2, canvas, Harry, backgroundImg;

var obstacle1, godzilla, magma, soldier, robot;

var boy, girl;

var birdFly, bird;

function preload(){
 obstacle1 = loadImage("../images/obstacle1.png");
  robot = loadImage("../images/robot.png");
 godzilla = loadImage("../images/godzilla.png");
  download = loadImage("../images/download.png");
  soldier = loadImage("../images/soldier.png");
 magma = loadImage("../images/magma.png");
 background2 = loadImage("../images/background2.jpg");
 birdFly = loadAnimation("../images/A.png","../images/B.png", "../images/C.png", "../images/D.png", "../images/E.png", "../images/F.png", "../images/G.png", "../images/H.png", "../images/I.png");
}

function setup(){
  canvas = createCanvas(1000, 700);
  
  backgroundImg = createSprite(500, 350, 1000, 50);
  backgroundImg.addImage("background", background2);

  backgroundImg.x = backgroundImg.width/2;

  Harry = createSprite(200, 200, 100, 150);
  Harry.addImage(download);
}


function draw(){
  background(220);
  backgroundImg.velocityX = -2;
  if (backgroundImg < 0){
    backgroundImg.x = backgroundImg.width/2
  }

  if (keyDown("UP_ARROW")){
    Harry.y = Harry.y -3;
  }
  if (keyDown("DOWN_ARROW")){
    Harry.y = Harry.y +3;
  }

  //Spawn The Bird
  spawnBirds();
  drawSprites();
}

function spawnBirds(){
   if (frameCount%80 === 0){
     bird = createSprite(-50, 100, 80, 50);
     bird.addAnimation("running", birdFly);
     bird.y = Math.round(random(10, 100));
     bird.velocityX = 5;
     bird.scale = 0.5;
   }
}
