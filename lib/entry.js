import Draw from './tree.js';
import RecursiveDraw from './recursive';

document.addEventListener('DOMContentLoaded', function (){
  const canvasEl = document.getElementById('myCanvas');
  const ctx = canvasEl.getContext('2d');
  RecursiveDraw(ctx, 200, 400, 100, 0);
  // const tree = new Draw(ctx, 150);

});
