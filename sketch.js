function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255)
  
  text("rain appears in mouse position",200,40)
  
  
  
  createRain();
  
  drawSprites();
  
}

function createRain(){
  if(frameCount % 50 === 0){
    
     rain = createSprite(mouseX,1,5,50);
    rain.velocityY = 5;
    
    rain.shapeColor=  ("blue");
    
    
    
    
     }
}