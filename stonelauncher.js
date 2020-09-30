class StoneLauncher{
    constructor(bodyA, pointB){

       
        this.pointB = pointB;
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.8,
         
        }
        

        
        this.stoneLauncher = Constraint.create(options);
        World.add(world, this.stoneLauncher);


    }

    fly(){
        this.stoneLauncher.bodyA = null;
    }

    attach(body){
        this.stoneLauncher.bodyA=body;
    }

   

    display(){

        
        if(this.stoneLauncher.bodyA){
           
            var pointA = this.stoneLauncher.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            stroke(255);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }



            

           

           


        }
        
    
}

