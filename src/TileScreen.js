import Hero from './hero.js'
export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        
        this.wall = new Image();
        this.wall.src = "../assets/wall.png";

        this.floor = new Image();
        this.floor.src="../assets/floor.png";
    }

    /*I ant to define the notation for this map here:
    The map is made up of a 2D array by which I can (hopefully) change the map per level
    1 = wall asset,
    0 = empty floor,
    2 = my hero asset
    3 = enemy asset */

    map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
        [1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1],
        [1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1],
        [1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1],
        [1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1],
        [1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1],
        [1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1],
        [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1],
        [1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1],
        [1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        
    ]

    drawElement(ctx, file, column, row, size){
        ctx.drawImage(file, column*this.tileSize, row*this.tileSize, size, size)
    }

    drawMap(ctx){
        for(let row = 0; row<this.map.length; row++){
            for(let column = 0; column <this.map[row].length; column ++){
                if(this.map[row][column] === 1){
                    this.drawElement(ctx, this.wall, column, row, this.tileSize);
                }

                else if(this.map[row][column] === 0){
                    this.drawElement(ctx, this.floor, column, row, this.tileSize)
                }
            }
        }
    }

    setCanvasSize(canvas){
        canvas.width = this.map[0].length * 32;
        canvas.height = this.map.length * 32;
    }

    getHero(velocity){
        for(let row = 0; row<this.map.length; row++){
            for(let column = 0; column <this.map[row].length; column ++){
                if(this.map[row][column] === 2){
                    this.map[row][column] = 0;
                    return new Hero(column*this.tileSize, row*this.tileSize, this.tileSize, velocity, this);
                    
                }
            }
        }
    }

}