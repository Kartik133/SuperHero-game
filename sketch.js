const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine,world;
var superHero;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26
var background_img;
var ground;
var chain;
var monster;

function preload() {
  //preload the images here
  background_img = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  // create sprites and bodies here
  superHero = new SuperHero(200,300,200,100);

  box1 = new Box(500,150,70,70);
  box2 = new Box(500,220,70,70);
  box3 = new Box(500,290,70,70);
  box4 = new Box(500,360,70,70);
  box5 = new Box(500,430,70,70);
  box6 = new Box(500,500,70,70);
  box7 = new Box(500,570,70,70);
  box8 = new Box(580,220,70,70);
  box9 = new Box(580,290,70,70);
  box10 = new Box(580,360,70,70);
  box11 = new Box(580,430,70,70);
  box12 = new Box(580,500,70,70);
  box13 = new Box(580,570,70,70);
  box14 = new Box(660,80,70,70);
  box15 = new Box(660,150,70,70);
  box16 = new Box(660,220,70,70);
  box17 = new Box(660,290,70,70);
  box18 = new Box(660,360,70,70);
  box19 = new Box(660,430,70,70);
  box20 = new Box(660,500,70,70);
  box21 = new Box(660,570,70,70);
  box22 = new Box(740,290,70,70);
  box23 = new Box(740,360,70,70);
  box24 = new Box(740,430,70,70);
  box25 = new Box(740,500,70,70);
  box26 = new Box(740,570,70,70);

  ground = new Ground(400,615,800,20);

  monster = new Monster(880,430,200,200);

  //chain = new Chain(superHero.body,{x:100,y:100});
}

function draw() {
  background(background_img);
  Engine.update(engine);

  superHero.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  ground.display();

  monster.display();

  //chain.display();
}

function mouseDragged() {
   Matter.Body.setPosition(superHero.body,{x:mouseX,y:mouseY});
}