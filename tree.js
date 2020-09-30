class Tree{
    constructor(x,y){
        this.x = x;
        this.y=y;
        this.height = 600;
        this.width = 450;
        this.thickness=15;
    

        this.image  = loadImage("tree.png");
        var options={
            isStatic:true,
        }

        this.bottomBody  =  Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
        this.leftBody = Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height);
        this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height,this.thickness,this.height);

            World.add(world,this.bottomBody);
            World.add(world,this.leftBody);
            World.add(world,this.rightBody);
    }

    display(){
        //var pos = this.bottomBody.position;
       
        
      
    
   
        imageMode(CENTER);
        image(this.image,this.x,this.height/2,this.width,this.height);
       
    }
       
}