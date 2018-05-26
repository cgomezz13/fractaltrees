import Draw from './tree.js'

document.addEventListener('DOMContentLoaded', function (){
  const canvasEl = document.getElementById('myCanvas');
  const ctx = canvasEl.getContext('2d');

  const trunk = new Draw(ctx, 150);
});
