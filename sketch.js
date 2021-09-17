var canvas, backgroundImage;
var turtle, turtleImg;
var lifeImg , count;
var gameState = 0;
var wrong_sound , correct_sound, water_sound ; 
var game;

function preload(){
 turtleImg = loadAnimation("turtle_running1.png", "turtle_running2.png");
 lifeImg = loadImage("life_bar.png");
 backgroundImage = loadImage("bg.png");

 //load sound files
 wrong_sound = loadSound("wrong.wav");
 correct_sound = loadSound("correct.mp3");
 water_sound = loadSound("water.mp3");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  game = new Game();
  
  
  
}


function draw(){
  background( backgroundImage);

  if(gameState === 0  ){
    game.start();
  }

}
