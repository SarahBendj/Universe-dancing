
export default class Star {
    constructor(x , y , radius , color, orbitation ){
        this.x = x;
        this.y = y;
        this.orbitation = orbitation // this is for planets
        this.startAngle = 0
        this.radius = radius
        this.color = color
        this.radians = 2*Math.PI*(Math.random())
        this.velocity = Math.random()*0.01
        this.randomOrbit= ( Math.floor(Math.random()*10))
        this.position = {
            x : x ,
            y : y 
        }
    }
    draw(context){
        this.motion()
        context.beginPath()
        context.arc(this.x , this.y ,this.radius ,this.startAngle, 2*Math.PI )
        context.fillStyle = 'white'
        context.fill()
        this.orbit()

    }
    motion(){
        this.radians += this.velocity
        this.x = this.x + Math.cos(this.radians)*this.randomOrbit
        this.y = this.y + Math.sin(this.radians)*this.randomOrbit
        }

    orbit(){
        let speed = 5
        let radius = 5
        //planetX is in the middle of the star 
        let planetX = this.x*(1 +Math.random()*0.05)+ Math.cos(this.radians)*100  
        // the planetY is far 5 times from the star's localisation 
        let planetY = this.y*(1 +Math.random()*0.05)+ Math.sin(this.radians)*100
        this.orbitation.orbit(planetX , planetY , speed , radius)
    }
    
    
}