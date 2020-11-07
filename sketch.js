const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

function preload(){

  polygon_image = loadImage("download.jpg");


  backgroundImg2 = loadImage("sprites/sunny-day-backgrounds-1.jpg");

}



function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  groundObject = new Ground(600,height,1200,20);
  
  block8 = new Block(330,235,30,40);
  block9 = new Block (360,235,30,40);
  block10 = new Block (390,235,30,40);
  block11 = new Block (420,235,30,40);
  block12 = new Block (450,235,30,40);
  block13 = new Block (360,195,30,40);
  block14 = new Block (390,195,30,40);
  block15 = new Block (420,195,30,40);
  block16 = new Block (390,155,30,40);

  block1 = new Block(630,235,30,40);
  block2 = new Block (660,235,30,40);
  block3 = new Block (690,235,30,40);
  block4 = new Block (720,235,30,40);
  block5 = new Block (750,235,30,40);
  block6 = new Block (660,195,30,40);
  block7 = new Block (690,195,30,40);
  block21 = new Block (720,195,30,40);
  block20 = new Block (690,155,30,40);

  stand1 = new Stand(390,300,250,10)
  stand2 = new Stand(700,270,200,10)

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  rope = new Rope(this.polygon,{x : 100,y : 200});

  
  getTime();

  
}
function draw() {
  background(backgroundImg2);   
  textSize(35)
  fill("black");
  text ("score"+score,width-200,50)

  imageMode (CENTER) 
    image(polygon_image,polygon.position.x,polygon.position.y,40,40);
  
  groundObject.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block20.display();
  block21.display();

  rope.display();    

  stand1.display();    
  stand2.display();    
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block20.score();
  block21.score();

  drawSprites();
}

function mouseDragged(){

Matter.Body.setPosition(this.polygon,{x : mouseX,y : mouseY});


}

function mouseReleased(){

rope.fly();

}

function keyPressed(){

if(keyCode === 32){

rope.attach(this.polygon)

}

}

async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var responseJSON = await response.json();
 
 var daytime = responseJSON.datetime; 
 var hour = daytime.slice(11,13)//12th and 13th char
 console.log(responseJSON.daytime);
 
 console.log(hour);
 if(hour>=06&&hour<19){
 
 bg= "sprites/sunny-day-backgrounds-1.jpg"
 }else{
 
 bg = "2157b58dO487a52.jpg";
 }
 backgroundImg1 = loadImage(bg);
 console.log(backgroundImg1);
 
 }