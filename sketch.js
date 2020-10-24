
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var alien;




function setup() {
	createCanvas(400, 400);


	alien = createSprite(200,300,50,50);

	if(keyDown('space')){
	alien.velocityY = 3; 
	}
	
	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	

}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



