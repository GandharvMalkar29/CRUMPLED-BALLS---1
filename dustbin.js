class Dustbin {
    constructor(x,y,width,height){
       var option = {
         isStatic:true
       } 

       this.bottom = Bodies.rectangle(580,640,180,10,option);
       this.left = Bodies.rectangle(490,585,10,100,option);
       this.right = Bodies.rectangle(670,585,10,100,option);
       World.add(world,this.bottom)
       World.add(world,this.left)
       World.add(world,this.right)

    }
    display(){
        fill("white")
        rectMode(CENTER);
        rect(this.bottom.position.x,this.bottom.position.y,180,10)
        rect(this.left.position.x,this.left.position.y,10,100)
        rect(this.right.position.x,this.right.position.y,10,100)
        //console.log("hello..")
        
    }
}
