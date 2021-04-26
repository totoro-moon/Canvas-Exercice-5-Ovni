
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// bas
ctx.beginPath();
ctx.moveTo(218, 83);
ctx.bezierCurveTo(137, 12, 68, 18, 1, 88);
ctx.bezierCurveTo(85, 149, 142, 144, 218, 83);
ctx.closePath();
ctx.fillStyle = "rgb(153, 153, 152)";
ctx.fill();


// haut
ctx.beginPath();
ctx.moveTo(59, 46);
ctx.bezierCurveTo(106, 55, 126, 54, 160, 46);
ctx.bezierCurveTo(140, 3, 103, -32, 59, 46);
ctx.closePath();
ctx.fillStyle = "rgb(212, 225, 225)";
ctx.fill();




