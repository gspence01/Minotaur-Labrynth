import TileMap from "./TileScreen.js";

const tileSize = 32;
const canvas = document.getElementById("gameCanvas");
const contxt = canvas.getContext('2d');

let tileMap = new TileMap(tileSize)

/*function gameLoop(){
    tileMap.draw();
}

setInterval(gameLoop, 1000/75)*/