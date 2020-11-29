
function stone()
{
        var stone = createSprite(player.x + 20, player.y -100);
        stone.addAnimation("trowing", stone_image);
        stone.velocityX = 40;
        stone.velocityY = 10;
        stoneGroup.add(stone);
        stone.scale = 0.5;

}

function play()
{
  for(var i = 0  ; i<100000 ; i = i + 1200)
  {
    image(bg_image , i , 0 , windowWidth , windowHeight);

  }

  if(player.isTouching(coinsGroup))
  {
    coinsGroup.destroyEach() ;
    score++;
  }

  if(keyDown(RIGHT_ARROW))
  {
    player.velocityX = 20;
  }

  if(stoneGroup.isTouching(pinkmonstersGroup))
  {
    pinkmonstersGroup.destroyEach();
    score++;
  }

  if(player.isTouching(pinkmonstersGroup))
  {
    bagheera.x = player.x -500;
    bagheera.velocityX=23;
    
  }

//keyDown up arrow
  if(keyDown(UP_ARROW) && player.y >= 359)
  {
    player.velocityY = -10;
  }

  //vanishing the bagheera after some time
  if(frameCount % 150 === 0 && frameCount <160)
  {
    bagheera.velocityX = 3;
  }

  if(mousePressedOver(attack))
  {
      stone();
      
  }

  if(bagheera.isTouching(player))
  {
    gameState = 5 ;
  }
   PinkMonsters();
  
   Coins();

   //making text more attractive
    textSize(20);
    fill("blue");
    stroke("black");
    strokeWeight(5);
    textFont("Comic Sans MS")
    textSize(20);
    text("SCORE : " + score , player.x ,200 );


}

//FUNCTION PLAY1
function play1()
{
  
    
  for(var i = -1500  ; i<100000 ; i = i + 1060)
  {
    image(level2_img, i , 0 , windowWidth , windowHeight);
  }
  player.velocityX = 20;
  player.visible = true;
  ground.visible = false;
  attack.visible = true;
  
    PinkMonsters();
   
    Coins();

   

  if(player.isTouching(coinsGroup))
  {
    coinsGroup.destroyEach() ;
    score++;
  }

  

  //keyDown right arrow
  if(keyDown(RIGHT_ARROW))
  {
    player.velocityX = 20;
  }

  if(stoneGroup.isTouching(pinkmonstersGroup))
  {
    pinkmonstersGroup.destroyEach();
    score++
  }
  
  
  if(player.isTouching(pinkmonstersGroup))
  {
    if(check ==0)
    {
      bagheera.x = player.x -500;
      check=1;
    }
    
    bagheera.velocityX=23;

  }

  if(bagheera.isTouching(player))
  {
    gameState = 5 ;
  }
  
//keyDown up arrow
  if(keyDown(UP_ARROW) && player.y >= 359)
  {
    player.velocityY = -10;
  }

  //vanishing the bagheera after some time
  if(frameCount % 150 === 0)
  {
    bagheera.velocityX = 3;
  }
  if(mousePressedOver(attack))
  {
      stone();
  }
  
  
  

   //making text more attractive
textSize(20);
fill("blue");
stroke("black");
strokeWeight(5);
textFont("Comic Sans MS")
textSize(20);
text("SCORE : " + score , player.x ,200 );


}

function play3()
{

  bagheera.scale = 1.5;
  for(var i = -1500  ; i<150000 ; i = i + 1060)
  {
    image(level3_img, i , 0 , windowWidth , windowHeight);
  }
  player.velocityX = 20;
  player.visible = true;
  ground.visible = false;
  attack.visible = true;
    PinkMonsters();
   
    Coins();

   

  if(player.isTouching(coinsGroup))
  {
    coinsGroup.destroyEach() ;
    score++;
  }

  

  //keyDown right arrow
  if(keyDown(RIGHT_ARROW))
  {
    player.velocityX = 20;
  }

  if(stoneGroup.isTouching(pinkmonstersGroup))
  {
    pinkmonstersGroup.destroyEach();
    score++
  }
  
  
  if(player.isTouching(pinkmonstersGroup))
  {
    if(check2 ==0)
    {
      bagheera.x = player.x -500;
      check2=1;
    }
    
    bagheera.velocityX=23;

    
    
  }

  if(bagheera.isTouching(player))
  {
    gameState = 5 ;
  }
  
//keyDown up arrow
  if(keyDown(UP_ARROW) && player.y >= 359)
  {
    player.velocityY = -10;
  }

  
  if(mousePressedOver(attack))
  {
      stone();
  }
  
  
  

   //making text more attractive
textSize(20);
fill("blue");
stroke("black");
strokeWeight(5);
textFont("Comic Sans MS")
textSize(20);
text("SCORE : " + score , player.x ,200 );


}

function reset()
{
  player.velocityX = 20;
  player.visible = true;
  ground.visible = false;
  attack.visible = true;

  bagheera.x = -200
  bagheera.y =  windowHeight-160
  bagheera.velocityX = 3;
  bagheera.visible = true;
  gameState = 2;
  greeting.hide();
  score=0;

  
}
function Coins()
{
    
    if(frameCount % 350 == 00 )
    {
        
        var coins = createSprite(350, 690,20 ,20);
        coins.addAnimation("moveing" ,coins_image);
        coins.visible = true;
        coins.scale = 0.2;
        coins.x = random(350,700);
        coins.y = random(200,500); 
        coins.x = player.x + 1000 ;
        coinsGroup.add(coins);
        //coins.debug = true;

    }
    
    
}