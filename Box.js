class Box {
    constructor(x,y,width,height) {
       var options = {
          isStatic:false,
          restitution:1.0,
          friction:1.0,
          density:1.0
       }

       this.box = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       World.add(world,this.box);
    }

    display() {
       var pos = this.box.position;
       var Angle = this.box.angle;
       
       push();
        translate(pos.x,pos.y);
        rotate(Angle);
        fill("red");
        strokeWeight(3);
        stroke(0);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
       pop();
    }
}