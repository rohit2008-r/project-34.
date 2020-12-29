const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;
 const Mouse = Matter.Mouse;
 const mouseConstraint = Matter.MouseConstraint;
 
 var Bob, Bob2,Bob3,Bob4,Bob5

 var rope1,rope2,rope3,rope4,rope5
 
 var roof;
 
 
 function preload()
 {
   
 }
 
 function setup() {
   createCanvas(800, 700);
 
 
   engine = Engine.create();
   world = engine.world;
   let canvasMouse = Mouse.create(canvas.elt);
   canvasMouse.pixelRatio = pixelDensity();
 
   let options = {
     mouse : canvasMouse
   }
 
   mConstraint = mouseConstraint.create(engine,options);
   World.add(world,mConstraint);
   //Create the Bodies Here.
 
   Bob= new bob(300,600,30)
   Bob2= new bob(360,600,30)
   Bob3= new bob(420,600,30)
   Bob4= new bob(480,600,30)
   Bob5= new bob(540,600,30)

   rope1=new Rope(Bob.body,{x:300,y:200})
   rope2=new Rope(Bob2.body,{x:360,y:200})
   rope3=new Rope(Bob3.body,{x:420,y:200})
   rope4=new Rope(Bob4.body,{x:480,y:200})
   rope5=new Rope(Bob5.body,{x:540,y:200})
 
 
 
   Engine.run(engine);
   
 }
 
 function draw() {
   rectMode(CENTER);
   background(0);
   
 
   Bob.display();
   Bob2.display();
   Bob3.display();
   Bob4.display();
   Bob5.display()
   
  

 
   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()
   
 
  // keyPressed();
 
   drawSprites();
  
 }
 
 
 

 
  function mouseDragged() {
    Matter.Body.setPosition(bob.body,{ x: mouseX, y: mouseY });
  }
   
 


