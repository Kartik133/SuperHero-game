class Monster {
    constructor(x,y,width,height) {
       var options = {
          isStatic:true,
          restitution:1.0,
          friction:1.0,
          density:1.0
       }

       this.monster = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Monster-01.png");
       this.image2 = loadImage("Monster-02.png");

       World.add(world,this.monster);
    }

    display() {
       var pos = this.monster.position;
       
       imageMode(CENTER);
       image(this.image2,pos.x,pos.y,this.width,this.height);
    }
}