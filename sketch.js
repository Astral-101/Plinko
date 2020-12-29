const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for (var j = 0; j<=width; j+=80){
    divisions.push(new Division(j, height-170, 10, divisionHeight));


  }

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }



  ground = new Ground(240, 790, 480, 25)


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  for (k = 0; k<divisions.length; k++){
    divisions[k].display();

  }

  for (k=0; k<plinkos.length; k++){
    plinkos[k].display();
  }

  for (k=0; k<particles.length; k++){
    particles[k].display();
  }


  drawSprites();
}