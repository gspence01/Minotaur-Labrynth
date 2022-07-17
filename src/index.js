import TileMap from "./TileScreen.js";

const tileSize = 32;
const velocity = 1;

const canvas = document.getElementById("gameCanvas");
const contxt = canvas.getContext('2d');

let tileMap = new TileMap(tileSize);
const hero = tileMap.getHero(velocity);

function gameLoop(){
    tileMap.drawMap(contxt);
    Hero.draw(contxt);
}

tileMap.setCanvasSize(canvas);

setInterval(gameLoop, 1000);