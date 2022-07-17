export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;
        
        this.wall = new Image();
        this.wall.src = "../assets/wall.png";

        this.floor = new Image();
        this.floor.src="../assets/floor.png";
    }

    map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1],
        [1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1],
        [1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1],
        [1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1],
        [1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1],
        [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1],
        [1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1],
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

}