const CONSTANTS = {
  HORIZONTAL_DISTANCE: 220,
  GAP:150
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipesQueue = [{x: null, y: null},{x: null, y: null},{x: null, y: null}];
    this.initializePipes();
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.movePipes();
    this.drawBackground(ctx);
    
    this.drawPipes(ctx);
  }

  initializePipes(){
    let counter = 1;
    this.pipesQueue.forEach(pipe => {
      pipe.x = this.dimensions.width + CONSTANTS.HORIZONTAL_DISTANCE * counter;
      counter += 1;
      pipe.y = Math.floor((this.dimensions.height-CONSTANTS.GAP) * Math.random());
    });
  }
//okay its hitting three then stopping
  //yay
  randomizePipe(pipe) { 
    pipe.x = this.pipesQueue.at(-1).x + CONSTANTS.HORIZONTAL_DISTANCE; 
    pipe.y = Math.floor((this.dimensions.height-CONSTANTS.GAP) * Math.random());
    return pipe; 
  }

  movePipes(){
    this.pipesQueue.forEach(pipe => {
      pipe.x -= 4;
    });
    //try again- just so it doesn't blinnk out
    if (this.pipesQueue[0].x <= -50 ){ //this condition. it wasnt checking for negative x.
      let shifted = this.pipesQueue.shift();
      // this.randomizePipe(shifted);
      this.pipesQueue.push(this.randomizePipe(shifted));
    }

    // this.PipesQueue[0].x 
  }
  //the bug is the randomizepipe's x starting point. 
  //because canvas's width is smaller than our initializePipes's x. it will cause to overlap
  //what if we installed a delay function. the delay will eventually overlap if we dont actually fix the core issue of timing.
  // probably need to compare to the previous pipe idk
  // actually a delay will help but we need to fix the initialize Pipe then.
  // i think i fixed it. nvm
  //i think the second and third pipes are still going over eachother
  //the first pipe is rendereing properly

  
  drawPipes(ctx){
    ctx.fillStyle = "green";
    this.pipesQueue.forEach(pipe => {
      ctx.fillRect(pipe.x-50, 0, 100, pipe.y);
      let newYStartingPoint = pipe.y + CONSTANTS.GAP;
      ctx.fillRect(pipe.x-50, newYStartingPoint, 100, this.dimensions.height - newYStartingPoint);
    });
  }
}