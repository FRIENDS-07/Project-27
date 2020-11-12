class Chain{

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x:this.offsetX, y:this.offsetY}

        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }

    display(){
        stroke(2);
        fill("red");
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.offsetX,this.offsetY);
    }

}