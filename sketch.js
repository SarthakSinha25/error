

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var NewtonPendulem1,NewtonPendulem2,NewtonPendulem3,NewtonPendulem4,Box,bob1,bob2,bob3,bob4;
var pendulem

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Box = new Rod(400,50,300,50);


	bob1 = new Bob(450,100,20);
	bob2 = new Bob(500,100,20);
	bob3 = new Bob(550,100,20);
	bob4 = new Bob(600,100,20);      

	//variable names start with small letter
	NewtonPendulem1 = new Pendulem(box.body,bob1.body); //problem is faced in this line--come to Pendulum
	NewtonPendulem2 = new Pendulem(box.body,bob2.body);  //yes mam ok
	NewtonPendulem3= new Pendulem(box.body,bob3.body);
	NewtonPendulem4 = new Pendulem(box.body,bob4.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Box.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  NewtonPendulem1.display();
  NewtonPendulem2.display();
  NewtonPendulem3.display();
  NewtonPendulem4.display();
  drawSprites();
 
}



