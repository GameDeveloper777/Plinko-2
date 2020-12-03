class Plinko {
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
      this.color = color(random(0,255), random(0,255), random(0,255));
      circle(pos.x, pos.y, this.width, this.height);
    }
  }
