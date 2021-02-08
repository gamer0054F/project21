var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    topEdge = createSprite(400,20,800,20);
    topEdge.visible = false;

    rightEdge = createSprite(790,300,20,600);
    rightEdge.visible =false;

    leftEdge = createSprite(10,300,20,600);
    leftEdge.visible = false;

    //create 4 different surfaces

    surface1 = createSprite(100,590,200,10);
    surface1.shapeColor = rgb(255,0,0);

    surface2 = createSprite(300,590,200,10);
    surface2.shapeColor = rgb(0,255,0);

    surface3 = createSprite(500,590,200,10);
    surface3.shapeColor = rgb(0,0,255);

    surface4 = createSprite(700,590,200,10);
    surface4.shapeColor = rgb(247, 223, 30);

    //create box sprite and give velocity

    box = createSprite(random(20,750),250,15,15);
    box.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
       box.shapeColor = surface1.shapeColor;
       box.velocityX = 0.8;
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor = surface2.shapeColor;
        box.velocityX = 0.8;
        music.play();
    }
    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
        box.velocityX = 0.8;
    }

    if(surface4.isTouching(box)){
        box.velocityY = 0;
        box.velocityX = 0;
        box.shapeColor = surface4.shapeColor;
        music.stop();
    }

    box.bounceOff(topEdge);
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);

    drawSprites();
    //add condition to check if box touching surface and make it box
}
