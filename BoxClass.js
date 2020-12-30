class Box extends BaseClass {

    constructor(x, y, width, height){

      var options = {
        isStatic:true
      }

      super(x,y,width,height)
     // this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("pentagon.png");
      fill("red");
      
    }
  
  }
  