class Chain{
    constructor(body1, body2,offsetX,offsetY){
     this.offsetX=offsetX
     this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
//console.log(options);
this.rope=Constr.create(options)
World.add(world,this.rope)
    }
}
















   /*var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constr.create(options);
        this.pointB=pointB;
        World.add(world, this.chain);
    }
    //Fly(){
      //  this.chain.bodyA=null;



    display(){
        push()
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
      pop()*/