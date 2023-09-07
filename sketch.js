var PLAY=1;
var END=0;
var gamestate=PLAY;
var bones;
var bonesimg;
var obstacle;
var obstacle1;
var child;
var childimg;
var road;
var roadimg;
var restart;
var restartimg;
var gameover;
var gameoverimg;
var score=0;
var die;






function preload(){

  restartimgg=loadImage("restart.png")

  gameoverimg=loadImage("gameOver.png")

  bonesimg=loadImage("bones-removebg-preview.png")
  obstacleimg=loadImage("trees2-removebg-preview.png")
  
  childImage=loadImage("child-removebg-preview.png")

roadImage=loadImage("road-removebg-preview.png")
die=loadSound("die.mp3")
}


function setup(){
createCanvas(windowWidth,windowHeight)



bones=createSprite(60,height-100,20,50)
bones.addImage("bones",bonesimg)
bones.scale=0.5;



road=createSprite(width/2,height-70,width,20)
road.addImage("road",roadimg)

restart=createSprite(width/2,height-50,width,10)
restart.addImage(restartimg)

gameover=createSprite(width/2,height/2-50)
restart.scale=0.2
gameover.sacle=3


bones.setCollider("circle",0,0,40)
bones.debug=true
}







function draw(){
  background("180")

  text("score:" +ScreenOrientation,500,50)

  if(gamestate===play){

    restart.visible=false
    
        gameover.visible=false

        console.log(frameCount);

        road.x = road.width /2;
  road.velocityX =-(6+3*score/100)
  
  score=score+Math.round(getFrameRate()/60)

       if(score>0 && score%100===0){
        checkpoint.play()
       }

       if(keyDown("space")&& bones.y >= height-120  ||  touches.length>0) {
        jump.play()
       
        bones.velocityY = -10;
        touches=[]
      }
      
      bones.velocityY = bones.velocityY + 0.8
      
      if (road.x < 0){
        road.x = road.width/2;
      }

      if(obstacle.isTouching(bones)){
      die.play()
      gamestate=END 
      }

  }

  else if(gamestate===END){
    road.velocityX=0

    restart.visible=true
    gameover.visible=true

    

    

    
    
   if(mousePressedOver(restart) || touches.length>0){
    touches=[]
    Reset()
   }
 

  }

















  drawSprites();
}


function Reset(){

  gamestate=PLAY
  gameover.visible=false
  restart.visible=false

}















