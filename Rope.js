class Rope{
    constructor(bodyA, bodyB, X ,Y){
        
        this.X= X;
        this.Y=Y;

        var options ={
            bodyA : bodyA,
            bodyB: bodyB,
            pointB: {x:this.X, y:this.Y}
        }

        this.rope = Constraint.create(options);
        //this.bodyB =bodyB;
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;

        stroke("green");
        strokeWeight(4);
        

        line(pointA.x, pointA.y, pointB.x + this.X, pointB.y + this.Y);
    }


}