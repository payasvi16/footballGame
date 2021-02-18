
var playerpaddle,computerPaddle,ball,edges, gameState,playerscore,computerscore
var playerImage,computerImage,kickimage,fallimage,ballimage;
function preload()
  {

    computerImage=loadImage("robot.gif");
    playerImage=loadImage("player.gif");
    kickimage= loadImage("kick.gif");
    fallimage= loadImage("fall.gif")
    ballimage=loadImage("ball.gif")

  }
function setup()
{
  createCanvas(400,400);
  playerPaddle= createSprite(360,200,10,100)
  playerPaddle.shapeColor="red"
  playerPaddle.addImage(playerImage);
  playerPaddle.scale=0.8;
  
  computerPaddle= createSprite(40,200,10,100)
  computerPaddle.shapeColor="orange";
  computerPaddle.addImage(computerImage);

  ball= createSprite(200,200,10,10)
  ball.shapeColor="yellow"

  ball.addImage(ballimage);
  ball.scale= 0.4;

  gameState="serve";

  edges= createEdgeSprites()

  playerscore=0;
  computerscore=0;

}

function draw()
{
  background("white");
  fill("black")
  textSize(15);
  
 if(gameState==="serve")
 {
  fill("black")
  textSize(15);
  stroke("red")
  text("Press Space to Start", 140, 170)
 }
 text(playerscore,225,15)
 text(computerscore,170,15)

for(var y= 0; y<400;y=y+20)
{
  line(200,y,200,y+10)
}
  playerPaddle.y=mouseY;

  if(keyDown("space") && gameState === "serve")
  {
    ball.velocityY=3;
    ball.velocityX=3;
    gameState="play";
    playerPaddle.addImage(playerImage);
    playerPaddle.scale=0.8;

  }
computerPaddle.y=ball.y

ball.bounceOff(edges[2])
ball.bounceOff(edges[3])
ball.bounceOff(playerPaddle)
ball.bounceOff(computerPaddle)

if(ball.x>400 || ball.x< 0)
{
  if(ball.x>400)
  {
    computerscore+=1;
    playerPaddle.addImage(fallimage);
    playerPaddle.scale=1.2;

  }
  if(ball.x<0)
  {
    playerscore+=1;
  }
    
  ball.x=200;
  ball.y=200;
  ball.velocityY=0;
  ball.velocityX=0;
  gameState="serve"
}

if(playerscore ===5 || computerscore===5)
{
  gameState="over";
  fill("black")
  textSize(15);
  stroke("red")
  text("Game Over", 160,150)
  text("Press R to Restart", 145, 170)
}
if(keyDown("R")&& gameState==="over")
{
  playerscore=0;
  computerscore=0;
  gameState="serve";
}
if(keyDown("K"))
{
  playerPaddle.addImage(kickimage);
  playerPaddle.scale=1.1;
}
if(keyWentUp("k"))
{
  playerPaddle.addImage(playerImage);
  playerPaddle.scale=0.8;
}

  drawSprites();
  
}