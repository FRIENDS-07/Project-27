class Ball{

    constructor(x){

        this.body = Bodies.circle(x,275,70,{isStatic:true});
        World.add(world,this.body);

    }

    display(){
        ellipseMode(CENTER);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,70,70); 
    }

}