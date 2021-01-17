const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var ball;

var world,engine,ground;

function setup() {
  createCanvas(400,400);
 

  engine=Engine.create();
  world=engine.world;
  
  var oboptions={
    isStatic : true
  }
ground=Bodies.rectangle(200,390,400,20,oboptions);
World.add(world,ground);

var ballOptions={
    restitution : 0.8
}

ball = Bodies.circle(100,100,10,ballOptions);
World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  drawSprites();
}