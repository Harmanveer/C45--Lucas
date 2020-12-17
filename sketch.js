var lucas, lucasImg,boomImg;
var police, policeImg, copCars;
var vehicle1, vehicle2, vehicle3, vehicle4, vehicle5;
var vehicle1Img, vehicle2Img, vehicle3Img, vehicle4Img, vehicle5Img;
var track,coin,coinImg;
var ground, groundImg;

var score=0;
var count=0;

var life1, life2, life3, life4, life5;
var carGroup;
var coinGroup;
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
}


function draw()
{
    background("white");
   
    if (back.y > 1000)
    {
      back.y = back.height/2;
    }
   
    
     myCarControls();
   
     policeControl();

     spawnTraffic();

     spawnCoin();
     
     for (var i = 0; i < carGroup.length; i++) 
     {
      if (carGroup.get(i).isTouching(lucas)) 
      {
        count = count+1;
        console.log(count);
        carGroup.get(i).destroy();

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
     
      for (var i = 0; i < coinGroup.length; i++) 
      {
        if (coinGroup.get(i).isTouching(lucas)) 
        {
          coinGroup.get(i).destroy();
          //Add sound collecting sound
          score=score+10;
        }
     
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
  }

  function policeControl()
  {
    
    police1.velocityY = -random(0.2, 1.5);
    police2.velocityY = -random(0.4,1);
    police3.velocityY = -random(0.4,1);

   

    //green back
    if ((lucas.isTouching(police1))){
      //playSound("sound://category_digital/win.mp3", false);
      police1.addImage(boomImg);
      police1.velocityY = +7;
      police1.rotationSpeed = 3;
      police1.rotation = -30;
      police1.velocityX = -3;
    }
    
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
        if (frameCount % 40 === 0) 
        {
          var reward = createSprite(Math.round(random(windowWidth/2-200,windowWidth/2+300)),Math.round(random(-50,-200)));
          reward.addAnimation("rewardCoin", coinImg);
           reward.scale = 0.9;
           reward.velocityY=+2
         
         
          
          //add each cloud to the group
          coinGroup.add(reward);
        }
        
      
}