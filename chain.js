class chain {
    constructor(bodyA,pointB){
       var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness: 1,
           length: 400
       }
       this.chain =  Constraint.create(options)
       this.pointB = pointB
       World.add(world,this.chain);
    }
    display(){
var pointA = this.chain.bodyA.position;
var pointB = this.pointB;
strokeWeight(8)
fill("black")
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}