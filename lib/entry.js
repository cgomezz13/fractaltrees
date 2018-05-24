import Draw from './tree.js'

document.addEventListener('DOMContentLoaded', function (){
  const canvasEl = document.getElementById('myCanvas');
  const ctx = canvasEl.getContext('2d');

  const trunk = new Draw(ctx, 400, 400);
  trunk.branch(150);
  // trunk.line([0, 0], [0, -150]);

  // ctx.beginPath();
  // ctx.moveTo(200.5,400.5);
  // ctx.lineTo(200.5,250.5);
  // ctx.stroke();
});
