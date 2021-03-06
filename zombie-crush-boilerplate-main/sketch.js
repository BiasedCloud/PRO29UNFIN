const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, wall1, wall2,bridge,link, jointPoint, jointLink;

var axeImage, bkImg, stoneImage, woodImage, zombieImage;

var stones = [];


function preload() {
  bkImg = loadImage("background.jpg");
  zombieImage = loadImage("zombie.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall2 = new Base(windowWidth, windowHeight/2, 200, 200);
  wall1 = new Base(0, windowHeight/2, 200 , 200);
  ground = new Base(0,windowHeight,windowWidth, 1);
  bridge = new Bridge(20, {x: 65, y: windowHeight/2-110});

  jointPoint = new Base(windowWidth-100, windowHeight/2-100, 10, 10);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for(var i = 0; i <= 8; 1++){
    var x = random(width/2-200,width/2+300);
    var y = random(-10, 140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }  
  
}

function draw() {
  background(51);
  Engine.update(engine);

  for(var x = 0; x <= stones.length; x++){
    stones[i].show();
  }

  wall1.display();
  wall2.display();
  ground.display();
  bridge.show();
  
}
