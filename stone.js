
class Stone{
    constructor(x,y,angle){
       var  options = {
           isStatic : false,
           friction : 1.0,
           density : 1.0
        }

        this.body = Bodies.circle(x,y,20,options);
        //this.height=50;
        //this.width=50;
        this.r=40;

        this.image= loadImage("stone.png")

      
        World.add(world,this.body);
    }
    display(){
        

       var angle = this.body.angle;
       var pos = this.body.position;
       push();

       translate(this.body.position.x, this.body.position.y);
       rotate(angle);

       
       
        
        
   

       imageMode(CENTER);
       image(this.image,0,0,this.r,this.r);
       
       pop();
        
    }
}