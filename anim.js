import Particule from "./Particule.js";
const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
console.log(canvas)

//basic infos about canvas
canvas.width = 1000 ;
canvas.height = 1000;
console.log(canvas)

// 
let particules 

function init (){
    particules = [];
    for (let index = 0; index < 100; index++) {
        particules.push(new Particule(canvas.width /2 , canvas.height /2 , 10 , 'blue'))
        
    }
    setInterval(update, 1000/60)
    

}
init()


function update (){
       context.fillStyle = 'rgba(255,255,255 , 0.1)' ;
       context.fillRect(0,0 , canvas.width , canvas.height)
        //context.fillStyle = "white"
        //context.fillRect(0,0 , canvas.width , canvas.height)
       particules.forEach(particule => {
        particule.draw(context)
        
        
        
    });
   

}
