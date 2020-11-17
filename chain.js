class slingshot{
    constructor(bodyA , pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:350
          }
           this.body = Constraint.create(options);
           this.pointB = pointB 
           
           World.add(world ,this.body);  

                  
   }
    


     display(){       
        
            stroke(2);
            fill("red");
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
        
        
    }
}