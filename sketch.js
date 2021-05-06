var covid1,covid2;
var lady,lady2;
var sanitiser,mask;
var bg1,bg2;
var girl;
var score=0;
var n = 0;
var virusArray = [];
var x = 0;
var gameState=1;

function preload() {
  
  covid1=loadImage("Image/virus1.png");
  girlImg =loadImage("Image/girl.png");
  sanitiserImg=loadImage("Image/sanitizerImg.jpg");
  bg2=loadImage("Image/background2.jpg");
  bg1=loadImage("Image/backgroundImage.png");
  win=loadImage("Image/winImg.jpg")
  lifeImg=loadImage("Image/lifes.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  arrayGroup = createGroup();

  //width refers to canvas width
  //height refers to canvas height
  
  girl = createSprite(width/10,height-290,10,10);
  girl.addImage(girlImg);
  girl.scale=0.8
  girl.setCollider("rectangle",0,0,1,650)

  sanitiser = createSprite(width/5,height-275,10,10);
  sanitiser.addImage(sanitiserImg);
  sanitiser.scale=0.3

  life1 = createSprite(width-100,height-30,20,20)
  life1.addImage(lifeImg);
  life1.scale=0.1

  life2 = createSprite(width-160,height-30,20,20)
  life2.addImage(lifeImg);
  life2.scale=0.1

  life3 = createSprite(width-220,height-30,20,20)
  life3.addImage(lifeImg);
  life3.scale=0.1
}

function draw() {
  background(bg1);
  drawSprites();
 
  if(gameState===1){
  //if frameCount is a multiple of 100 create a virus
  if (frameCount % 100 === 0){
    virus();
  }
  textSize(30)
  fill("blue");
  text('Drag the sanitizer towards the viruses to kill them',10,50)

  textSize(30);
  text('Score = ' + n, 0.8 * width,50)

  textSize(30)
  fill("blue");
  text('You have 3 lives,Stop the viruses from reaching the girl',10,90)

  if(n > 10){
    background(win)
    textSize(40)
    fill(0)
    text('Yay, you saved the Earth from the viruses!!',width-1000,height-100)

  }
  n = 0;
  for (var i in virusArray){
    if(virusArray[i][1] === 1)
    n++;
  }
  console.log(virusArray.length);

  if(arrayGroup.isTouching(girl)){
   x=x+1
  }
  if(x===1){
    life1.visible = false;
  }
 if(x===2){
   life1.visible = false;
   life2.visible = false;
 }
 if(x===3){
   life1.visible = false;
   life2.visible = false;
   life3.visible = false;
   gameState=2;
 }
  }
if(gameState===2){
  background(bg2);
}

}

function virus(){
  
  var virus = createSprite(width + 20,random(100,height -100),10,10);
  virus.addImage(covid1);
  virus.scale = random(0.1,0.3);
  virus.velocityX= -7/(virus.scale*10)
  virus.lifetime= (1000 / virus.velocityX) + 20;
  virus.setCollider("rectangle",0,0,2,20)
  virusArray.push([virus, 0])
  arrayGroup.add(virus);
}

function mouseDragged(){
  sanitiser.x = mouseX;
  sanitiser.y = mouseY;
 if(arrayGroup.isTouching(sanitiser)){
  virusArray[i][0].visible = false;

 }
  for (i=0; i < virusArray.length; i++){
    /*
    if(mousePressedOver(virusArray[i])){
    virusArray[i].visible = false;
    score++;
    }
    */
    
    if(mousePressedOver(virusArray[i][0])){
      virusArray[i][0].visible = false;
      virusArray[i][1] = 1;
    }
  }
}






