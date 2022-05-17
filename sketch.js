
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle1
var angle2
var angle3
var angle4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ground_options ={
		isStatic: true
	  };

	  var  rotator_options ={
		isStatic: true

	  };
	  var  block_options ={
		isStatic: true

	  };

	  var ball_options ={
		restitution:0.4,
		friction:0.02,
	  }

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	ground = Bodies.rectangle(400,690,800,20,ground_options)
	World.add(world,ground);

	rotator1 = Bodies.rectangle(400,200,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(400,200,150,20,rotator_options);
	World.add(world,rotator2);
	
	rotator3 = Bodies.rectangle(400,200,150,20,rotator_options);
	World.add(world,rotator3);

	block1 = Bodies.rectangle(200,400,200,20,block_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(600,400,200,20,block_options);
	World.add(world,block2);

	ball = Bodies.circle(400,10,10,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(400,10,10,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(400,10,10,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(400,10,10,ball_options);
	World.add(world,ball4);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.4;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.3;

  

  background(134);
  rect(ground.position.x,ground.position.y,800,20);
  rect(rotator1.position.x,rotator1.position.y,150,20);
  rect(rotator2.position.x,rotator2.position.y,150,20);
  rect(rotator3.position.x,rotator3.position.y,150,20);
  rect(block1.position.x,block1.position.y,200,20);
  rect(block2.position.x,block1.position.y,200,20);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball.position.y,10);
  ellipse(ball3.position.x,ball.position.y,10);
  ellipse(ball4.position.x,ball.position.y,10);
  drawSprites();

}


