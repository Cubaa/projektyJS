const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const timeSpan = document.querySelector('span.time')
const scoreSpan = document.querySelector('span.score')

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let ballRadious = 40;
let holeRadious = 50;
let isCollision = false
const ball={
  xPosition:0,
  yPosition:0,
  speedX:0,
  speedY:0,
  speedZ:0,
}
const hole={
  xPosition:0,
  yPosition:0,
  isRed: false
}
const holes = []
const date = new Date()
let time = 60
let score = 0
timeSpan.textContent=`${time}s`
scoreSpan.textContent=`${score}`
let indexInterval

function checkResult(){

  if(holes.length!==0)
  {

    console.log("przgrałes a Twoja liczba pkt jest rowna " + score)
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)
    clearInterval(indexInterval)
    
  }
  else{
   console.log("Wygrałes a Twoja liczba pkt jest rowna " + score)
   
clearInterval(indexInterval)
 
   ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)

   
  }

}
 indexInterval = setInterval((indexInterval) => {
  time--
   if(time===0)
   {
     
     time=0
     checkResult(indexInterval)
     timeSpan.textContent=`${time}s`
   

     
   }
   if(time!==0 && score===random)
   {
    time=time
    checkResult(indexInterval)
    timeSpan.textContent=`${time}s`
   
   }
   
   
   timeSpan.textContent=`${time}s`

   
 
 }, 1000);


window.addEventListener("deviceorientation", (e)=>handleOrientation(e))


const setPositions = function setPositions(obj){
let xRandom
let yRandom

      xRandom = Math.floor(Math.random()*canvas.width)
      yRandom =  Math.floor(Math.random()*canvas.height)
  

  obj.xPosition=xRandom
  obj.yPosition=yRandom
  
  

}


let redCircle
let random = (Math.floor(Math.random()*5)+1)
//console.log(random)
let overlapping = false
redCircle = Math.floor(Math.random()*holes.length)

const generateBallAndHole =  function generateBallAndHole(ball, hole){
  ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)
 

  ctx.globalCompositeOperation='destination-over';
holes.length=0

  for (let index = 0; index < random; index++) {
      setPositions(hole)
      holes.push({
        xPosition:hole.xPosition,
        yPosition:hole.yPosition,
        isRed:false,
      })
  }
   setPositions(ball)
   

   

  
    for (let i = 0; i < holes.length; i++) {
      
      if(holes.length>1){
        collisionHoleToHole(holes)
           }
  
  let dx = ball.xPosition - holes[i].xPosition
  let dy = ball.yPosition - holes[i].yPosition
  let distance = Math.sqrt(dx*dx + dy*dy)

  
  if(distance<(ballRadious + holeRadious))
  {
    holes.length=0

    overlapping=true
    generateBallAndHole(ball, hole) 
  
  }

 
  if(holes[i].xPosition < holeRadious || holes[i].xPosition + holeRadious > window.innerWidth)
    {
      holes.length=0
      generateBallAndHole(ball, hole)
    }
  if(ball.xPosition < ballRadious || ball.xPosition + ballRadious > window.innerWidth)
  {
    holes.length=0
    generateBallAndHole(ball, hole)
    
  }
  console.log(holes[i].yPosition + holeRadious > window.innerHeight)
  if(holes[i].yPosition < holeRadious || holes[i].yPosition + holeRadious > window.innerHeight)
  {
    holes.length=0
    generateBallAndHole(ball, hole)
    
  }
  if(ball.yPosition < ballRadious || ball.yPosition + ballRadious > window.innerHeight)
  {
    holes.length=0
  
   generateBallAndHole(ball, hole)
  }
  else{
    ctx.beginPath();
    ctx.arc(holes[i].xPosition, holes[i].yPosition, holeRadious, 0, 2 * Math.PI);
    if(i===redCircle)
    {
      ctx.fillStyle="red"
      holes[i].isRed=true
    }else ctx.fillStyle = 'brown';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.stroke();
  }
 
}


  
ctx.beginPath();
ctx.arc(ball.xPosition, ball.yPosition, ballRadious, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
}
generateBallAndHole(ball, hole)
function collisionHoleToHole(holes){
let isCollisionaaaa

    for (var i=0; i<holes.length; i++) {
      for(var j=0; j<holes.length; j++)
      {
       
       
        if(holes[i]===holes[j] && holes.length>1)
            j++
        else  
        {
          let distanceX= holes[i].xPosition - holes[j].xPosition
          let distanceY = holes[i].yPosition - holes[j].yPosition
          let rr = holeRadious + holeRadious
          let length = Math.sqrt(distanceX*distanceX + distanceY * distanceY)
          if(length<rr)  {
     
        //console.log("stykaja sie kola")
         
       isCollisionaaaa = true
       return generateBallAndHole(ball, hole)
    }else isCollisionaaaa = false
        
        
    
      }
    
  }
  if(holes[i].xPosition < holeRadious || holes[i].xPosition + holeRadious > window.innerWidth)
  {
    holes.length=0

    generateBallAndHole(ball, hole)
  }

//console.log(holes[i].yPosition + holeRadious > window.innerHeight)
if(holes[i].yPosition < holeRadious || holes[i].yPosition + holeRadious > window.innerHeight)
{


  holes.length=0

  generateBallAndHole(ball, hole)
  
}

    
}


  

  

}


