export default class Particule{
    constructor(x , y , radius){
        this.x = x;
        this.y = y;
        this.startAngle = 0
        this.radius = radius
        this.radians = Math.random()* Math.PI*2;
        this.velocity = 0.05
        
        
     
           }

        draw(context){
           this.motion()
           context.beginPath();
           context.arc(this.x , this.y ,this.radius ,this.startAngle, 2 * Math.PI )
           context.fillStyle = 'pink'
           context.stroke()


        }
        motion(){
            this.radians += this.velocity
            this.x = this.x + Math.cos(this.radians) *5
            this.y = this.y + Math.sin(this.radians) *5
            }
    
 
        
    }

    
