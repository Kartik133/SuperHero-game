class Ground {
    constructor(x,y,width,height) {
       var options = {
          isStatic:true,
          restitution:1.0,
          friction:1.0,
          density:1.0
       }

       this.ground = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       World.add(world,this.ground);
    }

    display() {
       var pos = this.ground.position;
       var Angle = this.ground.angle;
       
       push();
        translate(pos.x,pos.y);
        rotate(Angle);
        fill("white");
        strokeWeight(3);
        stroke(0);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
       pop();
    }
}