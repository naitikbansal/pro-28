
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImage;
var groundObject;
var tree;
var mango1;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   boy= new Boy(100,600,5,10);
   groundObject=new Ground(800,700,1600,20);
  tree=new Tree(550,350,5,250);
     
  mango1=new Mango(550,10,96,240);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
  boy.display();
  mango1.display();
  tree.display();
  groundObject.display();
  
  
 
}



