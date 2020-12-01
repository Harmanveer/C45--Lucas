var lucas, lucasImg;
var police, policeImg;
var vehicle1, vehicle2, vehicle3, vehicle4, vehicle5;
var vehicle1Img, vehicle2Img, vehicle3Img, vehicle4Img, vehicle5Img;
var track;

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
}

function setup()
{
    createCanvas(displayWidth,displayHeight);

    lucas = createSprite(displayWidth/2, displayHeight/2,20,50)
    lucas.addImage("lucas",lucasImg);
    lucas.scale = 0.2;
    /*police= image(policeImg, displayWidth/2, displayHeight/4,10,10);
    vehicle1= image(vehicle1Img, 150, 200,10,10);
    vehicle2= image(vehicle2Img, 200, 200,10,10);
    vehicle3= image(vehicle3Img, 250, 200,10,10);
    vehicle4= image(vehicle4Img, 300, 200,10,10);
    vehicle5= image(vehicle5Img, 350, 200,10,10);*/
    
    
}

function draw()
{
    background(track);

    

    if (keyDown(UP_ARROW)) {
        lucas.y = lucas.y - 4;
      }
      if (keyDown(DOWN_ARROW)) {
        lucas.y = lucas.y + 4;
      }
      if (keyDown(RIGHT_ARROW)) {
        lucas.x = lucas.x + 8;
      }
      if (keyDown(LEFT_ARROW)) {
        lucas.x = lucas.x -8;
      }
    drawSprites();
}