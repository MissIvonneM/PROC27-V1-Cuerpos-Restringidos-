// Código PRO C26 V1 Herencia + platform = new Ground
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint    

var engine,world;
var ground;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var backgroundImg;
var constrainedLog,chain;     


function preload(){
    backgroundImg = loadImage("sprites/bg.png"); 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200, 20); 
    platform = new Ground(150, 305, 300, 170);
    constrainedLog = new Log(230,180,80, PI/2)          //c)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);  
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2)

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    var options ={
        bodyA: bird.body,                      
        bodyB: constrainedLog.body,
        stiffness: 0.04,                      
        length: 10
    }
    var chain = Constraint.create(options);   
    World.add(world,chain);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();      
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
    platform.display();
    constrainedLog.display();

    strokeWeight(3);      
    line(bird.body.position.x, bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
}
