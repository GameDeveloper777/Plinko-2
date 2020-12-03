class Particles {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipesMode(RADIUS);
      fill("red");
      circle(pos.x, pos.y, this.width, this.height);
    }
  }
