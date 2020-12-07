var lucas, lucasImg;
var police, policeImg, copCars;
var vehicle1, vehicle2, vehicle3, vehicle4, vehicle5;
var vehicle1Img, vehicle2Img, vehicle3Img, vehicle4Img, vehicle5Img;
var track;
var ground, groundImg;

var carGroup;

function preload()
{
    lucasImg = loadImage("images/lucas.png");
    policeImg = loadImage("images/police.png");
    vehicle1Img = loadImage("images/vehicle1.png");
    vehicle2Img = loadImage("images/vehicle2.png");
    vehicle3Img = loadImage("images/vehicle3.png");
    vehicle4Img = loadImage("images/vehicle4.png");
    vehicle5Img = loadImage("images/vehicle5.png");
    track = loadImage("images/track.png");
    groundImg = loadImage("images/ground.png");
}

function setup()
{
    createCanvas(windowWidth,windowHeight);
    back = createSprite(windowWidth/2, windowHeight/2, 1000,500);
    back.addImage(track);
    back.scale = 2;
    back.velocityY = 5;

    lucas = createSprite(windowWidth/2, windowHeight/2,20,50);
    lucas.addImage("lucas",lucasImg);
    lucas.scale = 0.2;

    police1 = createSprite(windowWidth/2-300, 800, 10, 10);
    police1.addImage(policeImg);
    police1.scale = 0.2;

    police2 = createSprite(windowWidth/2, 850, 10, 10);
    police2.addImage(policeImg);
    police2.scale = 0.2;

    police3 = createSprite(windowWidth/2 +300, 800, 10, 10);
    police3.addImage(policeImg);
    police3.scale = 0.2;

    copCars = [police1, police2, police3];

    carGroup = createGroup();
}

function draw()
{
    background("white");

    if (back.y > 1000)
    {
      back.y = back.height/2;
    }
    console.log(back.y)
    

     myCarControls();

     policeControl();

     spawnTraffic();

     drawSprites();


  }

  function myCarControls()
  {
    if (keyDown(UP_ARROW)) 
     {
        lucas.y = lucas.y - 4;
      }
      if (keyDown(DOWN_ARROW)) 
      {
        lucas.y = lucas.y + 4;
      }
      if (keyDown(RIGHT_ARROW)) 
      {
        lucas.x = lucas.x + 8;
      }
      if (keyDown(LEFT_ARROW)) 
      {
        lucas.x = lucas.x -8;
      }
  }

  function policeControl()
  {
    var rand = Math.round(random(1,3));
    var rand1 = Math.round(random(1,3));
    var rand2 = Math.round(random(1,3));

    police1.velocityY = -rand;

    police2.velocityY = -rand1;

    police3.velocityY = -rand2;

    for(var i=0; i<copCars.length;i++)
    {
      if(copCars[i].y- lucas.y < 100)
      {
        copCars[i].velocityY = lucas.y - 10;
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
  vehicle.lifetime = 200;
  carGroup.add(vehicle);  
}
} 