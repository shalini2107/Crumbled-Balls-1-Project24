
var log1,log2,log3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(1500,600);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(700,570,1900,20);
  log1=new Dustbin(1120,550,340,20);
  log2=new Dustbin(1280,500,20,80);
  log3=new Dustbin(960,500,20,80);
  ball=new Paper(80,420);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
}
}

