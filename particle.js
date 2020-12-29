class Particle {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2,
          'isStatic': false
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.width = 20;
      this.height = 20;
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      circle(0, 0, this.width, this.height, this.color);
      pop();
    }
  };