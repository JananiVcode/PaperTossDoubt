
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
//var box;
var box1;
var box2;
var box3;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,650,width,20);
	paper = new Paper(70,560,20);
	box1 = new Box(500,610,10,70);
	box1.shapeColor="yellow";
	box2 = createSprite(570,635,150,10);
	box2.shapeColor="yellow";
	box3 = new Box(650,605,10,70);
	box3.shapeColor= "yellow";


	Engine.run(engine);
}

 function draw(){
  
  rectMode(CENTER);
  background(0);
  paper.display();
  box1.display();
  box3.display();
  ground.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-30});

	}
}

