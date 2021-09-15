var issImage
var spacecraft
var hasDocked=false
var space1,space2,space3,space4;
var iss

function setup() {
  createCanvas(800,400);
  iss=createSprite(330, 130, 50, 50);
  iss.addImage(issImage)
  iss.scale=0.25
spacecraft=createSprite(280,240,20,20)
spacecraft.addImage(space1)
spacecraft.scale=0.14
}

function preload(){
  issImage=loadImage("iss.png")
  
spacebg=loadImage("spacebg.jpg")
space1=loadImage("spacecraft1.png")
space2=loadImage("spacecraft2.png")
space3=loadImage("spacecraft3.png")
space4=loadImage("spacecraft4.png")

}

function draw() {
    background(spacebg)
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
spacecraft.y=spacecraft.y-2

    }
    if(keyDown("DOWN_ARROW")){
  
      spacecraft.addImage(space2)
          }
          if(keyDown("LEFT_ARROW")){
            spacecraft.x=spacecraft.x-2
            spacecraft.addImage(space3)
                }
                if(keyDown("RIGHT_ARROW")){
                  spacecraft.x=spacecraft.x+2
                  spacecraft.addImage(space4)
                      }
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
hasDocked=true
textSize(25)
fill("white")
text("docking succesful",200,200)
  }
  drawSprites();
}