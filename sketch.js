
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    platform = new Ground(400,50,700,20)
	ball1 = new Ball(400,500,50)
	ball2 = new Ball(360,500,50)
	ball3 = new Ball(320,500,50)
	ball4 = new Ball(540,500,50)
	ball5 = new Ball(580,500,50)
    chain1 = new chain(ball1.body,{x:400,y:50})
	chain2 = new chain(ball2.body,{x:300,y:50})
	chain3 = new chain(ball3.body,{x:200,y:50})
	chain4 = new chain(ball4.body,{x:500,y:50})
	chain5 = new chain(ball5.body,{x:600,y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  platform.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
  drawSprites();
}
function keyPressed(){
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball5.body,ball5.body.position,{x:550,y:0});
    }
}



