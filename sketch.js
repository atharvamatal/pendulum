
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var C1,C2,C3,C4,C5;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
engine = Engine.create();
	world = engine.world;

Engine.run(engine);


	C1 = new circle (200,200,50);
}


function draw() {
  rectMode(CENTER);
  background(0);
C1.display();
  drawSprites();
 
}



