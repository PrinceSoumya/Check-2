
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constr = Matter.Constraint;

var Rop,bob1,bob2,bob3,bob4,bob5,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Rop =  new Roof(400,200,400,50);
  bob1 = new balls(300,500);
  bob2 = new balls(350,500);
  bob3 = new balls(400,500);
  bob4 = new balls(450,500);
  bob5 = new balls(500,500);
  rope1 = new Chain(bob1.body,Rop.body,-2,0)

	Engine.run(engine);
  
}


function draw() {
  background(200);
Engine.update=Engine;
  
Rop.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
ropes.display()

}



