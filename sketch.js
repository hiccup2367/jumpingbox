var canvas;
var music;
var surface1,surface2,surface3,surfface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1 = createSprite(125,400,150,20);
    surface2 = createSprite(285,400,150,20);
    surface3 = createSprite(445,400,150,20);
    surface4 = createSprite(605,400,150,20);
    



    //create box sprite and give velocity
    var box = createSprite(200,200,50,50);
    box.velocityX = 7;
}

function draw() {
    background(rgb(169,169,169));
    surface1(rgb(0,0,255));
    surface2(rgb(250,218,94));
    surface3(rgb(255,26,0));
    surface4(rgb(11,102,35));

    //create edgeSprite
      createEdgeSprites();

    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    box.display();
    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box(rgb(0,0,255));
    }
    if(box.isTouching(surface2)){
        box(rgb(250,218,94));
    }
    if(box.isTouching(surface3)){
        box(rgb(255,26,0));
    }
    if(box.isTouching(surface4)){
        box(rgb(11,102,35));
    }
}
