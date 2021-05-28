let playerScore = 0;
let paddle;
let ball;
let bricks = [];
let playing;






function setup() {
  createCanvas(800, 600);

  let colors = createColors();
  
  
  paddle = new Paddle();
  ball = new Ball(paddle);
  playing = true;
  bricks = []
  bricks = createBricks(colors)
  
}

function createColors(){
  const colors = []
  colors.push(color(265,165,0))
  colors.push(color(135,206,250))
  colors.push(color(147,112,219))
  for(let i = 0; i < 10; i ++){

  
  colors.push(color(random(0,255),random(0,255),random(0,255)))
  }


return colors




}




function createBricks(colors){
  const bricks = []
  const rows = 5;
  const bricksPerRow = 10;
  const brickwidth = width / bricksPerRow

  for(let row = 0; row< rows; row++){
  for(let i = 0; i < bricksPerRow; i++){
  brick = new Brick(createVector(brickwidth*i,25*row),brickwidth,25,colors[Math.floor(random(0,colors.length))])
  bricks.push(brick)
      }
    }
    return bricks
}





function draw() {
  background(0);
  
 

ball.bounceEdge(); 
ball.update();
ball.bouncePaddle();

if (ball.belowBottom()){
  

  textSize(90);
  playing = false
  fill(255,0,0);
  text(`Perdiste!!`, width/2 -220,height /2 );




}




  if (keyIsDown(LEFT_ARROW)){
    paddle.move('left');

  }else if (keyIsDown(RIGHT_ARROW)){
    paddle.move('right');
  }

  paddle.display();
  ball.display();
  /*bricks.forEach(brick => {
    brick.display()
    brick.colliding(ball)
    })*/

    for (let i = bricks.length - 1; i >= 0; i--){

    const brick = bricks [i]  
    brick.display();
    if(brick.colliding(ball)){
      ball.reverse('y');
      bricks.splice(i,1)
      playerScore += brick.points
    }

    }


    if (bricks.length === 0){
      textSize(90);
      playing = false
      fill(255);
      text(`Ganaste!!`, width/2 -220,height /2 );
    }


  
  
  textSize(32);
  fill(255);
  text(`Score: ${playerScore}`, width - 150 ,50 );
  
    }

    
    

  

 