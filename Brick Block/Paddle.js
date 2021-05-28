class Paddle {
   
    constructor (){
       this.width = 150;
       this.height = 25;
       this.color = color(255);
       this.location = createVector((width / 2) - (this.width/2), height -35);
       
       
    this.speed = {
     right: createVector(10,0),
     left: createVector(-10,0)
    }
    }
    display(){
      fill(this.color);
      rect(this.location.x,this.location.y,this.width,this.height);
  
  
    }

    move(direction){
        if(direction === 'right'){
            this.location.add(this.speed.right)
        }else{
         
          this.location.add(this.speed.left);  
        }
    }





}
