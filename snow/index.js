const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const snowballArray = []
const mountainCords = [
    {
        x:195,
        y:1085,
        r:555
    },
    {
        x:925,
        y:1295,
        r:855   
    }
    
]
const mountainCordsOverlay= [
    {
        x:195,
        y:1085,
        r:555
    },
    {
        x:925,
        y:1295,
        r:855   
    }
]

const snowballCount = 50
let whitlyCounter1 = 0
let whitlyCounter2 = 0
let randomX
let randomY


for (let j = 0; j < mountainCords.length; j++) {
    ctx.beginPath();
     
    ctx.arc(mountainCords[j].x,mountainCords[j].y,mountainCords[j].r,0,Math.PI,true); 
    ctx.fillStyle = `rgba(0,122,0,1)`
    ctx.fill()
     
 }
 for (let k = 0; k < mountainCordsOverlay.length; k++) {
    ctx.beginPath();
     
    ctx.arc(mountainCordsOverlay[k].x,mountainCordsOverlay[k].y,mountainCordsOverlay[k].r,0,Math.PI,true); 
    ctx.fillStyle = `rgba(255, 255, 255, 0)`
    ctx.fill()
     
 }
for (let i = 0; i < snowballCount; i++) {
    ctx.beginPath();
 randomX=Math.floor(Math.random()*window.innerWidth)
   randomY=Math.floor(Math.random()*-window.innerHeight)
snowballArray.push({
    x:randomX,
    y:randomY,
    r:(Math.random()*4)+2,
    directionX: (Math.random()*.4)-.2,
    directionY: (Math.random()*1.99)+.99,
    snowballOpacity: (Math.random()* 1.0)+0.1
})
    ctx.arc(snowballArray[i].x,snowballArray[i].y,snowballArray[i].r,0,Math.PI*2,true); 
  ctx.fillStyle = `rgba(255, 255, 255, ${snowballArray[i].snowballOpacity})`
  ctx.fill();
    
    
}
function snowballMove(){
   
    ctx.clearRect(0, 0, innerWidth, innerHeight);
   
    for (let j = 0; j < mountainCords.length; j++) {
        ctx.beginPath();
         
        ctx.arc(mountainCords[j].x,mountainCords[j].y,mountainCords[j].r,0,Math.PI,true); 
        ctx.fillStyle = `rgba(0,122,0,1)`
        ctx.fill()
         
     }
     for (let k = 0; k < mountainCordsOverlay.length; k++) {
        ctx.beginPath();
         
        ctx.arc(mountainCordsOverlay[k].x,mountainCordsOverlay[k].y,mountainCordsOverlay[k].r,0,Math.PI,true); 
        ctx.fillStyle = `rgba(255, 255, 255, 0)`
        ctx.fill()
         
     }
    for (let i = 0; i < snowballArray.length; i++) {

        let distanceX1 = snowballArray[i].x - mountainCords[0].x
        let distanceY1 =   snowballArray[i].y - mountainCords[0].y
        let distanceX2 = snowballArray[i].x - mountainCords[1].x
        let distanceY2 =   snowballArray[i].y - mountainCords[1].y
        let radii1 = snowballArray[i].r + mountainCords[0].r
        let radii2 = snowballArray[i].r + mountainCords[1].r
        let distance1 = Math.sqrt((distanceX1 * distanceX1) + (distanceY1 * distanceY1))
        let distance2 = Math.sqrt((distanceX2 * distanceX2) + (distanceY2 * distanceY2))
       
       
        
            if(whitlyCounter1>=25 && whitlyCounter1<=45)
            {
                ctx.beginPath()
                ctx.arc(mountainCordsOverlay[0].x,mountainCordsOverlay[0].y,mountainCordsOverlay[0].r,0,Math.PI,true); 
                ctx.fillStyle = `rgba(255, 255, 255, 0.1)`
                ctx.fill()
            }
            
            if(whitlyCounter2>=25 && whitlyCounter2<=45)
            {
                ctx.beginPath()
                ctx.arc(mountainCordsOverlay[1].x,mountainCordsOverlay[1].y,mountainCordsOverlay[1].r,0,Math.PI,true); 
                ctx.fillStyle = `rgba(255, 255, 255, 0.1)`
                ctx.fill()
            }
            if(whitlyCounter1>45 && whitlyCounter1<=75)
            {
                ctx.beginPath()
                ctx.arc(mountainCordsOverlay[0].x,mountainCordsOverlay[0].y,mountainCordsOverlay[0].r,0,Math.PI,true); 
                
                ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
                ctx.fill()
              
            }
            if(whitlyCounter2>45 &&  whitlyCounter2<=75)
            {
                ctx.beginPath()
                ctx.arc(mountainCordsOverlay[1].x,mountainCordsOverlay[1].y,mountainCordsOverlay[1].r,0,Math.PI,true); 
                ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
                ctx.fill()
              
            }
            if(whitlyCounter1>75 && whitlyCounter1<=95)
            {
                ctx.beginPath()
                ctx.arc(mountainCordsOverlay[0].x,mountainCordsOverlay[0].y,mountainCordsOverlay[0].r,0,Math.PI,true); 
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
                ctx.fill()
               
            }
            if( whitlyCounter2>75 && whitlyCounter2<=95)
            {
                ctx.beginPath()
                ctx.arc(mountainCordsOverlay[1].x,mountainCordsOverlay[1].y,mountainCordsOverlay[1].r,0,Math.PI,true); 
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
                ctx.fill()
            }
            if(whitlyCounter1>95)
            {
                ctx.beginPath()
                ctx.arc(mountainCordsOverlay[0].x,mountainCordsOverlay[0].y,mountainCordsOverlay[0].r,0,Math.PI,true); 
               
                ctx.fillStyle = "rgba(255, 255, 255, 1)"
                ctx.fill()
               
            }
            if(whitlyCounter2>95)
            {
                ctx.beginPath()
            
                ctx.arc(mountainCordsOverlay[1].x,mountainCordsOverlay[1].y,mountainCordsOverlay[1].r,0,Math.PI,true); 
                ctx.fillStyle = "rgba(255, 255, 255, 1)"
                ctx.fill()
               
            }
           
          
        
      
        if(distance1 <= radii1)
        {
         
            whitlyCounter1++
            snowballArray[i].y=-5
         
            
        }
        else if(distance2 <= radii2)
        {
          
            whitlyCounter2++
            snowballArray[i].y=-5
         
           
        }
      
      
      
       ctx.beginPath()
        snowballArray[i].x+=snowballArray[i].directionX
        snowballArray[i].y+=snowballArray[i].directionY
        ctx.arc(snowballArray[i].x,snowballArray[i].y,snowballArray[i].r,0,Math.PI*2,true); 
    ctx.fillStyle = `rgba(255, 255, 255, ${snowballArray[i].snowballOpacity})`
   
    ctx.fill();
       
    }
    
   
   
   
}
setInterval(snowballMove, 30)



