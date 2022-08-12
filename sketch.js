
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var leftSide;
var rightSide;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(550,600,20,120);
	rightSide = new Ground(700,600,20,120);
	

	ball = Matter.Bodies.circle(200,100,20,ball_options)
	World.add(world,ball);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
    background(0);
  
 ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyIsDown (UP_ARROW)){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:40,y:50})
	}
}



