class balls{
constructor(x,y){
    var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
this.body = Bodies.circle(x,y,30, options);
this.x=x;
this.y=y;
this.radius = 30;
World.add(world, this.body);
}

display(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
ellipseMode(RADIUS);
fill("pink")
ellipse(0,0,this.radius);
pop();

}

}
