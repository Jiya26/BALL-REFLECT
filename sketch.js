var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,50,50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  rect1 = createSprite(100, 400, 50, 50);
  rect1.shapeColor = "blue";
  rect1.debug = true;
  rect2 = createSprite(800, 400, 50, 50);
  rect2.shapeColor = "blue";
  rect2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1.velocityX = +5;
  rect2.velocityX = -5
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(rect2,rect1);
  
  drawSprites();
}

