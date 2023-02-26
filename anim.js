import Particule from "./Particule.js";
const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')


//basic infos about canvas
canvas.width = innerWidth ;
canvas.height = innerWidth;

    const colors = [
        'pink',
        'purple',
        'teal',
        'violet',
        'cyan',
        'pink',
        'white',
        'yellow',
        'teal'
      ];
function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
}

//init particules
let particules 
function init (){
    particules = [];
    for (let index = 0; index < 200; index++) {
        const radius = Math.random() *5 ;
        const color = randomColor(colors)
        particules.push(new Particule(canvas.width /2 , canvas.height /2 , radius , color))
        
    }
    setInterval(update, 1000/60)

}
init()
function update (){
       context.fillStyle = 'rgba(0,0,0,0.4)' ;
       context.fillRect(0,0 , canvas.width , canvas.height)
        particules.forEach(particule => {
        particule.draw(context)
        return particule
                
    }); 
    
}
addEventListener('mousemove',motionMouse)

function motionMouse(event){
 // give the mouse same position as the particules => cooler drag effect
    const mouse = {
        x : canvas.width/2,
        y: canvas.height/2
    }
     mouse.x = event.x 
     mouse.y = event.y
    console.log(event.x + 'hhhh'+ mouse.x )
   for (let index = 0; index < particules.length; index++) {
    const particule = particules[index];
    particule.x += ( mouse.x - particule.x)*0.5
    particule.y += ( mouse.y - particule.y)*0.5
    
   }
  
}