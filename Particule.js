export default class Particule{
    constructor(x , y , radius , color ){
        this.x = x;
        this.y = y;
        this.startAngle = 0
        this.radius = radius
        this.color = color
        this.radians = 2*Math.PI*(Math.random())
        this.velocity = 0.03
        this.randomOrbit= (Math.floor(Math.random()*25))
        this.position = {
            x : x ,
            y : y 
        }
        console.log(this.position.x)
        
        
    }

        draw(context){
           this.motion()
           context.beginPath(); 
           context.arc(this.x , this.y ,this.radius ,this.startAngle, 2*Math.PI )
           context.fillStyle = this.color
           context.fill()


        }
        motion(){
            this.radians += this.velocity
            this.x = this.x + Math.cos(this.radians)*this.randomOrbit 
            this.y = this.y + Math.sin(this.radians)*this.randomOrbit
             //
            
            }
        
    }

    
