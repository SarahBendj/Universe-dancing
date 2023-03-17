
export default class Planet {
    constructor (x ,y ,speed ,radius){
        this.x = x;
        this.y = y;
        this.color = 'red'
        this.speed = speed;
        this.radius = radius
        this.radians = 2*Math.PI*(Math.random())

    }
    draw (context) {
        this.motion()
        context.beginPath()
        // 0.4 pour le radius j'ai eu la flemme lol
        context.arc(this.x , this.y , 0.4 ,0 ,2*Math.PI)
        context.fillStyle = 'white'
        context.fill()
    }
    motion(){
        this.radians += this.speed
        
    }

   
}
