/* namspacing using const keyword*/
const Engine=Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies ;


var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  //creating engine
  engine=Engine.create()
  //attach world with the engine
  world=engine.world;

  //extra property for object box
  var op={
    isStatic:true
  }
  var op1={
    restitution:2
  }
  //creating body or object
  ground=Bodies.rectangle(200,390,400,20,op)
  ball=Bodies.circle(200,100,20,op1)
  //add object in world
  World.add(world,ground)
  World.add(world,ball)
  //console.log(box.position.y);

  
}

function draw() {
  background("yellow"); 
  Engine.update(engine);
  //to display ground
  rectMode(CENTER)
  fill("red")
  rect(ground.position.x,ground.position.y,400,20); 
  //to display ball
  ellipseMode(RADIUS);
fill("green")
  ellipse(ball.position.x,ball.position.y,20,20)
}