var car, wall
var speed, weight
var deform


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  car.velocityX=speed
  wall.shapeColor=rgb(80,80,80)
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(car.width+wall.width)/2){
    
    deform=(0.5*weight*speed*speed)/22500;
    car.velocityX=0

    if(deform<100){
      car.shapeColor=rgb(0,255,0)
    }
  
    if(deform>100 && deform<180){
      car.shapeColor=rgb(230,230,0)
    }
    
    if(deform>180){
      car.shapeColor=rgb(255,0,0)
    }
  }

  drawSprites();
}