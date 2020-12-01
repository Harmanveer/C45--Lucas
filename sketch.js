var lucas, lucasImg;
var police, policeImg;
var vehicle1, vehicle2, vehicle3, vehicle4, vehicle5;
var vehicle1Img, vehicle2Img, vehicle3Img, vehicle4Img, vehicle5Img;
function preload()
{
    lucasImg = loadImage("images/lucas.png");
    policeImg = loadImage("images/police.png");
    vehicle1Img = loadImage("images/vehicle1.png");
    vehicle2Img = loadImage("images/vehicle2.png");
    vehicle3Img = loadImage("images/vehicle3.png");
    vehicle4Img = loadImage("images/vehicle4.png");
    vehicle5Img = loadImage("images/vehicle5.png");
}

function setup()
{
    createCanvas(500,800);
    lucas= image(lucasImg, displayWidth/2, displayHeight/2,10,10);
    police= image(policeImg, displayWidth/2, displayHeight/4,10,10);
    vehicle1= image(vehicle1Img, 150, 200,10,10);
    vehicle2= image(vehicle2Img, 200, 200,10,10);
    vehicle3= image(vehicle3Img, 250, 200,10,10);
    vehicle4= image(vehicle4Img, 300, 200,10,10);
    vehicle5= image(vehicle5Img, 350, 200,10,10);
    
}

function draw()
{
    background("grey");

    lucas.display();
    police.display();
    vehicle1.display();
    vehicle2.display();
    vehicle3.display();
    vehicle4.display();
    vehicle5.display();
    
    drawSprites();
}