function detectMoveBallHoleCollision(ball,hole)

{

 
  for (let index = 0; index < holes.length; index++) {
    let dx = Math.round(ball.xPosition - holes[index].xPosition)
  let dy = Math.round(ball.yPosition - holes[index].yPosition)
  let distance = Math.round(Math.sqrt(dx*dx + dy*dy))
  //console.log(distance, dx, dy)
    if(distance<((ballRadious + holeRadious)- ballRadious*2))
    {
      if(holes.length===1 && score===random)
         ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)
      if(holes[index].isRed){
      ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)
      holes.splice(redCircle, 1)
      drawHole(hole)
      drawBall(ball)
      console.log("win")
      if(score===random)
      {
        checkResult()
      }
      

      score++
      scoreSpan.textContent=`${score}`

     setTimeout(()=>{
        ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)
        drawHole(hole)
      }, 2222)
    }
    
     }
    
  }
  
 
  
}

function drawBall(ball){
  ctx.globalCompositeOperation='destination-over';
  if(ball.xPosition <= ballRadious)
  {

ball.xPosition=ballRadious

    
  }else if(ball.xPosition + ballRadious >= window.innerWidth)
  {
ball.xPosition=window.innerWidth-ballRadious
  }
  
  if(ball.yPosition <= ballRadious)
  {
    ball.yPosition= ballRadious

 
  }else if(ball.yPosition + ballRadious >= window.innerHeight)
  {
    ball.yPosition=window.innerHeight - ballRadious
  }
  
  ctx.beginPath();
  ctx.arc(ball.xPosition, ball.yPosition, ballRadious, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();
}
function drawHole(hole, random){
  
for (let index = 0; index < holes.length; index++) {
  
  ctx.beginPath();
ctx.arc(holes[index].xPosition, holes[index].yPosition, holeRadious, 0, 2 * Math.PI);
if(index===redCircle)
    {
      ctx.fillStyle="red"
      holes[index].isRed=true

    }else ctx.fillStyle = 'brown';
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
}
  
}
function handleOrientation(e){
  //console.log("orienatation")

  if(holes.length!==0 && time!==0)
{
  const alpha  = e.alpha;
  const beta  = e.beta;
  const gamma  = e.gamma;
    ball.speedX = alpha;
    ball.speedY = beta
    ball.speedZ = gamma
    ball.xPosition+=ball.speedX/45
    ball.yPosition+=ball.speedY/45
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)
   

  detectMoveBallHoleCollision(ball,hole)
    drawBall(ball)
    drawHole(hole, random)
}else
{
ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height)
}
   


  }

