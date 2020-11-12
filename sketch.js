
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform;
var ball1,ball2,ball3,ball4,ball5;
var line1,line2,line3,line4,line5;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	platform = Bodies.rectangle(400,100,350,35,{isStatic:true});
	World.add(world,platform);

	ball1 = new Ball(260);
	ball2 = new Ball(330);
	ball3 = new Ball(400);
	ball4 = new Ball(470);
	ball5 = new Ball(540);

	line1 = new Chain(ball1.body,platform.body,260,100);
	line2 = new Chain(ball2.body,platform.body,330,100);
	line3 = new Chain(ball3.body,platform.body,400,100);
	line4 = new Chain(ball4.body,platform.body,470,100);
	line5 = new Chain(ball5.body,platform.body,540,100);

	Engine.run(engine);
  
}


function draw() {

	background("cyan");
	drawSprites();

	Engine.update(engine);

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	line1.display();
	line2.display();
	line3.display();
	line4.display();
	line5.display();

	rectMode(CENTER);
	fill("red");
	rect(platform.position.x,platform.position.y,350,35);
 
}


