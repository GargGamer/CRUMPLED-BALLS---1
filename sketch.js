const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground
var bin1, bin2, bin3
var paperball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);

    bin1 = new bin(540,630,30,170)
	bin2 = new bin(600,660,150,30)
	bin3 = new bin(660,630,30,170)

	paperball = new paper(100,660,r,r)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  bin1.display()
  bin2.display()
  bin3.display()
  paperball.display()
 
}



