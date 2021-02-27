class Drop  {
  constructor(x, y, width, height, angle) {
    var options = {
        'friction':0.1,
        'density':1.0
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }

  display(){
    
    
    translate(this.body.position.x, this.body.position.y);
    

    fill("blue");

    ellipse(0, 0, this.width, this.height);
   
  }
     
}

  

