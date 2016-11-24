var mycanvas = document.getElementById('myCanvas');
var ctx = mycanvas.getContext('2d');
var snakeSize = 20;
var w = 1200;
var h = 800;
var score = 0;
var x = 0;
var y = 0;
var snake;
var food;

ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,20,20);

setInterval(move,1);
function move(canvas,size) {
  canvas.clearRect(x,y,size,size);
  x += size;
  canvas.fillRect(x,y,size,size);
}
