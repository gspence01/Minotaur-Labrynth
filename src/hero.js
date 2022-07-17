export default class Hero{
    constructor(x, y, tileSize, velocity, tileMap){
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;
        //this.loadHeroImages();

        this.heroFront = new Image();
        this.heroFront.src = '../assets/Theseus.png'
    }

    draw(ctx){
        ctx.drawImage(this.heroFront, this.x, this.y, this.tileSize, this.tileSize);
    }

    // loadHeroImages(){
    //     const heroFront = new Image();
    //     heroFront.src = '../assets/Theseus.png'
    
    // }
}

