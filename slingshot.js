class Slingshot{
    constructor(bird,bodyB){
    var option={
    bodyA:bird,
    bodyB:bodyB,
    length:10,
    stifness:0.04    
    }
        this.sling=Constraint.create(option);   
    World.add(world,this.sling);
    }
    display(){
    strokeWeight(4);    
        line(this.sling.bodyA.position.x ,this.sling.bodyA.position.y,this.sling.bodyB.position.x ,this.sling.bodyB.position.y);
    };
}