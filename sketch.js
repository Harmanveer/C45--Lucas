var lucas, lucasImg,boomImg;
var police, policeImg, copCars;
var vehicle1, vehicle2, vehicle3, vehicle4, vehicle5;
var vehicle1Img, vehicle2Img, vehicle3Img, vehicle4Img, vehicle5Img;
var track,coin,coinImg;
var ground, groundImg;

var score=0;
var count=0;
var police1Count=0;

var life1, life2, life3, life4, life5;
var carGroup;
var coinGroup;
var spaceCount=0;
var PLAY=0;
var END=1;
var gameState = PLAY;

var blockGroup, barricade;
var boomSound,coinSound,whooshSound;

function preload()
{
    lucasImg = loadImage("images/lucas.png");
    policeImg = loadImage("images/police.png");
    vehicle1Img = loadImage("images/vehicle1.png");
    vehicle2Img = loadImage("images/vehicle2.png");
    vehicle3Img = loadImage("images/vehicle3.png");
    vehicle4Img = loadImage("images/vehicle4.png");
    vehicle5Img = loadImage("images/vehicle5.png");
    boomImg = loadImage("images/boom.png");
    track = loadImage("images/track.png");
    groundImg = loadImage("images/ground.png");
    coinImg=loadAnimation("images/coin1.png","images/coin2.png", "images/coin3.png", "images/coin4.png", "images/coin5.png", "images/coin6.png");

    life1 = loadImage("images/heart1.png");
    life2 = loadImage("images/heart2.png");
    life3 = loadImage("images/heart3.png");
    life4 = loadImage("images/heart4.png");
    life5 = loadImage("images/heart5.png");

    barricade = loadImage("images/blockade.png")
    gameOver = loadImage("images/gameOver.png");
    boomSound= loadSound("sounds/boom.wav");
    coinSound= loadSound("sounds/coin.wav");
    whooshSound=loadSound("sounds/whoosh.wav");;
  }

function setup()
{
    createCanvas(windowWidth,windowHeight);
    back = createSprite(windowWidth/2, windowHeight/2, 1000,500);
    back.addImage(track);
    back.scale = 2;
    back.velocityY = 5;

    lucas = createSprite(windowWidth/2, windowHeight/2-100,20,50);
    lucas.addImage("lucas",lucasImg);
    lucas.scale = 0.2;

    police1 = createSprite(windowWidth/2-300, 1000, 10, 10);
    police1.addImage(policeImg);
    police1.scale = 0.2;

    police2 = createSprite(windowWidth/2, 1050, 10, 10);
    police2.addImage(policeImg);
    police2.scale = 0.2;

    police3 = createSprite(windowWidth/2 +300, 1000, 10, 10);
    police3.addImage(policeImg);
    police3.scale = 0.2;

    life = createSprite(55,50,10,10);
    life.addImage(life1);
    life.scale=0.2;

    copCars = [police1, police2, police3];
    //coin
   
    carGroup = createGroup();
    coinGroup=createGroup();
    blockGroup = createGroup();
}


