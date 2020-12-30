class Block extends BaseClass {

    constructor(x, y, width, height){

        var options = {

            isStatic:true
        }

      super(x,y,width,height)
      
      this.image = loadImage("block.jpg");
      
      
    }
  
  }
  