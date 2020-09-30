
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "ATTACHED";

function preload()
{
	imageM = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	
   engine = Engine.create();
	world = engine.world;
	
	tree1 = new Tree(550,700);
  

	ground1 = new Ground(400,650,800,20);

	

  boy = createSprite(100,525,50,100);
  boy.addImage(imageM);
  boy.scale=0.2;

  mango1 = new Mango(500,70);
  mango2 = new Mango(675,150);
  mango3 = new Mango(650,250);
  mango4 = new Mango(550,200);
  mango5 = new Mango(575,150);
  mango6 = new Mango(630,100);
  mango7 = new Mango(450,175);
  mango8 = new Mango(350,200);
  mango9 = new Mango(550,50);

  stone1 = new Stone(150,650);

  rope1 = new StoneLauncher(stone1.body,{x:170,y:525});


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  

  tree1.display();
  ground1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  stone1.display();
  rope1.display();











  
  drawSprites();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
 
}

function mouseDragged(){
  if(gameState === "ATTACHED"){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){

    rope1.fly();
    gameState = "LAUNCHED";
}

function keyPressed(){
    if(keyCode===32){
     rope1.attach(stone1.body);
     gameState ="ATTACHED";
    }
}

function detectCollision(lstone,lmango){
    mangopos = lmango.body.position;
	 stonepos = lstone.body.position;

	var distance = dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
		if(distance<lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
	}






