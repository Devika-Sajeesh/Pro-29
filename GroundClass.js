class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(rgb(0,255,255));
      fill(rgb(0,255,255));
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
