var player , player_image ;
var bg , bg_image , pink_image ;
var bagheera ,bagheera_image;
var ground,pinkmonstersGroup;
var attack , attack_image;
var stone_image;
var  coins_image , bgc_image , bgc ,stoneGroup;

var gameState = 0;

var score = 0;
var coinsGroup;
var playbutton , play_image
var level1_img , level2_img , level3_img;

var king , king_image;

var tiger , tiger_image;

var restart_image;

var gameOver_image;

var jungleSound;
var greeting,greeting2 ;
var check =0;
var check2 =0;

function preload()
{
  jungleSound = loadSound("The Lion King - Circle of Life.mp3");
  bgc_image = loadImage("images/1IMAGE.png");
  player_image = loadAnimation("images/m1.png" , "images/m2.png" , "images/m3.png");
  bg_image = loadImage("images/L3.jpg");
  bagheera_image = loadAnimation("images/bagheera1.gif" , "images/bagheera2.png" , "images/bagheera3.gif");
  pink_image = loadAnimation("images/pink1.png" , "images/pink2.png");
  attack_image = loadImage("images/attack_button.png" );
  stone_image = loadAnimation("images/wodden tool.png" , "images/wodden tool1.png" , "images/wodden tool2.png" , "images/wodden tool3.png" , "images/wodden tool4.png" );
  coins_image = loadAnimation("images/coin1.png" , "images/coin2.png" , "images/coin3.png" , "images/coin4.png" , "images/coin5.png" , "images/coin6.png")
  play_image = loadImage("images/PLAY BUTTON.png");
  level1_img = loadImage("images/L3.jpg");
  level2_img =  loadImage("images/L5.jpg");
  level3_img = loadImage("images/L4.jpg");
  king_image = loadAnimation("images/Monkey_01.png" ,"images/Monkey_02.png", "images/Monkey_03.png", "images/Monkey_04.png" , "images/Monkey_05.png","images/Monkey_06.png")
  tiger_image = loadAnimation("images/sherkhan1.png" , "images/sherkhan2.png");
  restart_image = loadImage("images/restart.png");
  gameOver_image = loadImage("images/gameover.png")

}

function setup()
{
  
  createCanvas(windowWidth , windowHeight);

  player = createSprite(80,windowHeight-70,60,60);
  player.addAnimation("run" , player_image);
  //player.debug = true;
  // player.setCollider("rectangle", -5, 10, 20,200);
  player.scale = 1;
  player.visible = false;
 greeting = createElement('h1');
 greeting2 = createElement('h1');
 greeting.position(width/2,height/2);
 greeting.html("press R to restart");
 greeting.hide();

 
 greeting2.position(width/2,height/2);
 greeting2.html("YOU WIN THE GAME. THANKYOU");
 greeting2.hide();

  bagheera = createSprite(-200 , windowHeight-160);
  bagheera.addAnimation("running" , bagheera_image);
  bagheera.addAnimation("running_king" , king_image);
  bagheera.addAnimation("running_tiger" , tiger_image);


  bagheera.visible = false;
  bagheera.scale = 0.7;
  //bagheera.debug = true
  //bagheera.setCollider("rectangle", -5, 10, 500,200);


 king = createSprite(-100 , windowHeight-100);
 king.addAnimation("running_king" , king_image);
 king.visible = false;
 king.scale = 0.7;
  //king.debug = true

  tiger = createSprite(350, windowHeight-100);
  tiger.addAnimation("running_tiger" , tiger_image);
  tiger.visible = false;
  tiger.scale = 0.7;
  //tiger.debug = true
  //tiger.setCollider("rectangle", -5, 10, 60,60);

  ground = createSprite(windowWidth/2 ,windowHeight-20 , 100000000, 30 );
  ground.visible = false;

  pinkmonstersGroup = new Group ();

  coinsGroup = new Group();

  attack = createSprite(5, 90)
  attack.addImage(attack_image)
  attack.scale = 0.2
  attack.visible = false;

  stoneGroup = new Group();

  playbutton = createSprite(windowWidth/3,windowHeight-70,60,60);
  playbutton.addImage(play_image)
  playbutton.scale = 0.6;


}



function draw()
{
 
  background("green");
  
  console.log("Velocity of Bagh"+ bagheera.velocityX)

 if(gameState == 0)
 {                               
23  
    image(bgc_image , -680,0 , windowWidth , windowHeight);

    if(mousePressedOver(playbutton))
    {
          gameState = 1;
          //jungleSound.play();

    }
  }
  
  else if(gameState == 1)
  {
      playbutton.visible = false;
      fill("yellow");
      stroke("black");
      strokeWeight(5);
      textFont("Comic Sans MS");
      textSize(40);
      text("PRESS SPACE KEY TO BEGIN",-520, windowHeight/2 );

         
      if(keyDown("space"))
      {
        
        player.velocityX = 20;
        player.visible = true;
        ground.visible = false;
        attack.visible = true;
        
        
        bagheera.velocityX = 4;
        bagheera.visible = true;
        gameState = 2;
      }
 
    
  }
  else if (gameState == 2)
  {
      play();
      if(score ==5)
      {
          gameState = 3;
      }

}
else if (gameState == 3)
  {
    bagheera.changeAnimation("running_king" , king_image);
    
      play1();
      if(score == 10)
      {
          gameState = 4;
      }

}
  else if(gameState == 4)
  {
    play3();
    bagheera.changeAnimation("running_tiger" , tiger_image);

    if(score ==15)
    {
      gameState = 6;
    }
  }



else if(gameState == 5)
{
    
    background("pink");
    player.visible= false;
    pinkmonstersGroup.destroyEach();
    bagheera.visible = false;
    greeting.show();
    attack.visible=false;
    if(keyDown("r"))
    {
      reset();
    }
 
  }
  else{
      background("yellow")
        player.visible = false;
        attack.visible= false;  
        greeting2.show();
    }


//gravity
  player.velocityY = player.velocityY + 1;

  //player colliding with ground
  player.collide(ground);


  //player colliding with pinkmonstersGroup
  player.collide(pinkmonstersGroup);

  //player.collide(bricksGroup)
//moving the camera with the player
  camera.position.x = player.x;

  //moving the attack button with the player
  attack.position.x = player.x;


  drawSprites();
}




