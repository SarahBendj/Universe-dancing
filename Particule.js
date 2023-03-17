export default class Particule{
    constructor(x , y , radius , color ){
        this.x = x;
        this.y = y;
        this.startAngle = 0
        this.radius = radius
        this.color = color
        this.radians =  10* Math.PI*(Math.random())
        this.velocity = 0.1
       // this.randomOrbit= (Math.floor(Math.random()*15))
        this.position = {
            x : x ,
            y : y 
        }
   
    }
        draw(context){
           this.motion()
           context.beginPath(); 
           context.arc(this.x , this.y ,this.radius ,0, 2*Math.PI )
           context.fillStyle = this.color
           context.fill()
        }
        motion(){
            //console.log(this.x)
            this.radians += this.velocity
            
            // a la base c'est juste un cercle avec a chaque update des coordonnes diff
            // tu peux utiliser ça si tu préfères
            // this.x  =  this.x + Math.cos()*100
            // this.y =  this.x + Math.sin()*100
            this.x =  Math.random()*this.x + Math.cos(this.radians)*1000
            this.y =  Math.random()*this.y+ Math.sin(this.radians)*1000
            // 1000 j'ai voulu prendre le plus de place sur le screen ,
            // j'aurai pu importer le .index 
            // et remplacer par canvas.width/et height
             
            }
        
    }

    
