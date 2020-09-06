
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(100,250,30);
	roof = new Roof(100,50,200,10);

	rope = new Rope(bob1.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  roof.display();

  bob1.display();

  rope.display();

  drawSprites();
 
}



