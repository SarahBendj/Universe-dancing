import Planet from './Planet.js'
export default class Orbitation {
     planets = [];
     //distanceBetweenCorps = 0;
     constructor(canvas){
        this.canvas = canvas
     }
     orbit(x,y ,speed, radius){
        for (let index = 0; index < 1; index++) {
            this.planets.push( new Planet(x , y ,speed,radius ))
            
        }
      
       
        //this.distanceBetweenCorps = delay
        

     }
     draw (context){
        this.planets.forEach((planet) => planet.draw(context))
        

     }
    
}