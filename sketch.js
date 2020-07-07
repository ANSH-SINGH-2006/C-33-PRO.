var Engine = Matter.Engine;
 const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState=1;
//var score=2500;
//var border;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //border = createSprite(360,706,900,10);
  //border.visible=true;
}

  

function draw() {
  background("black");
  
  Engine.update(engine);
 
  //function mousePressed(){
  //if(gameState=="start"){
    
    
    
  //count++
  //}}}}

  score=round(score);
  

  textSize(20)
  fill("green");
 text("Score : "+score,20,30);
 fill("blue")
 text("1- Avoid interruption of particles to score points.",130,30);
 text("2- SCORE 2500 points to win!!!",130,50);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(mouseIsPressed){
    particles.push(new Particle(mouseX, 10, 10,10));
     //score++;
     gameState=1;
   }

  
    //if (particles.body.position.x < 300){
     //score= score+500;}
     //if (particles.body.position.y> 760){
      //score= score+500;
     //}
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(score>=2500){
     textSize(50);
     fill("red")
    text("GAMEOVER!!",250,350)
    plinkos.velocity=0*1
   }
   
}
