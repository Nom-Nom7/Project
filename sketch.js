var canvas;
var music1;
var sq;
var shape,shape2,shape3,shape4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    shape1 = createSprite(100,575,200,10);
    shape1.shapeColor = "orange";

    shape2 = createSprite(300,575,200,10);
    shape2.shapeColor = "red";

    shape3 = createSprite(500,575,200,10);
    shape3.shapeColor = "cyan";

    shape4 = createSprite(700,575,200,10);
    shape4.shapeColor = "green";

    sq = createSprite(random(20,750),300,20,20);
    sq.shapeColor = "white";
    sq.velocityX = 10;
    sq.velocityY = 10;

}

function draw() {
    background(rgb(169,169,169));

    var edges = createEdgeSprites();

    sq.bounceOff(edges);

   if(shape1.isTouching(sq) && sq.bounceOff(shape1)){
      sq.shapeColor = "orange";
      music.play();
  }

  if(shape2.isTouching(sq)){
      sq.shapeColor = "red";
      sq.velocityX = 0;
      sq.velocityY = 0;
      music.stop();
  }

  if(shape3.isTouching(sq) && sq.bounceOff(shape3)){
      sq.shapeColor = "cyan";
  }

  if(shape4.isTouching(sq) && sq.bounceOff(shape4)){
      sq.shapeColor = "green";
  }

    drawSprites();

}