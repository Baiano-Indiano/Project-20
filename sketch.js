const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bola;
var retangulo_1, retangulo_2;
var chao,chaozin;


function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var bolaConfig = {
    restitution: 0.5,
    frictionAir: 0,
    friction: 0.02
  }

  var retangulo_1Config = {
    restitution: 0.7,
    frictionAir: 0.1,
    friction: 0.01
  }

  var retangulo_2Config = {
    restitution: 0.01,
    frictionAir: 0.3,
    friction: 1
  }
  bola = Bodies.circle(100,10,20, bolaConfig);
  World.add(world, bola);

  retangulo_1 = Bodies.rectangle(50,50,10,10,retangulo_1Config);
  World.add(world,retangulo_1);

  retangulo_2 = Bodies.rectangle(200,50,100,20,retangulo_2Config);
  World.add(world,retangulo_2);
  var chaoConfig = {
    isStatic: true
  }


  chao = Bodies.rectangle(200, 390, 400, 20, chaoConfig);
  World.add(world, chao);



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("grey");
Engine.update(engine);

  ellipse(bola.position.x, bola.position.y, 20, 20);
  rect(chao.position.x, chao.position.y, 400, 20);
  rect(retangulo_1.position.x,retangulo_1.position.y,10,10);
  rect(retangulo_2.position.x,retangulo_2.position.y,100,20);
}