function draw()
{
  

    background("white");
   
    if(gameState=== PLAY)
    {

      if(keyDown("space"))
      {
        spaceCount=spaceCount+1;
        score = score-100;
        whooshSound.play()
       
      }
      else if(keyDown(LEFT_ARROW) || keyDown(UP_ARROW) || keyDown(UP_ARROW) || keyDown(DOWN_ARROW))
      {
        spaceCount=0;
      }
      if (back.y > 1000)
      {
        back.y = back.height/2;
      }
      myCarControls();
   
      policeControl();
 
      spawnTraffic();
      
      spawnCoin();
      
      spawnBarricade();
      
      console.log("in spaceCount:"+spaceCount)
      if(spaceCount===0)
      {
        
        for (var i = 0; i < carGroup.length; i++) 
        {
          if (carGroup.get(i).isTouching(lucas)) 
          {
            count = count+1;
            carGroup.get(i).destroy();
              //playSound("sound://category_digital/win.mp3", false);
              /*carGroup.get(i).addImage(boomImg);
              carGroup.get(i).velocityY = +7;
              carGroup.get(i).rotationSpeed = 3;
              carGroup.get(i).rotation = -30;
              carGroup.get(i).velocityX = -3;*/

            switch(count)
            {
              case 1: life.addImage(life2);
              break;
              case 2: life.addImage(life3);
              break;
              case 3: life.addImage(life4);
              break;
              case 4: life.addImage(life5);
              break;
              default:break;

            }
          }
        }
      }
   
      for (var i = 0; i < coinGroup.length; i++) 
      {
        if (coinGroup.get(i).isTouching(lucas)) 
        {
          coinGroup.get(i).destroy();
          coinSound.play();
          score=score+10;
        }
     
       }

       for (var i = 0; i < blockGroup.length; i++) 
      {
        if (blockGroup.get(i).isTouching(lucas)) 
        {
          boomSound.play();
          gameState = END;
        }
     
       }
      
  
       if(count === 4)
       {
          gameState=END;
       }



    }
    if(gameState===END)
    {

      var screen = createSprite(windowWidth/2, windowHeight/2,windowWidth,windowHeight)
      screen.scale=2;
      screen.addImage(gameOver);
      carGroup.setLifetimeEach(-1)

    }
   
     
     
            drawSprites();

     textSize(20);
     fill("black");
     text("SCORE: " +score, 15, 20);
    // text("LIVE: " +live, 15, 50 );
    // text("PLACE: " + place, 280, 20 );
     textSize(40);
     //text(speed, 320, 360 );
  }

  function myCarControls()
  {
   
      if (keyDown(RIGHT_ARROW))
      {
        lucas.x = lucas.x + 8;
      }
      if (keyDown(LEFT_ARROW))
      {
        lucas.x = lucas.x -8;
      }
      if (keyDown(DOWN_ARROW))
      {
        lucas.y = lucas.y +8;
      }
      if (keyDown(UP_ARROW))
      {
        lucas.y = lucas.y -8;
      }
  }

  function policeControl()
  {
    
    police1.velocityY = -random(0.2, 1.5);
    police2.velocityY = -random(0.4,1);
    police3.velocityY = -random(0.4,1);

    /*if ((lucas.isTouching(police1)) ){
      //playSound("sound://category_digital/win.mp3", false);
      police1.addImage(boomImg);
      police1.velocityY = +7;
      police1.rotationSpeed = 3;w
      police1.rotation = -30;
      police1.velocityX = -3;
     // police1Count=police1Count+1;
      }

    if ((lucas.isTouching(police2))){
      //playSound("sound://category_digital/win.mp3", false);
      police2.addImage(boomImg);
      police2.velocityY = +7;
      police2.rotationSpeed = 3;
      police2.rotation = -30;
      police2.velocityX = -3;
    }
    
    if ((lucas.isTouching(police3))){
      //playSound("sound://category_digital/win.mp3", false);
      police3.addImage(boomImg);
      police3.velocityY = +7;
      police3.rotationSpeed = -3;
      police3.rotation = -30;
      police3.velocityX = -3;
    }*/
    for(var i=0; i<copCars.length;i++)
    {
      if(copCars[i].y- lucas.y < 10)
      {
        copCars[i].velocityY = lucas.y -2;
      }
    }
  
  }
  function spawnTraffic()
  {
    if(frameCount % 60 === 0)
    {
      var vehicle = createSprite(Math.round(random(windowWidth/2-200,windowWidth/2+300)),Math.round(random(-50,-200)));
      vehicle.velocityY = Math.round(random(5,8));
      vehicle.scale = 0.2;
     
    var rand3 = Math.round(random(1,5));
    switch(rand3)
    {
      case 1: vehicle.addImage(vehicle1Img);
              break;
      case 2: vehicle.addImage(vehicle2Img);
              break;
      case 3: vehicle.addImage(vehicle3Img);
              break;
      case 4: vehicle.addImage(vehicle4Img);
              break;
      case 5: vehicle.addImage(vehicle5Img);
              break;
      default: break;
     }
  vehicle.hearttime = 200;
  carGroup.add(vehicle);  
     }
} 
function spawnCoin()
{
   
        //write code here to spawn the clouds
        if (frameCount % 20 === 0) 
        {
          var reward = createSprite(Math.round(random(windowWidth/2-200,windowWidth/2+300)),Math.round(random(-50,-200)));
          reward.addAnimation("rewardCoin", coinImg);
           reward.scale = 0.9;
           reward.velocityY=+2;
         
         
          
          //add each cloud to the group
          coinGroup.add(reward);
        }
}

function spawnBarricade()
{
   
        //write code here to spawn the clouds
        if (frameCount % 100 === 0) 
        {
          var block = createSprite(Math.round(random(windowWidth/2-200,windowWidth/2+300)),Math.round(random(-50,-200)));
          block.addImage(barricade)
           block.scale = 0.3;
           block.velocityY=+2;
         
         
          
          //add each cloud to the group
          blockGroup.add(block);

          block.debug = true;
          block.setCollider("rectangle", 0, 0, 10,10);
        }
}