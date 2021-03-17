class SuperHero {
    constructor(x,y,width,height) {
       var options = {
          isStatic:true,
          restitution:1.0,
          friction:1.0,
          density:1.0
       }

       this.superHero = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Superhero-01.png");
       this.image2 = loadImage("Superhero-02.png");

       World.add(world,this.superHero);
    }

    display() {
       var pos = this.superHero.position;
       
       imageMode(CENTER);
       
       if(frameCount%15===0) {
        image(this.image,pos.x,pos.y,this.width,this.height);
       }else {
         image(this.image2,pos.x,pos.y,this.width,this.height);
       }
    }
}