class Block4 extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.image = loadImage("rect4.png");
  }


  display() {
    console.log(this.body.speed);

    if(this.body.speed<4) {
      super.display();
    }

    else {
      World.remove(world,this.body)
    }
  }
};