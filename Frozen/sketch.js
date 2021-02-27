const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain, umbrella, man;
var ground, drop, thunder;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(2000,700);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1000,height,2000,50);
    
    drop = new Drop(50,80,10,10);
    drop1 = new Drop(100,10,10,10);
    drop2 = new Drop(150,50,10,10);
    drop3 = new Drop(160,50,10,10);
    drop4 = new Drop(90,50,10,10);
    drop5 = new Drop(30,50,10,10);
    drop6 = new Drop(80,50,10,10);
    drop7 = new Drop(140,100,10,10);
    drop8 = new Drop(180,50,10,10);
    drop9 = new Drop(8,90,10,10);
    drop10 = new Drop(90,20,10,10);
    drop11 = new Drop(145,50,10,10);
    drop12 = new Drop(565,50,10,10);
    drop13 = new Drop(170,50,10,10);
    drop14 = new Drop(35,50,10,10);
    drop15 = new Drop(760,50,10,10);
    drop16 = new Drop(545,50,10,10);
    drop17 = new Drop(134,50,10,10);
    drop18 = new Drop(98,50,10,10);
    drop19 = new Drop(780,50,10,10);
    drop20 = new Drop(780,50,10,10);
}

function draw(){
    background(0);

    ground.display();

    drop.display();
    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();
    drop11.display();
    drop12.display();
    drop13.display();
    drop14.display();
    drop15.display();
    drop16.display();
    drop17.display();
    drop18.display();
    drop19.display();
    drop20.display();

}   


