function PinkMonsters()
{
    
    if(frameCount % 550 == 00 )
    {
        
        var PinkMonsters = createSprite(350, 650,20 ,20);
        PinkMonsters.addAnimation("moveing" , pink_image);
        PinkMonsters.scale = 2;
        PinkMonsters.x = random(350,700);
        PinkMonsters.x = player.x + 1000 ;
         
        pinkmonstersGroup.add(PinkMonsters);
       // PinkMonsters.debug = true;
        //PinkMonsters.setCollider("rectangle", -5, 10, 60,60);
        
    }
}

