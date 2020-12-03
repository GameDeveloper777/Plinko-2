const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles =[];
var plinkos =[];
var divisions =[];
var divisonHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);
  ground2 = new Ground(10,390,20,780);
  ground3 = new Ground(470,390,20,780);



}

function draw() {
  background(192,192,192);  
  Engine.run(engine);4


  ground.display();
  ground2.display();
  ground3.display();

  drawSprites();
}