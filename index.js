//console.log(gradientArray);
import Particule from "./Particule.js";
import Star from "./stars.js";
import Orbitation from "./orbitation.js";
const canvas = document.querySelector("#canvas");
let options = { colorSpace: "display-p3" };
const context = canvas.getContext("2d", options);

//basic infos about canvas
canvas.width = innerWidth;
canvas.height = innerWidth;

// these colors might for illustrate the particules
const colors = [
  "pink",
  "purple",
  "teal",
  "violet",
  "cyan",
  "pink",
  "white",
  "yellow",
  "teal",
];
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

//init particules
let particules;
function init() {
  particules = [];
  for (let index = 0; index < 200; index++) {
    const radius = Math.random();
    const color = randomColor(colors);
    // this would give a relative position , they all would come out of the middle of the screen
    particules.push(
      new Particule(canvas.width / 2, canvas.height / 2, radius, color)
    );
  }
  setInterval(update, 100);
}
init();
// create an other init() for the stars , so you set and update changes without touching other files
let stars;
let orbitation = new Orbitation(canvas);
function display() {
  stars = [];
  for (let index = 0; index < 200; index++) {
    const radius = Math.random() * 1.5;

    const color = "yellow";
    stars.push(
      new Star(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        radius,
        color,
        orbitation
      )
    );
  }
  // this would set a delay between every update
  // => update would be called every 50ms
  setInterval(update, 50);
}

display();

function update() {
  context.fillStyle = "rgb(0,0,20 , 0.1)";
  // the opacity detail would create a light drag Effect!
  context.fillRect(0, 0, canvas.width, canvas.height);
  orbitation.draw(context);
  let forms = [stars, particules];
  for (let index = 0; index < forms.length; index++) {
    let elements = forms[index];
    elements.forEach((elem) => {
      elem.draw(context);
    });
  }
}

//todo : such a mess !

/* for (let j = 0; j < forms.length; j++) {
            
             for (let index = 0; index < forms[j].length; index++) {
            console.log((stars[index].x)) 
            if ( stars[index].x - particules[index].x  < 200){
                particules[index].x = 0 + Math.cos(0.5)
                particules[index].y = 0 + Math.sin(0.5)
            }
        }
    }
}*/

// code the mouse coordination , so you'll be able to drag whaterver you want
//i've chosen only "stars" , but you can update it.
addEventListener("mousemove", motionMouse);

function motionMouse(event) {
    const mouse = {
      x: event.clientX,
      y: event.clientY + 700
    };
  
    const slowdownFactor = 0.05;
    const followDistance = 100;
    const orbitStartDistance = 50;
  
    for (let index = 0; index < stars.length; index++) {
      const star = stars[index];
      const dx = mouse.x - star.x;
      const dy = mouse.y - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
  
      if (distance < orbitStartDistance) {
        star.x = mouse.x + orbitStartDistance * Math.cos(angle) * slowdownFactor;
        star.y = mouse.y + orbitStartDistance * Math.sin(angle) * slowdownFactor;
      } else if (distance <= followDistance) {
        star.x = mouse.x;
        star.y = mouse.y;
      } else {
        star.x += dx * slowdownFactor;
        star.y += dy * slowdownFactor;
      }
    }
  }
  