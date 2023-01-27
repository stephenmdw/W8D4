const CONSTANTS = {
    GRAVITY:  0.5,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
};

export default class Bird{
    constructor(dimensions){
        this.velocity = 0;
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.xpos = (dimensions.width / 3);
        this.ypos = (dimensions.height / 2 );
    }
    

    drawBird(ctx){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.xpos, this.ypos, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    }

    animate(ctx){
        // debugger
        this.move();
        this.drawBird(ctx);
    }
    //Why do we move the bird before drawing?

    move() {
        this.ypos += this.velocity;
        if ((this.velocity < CONSTANTS.TERMINAL_VEL)){
            this.velocity += CONSTANTS.GRAVITY;
        }
    }

    flap(){
        if(Math.abs(this.velocity) < CONSTANTS.TERMINAL_VEL){
            this.velocity += CONSTANTS.FLAP_SPEED;
        }
    }

    getBounds(){
        // let bounds = {topLeft: , bottomRight: }
    }
    
}

