import Level from "./level";
import Bird from "./bird";

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d"); //creates instance of drawing context
    this.dimensions = { width: canvas.width, height: canvas.height };
    canvas.addEventListener("click", this.click.bind(this));
    this.restart();
    this.play();
  }

  /*
    Create an animate method in your Game class. 
    For now, this method will only call 
    animate on your Level class. 
    (Don't forget to import Level!)
  */
  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    if(this.running === true) { window.requestAnimationFrame(this.animate.bind(this)); }
  }

  /*
     As you may have noticed, you haven't created an instance of Level yet. 
    Make a new method on Game called restart. restart will create a new 
    instance of Level and store that as an instance variable. Be sure to pass 
    the dimensions of the canvas to the constructor of Level.
    width: 640 height: 480
  */

  restart(){
    // let canvas = document.getElementbyId('bird-game');
    this.running = false;
    this.bird = new Bird(this.dimensions);
    this.level = new Level(this.dimensions);
    this.animate();
  }

  play(){
    this.running = true;
    this.animate();
  }

  click() {
    this.bird.flap();
  }
}