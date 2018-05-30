import Draw from './tree.js';
import RecursiveDraw from './recursive';
import Lsystem from './lsystem';

document.addEventListener('DOMContentLoaded', () => {
  let ctx;

  let basic = document.getElementById('canvas-1');
  ctx = basic.getContext('2d');
  basic.addEventListener("click", () => {
    new Draw(ctx, 150)
  })

  let recursive = document.getElementById('canvas-2');
  ctx = recursive.getContext('2d');
  recursive.addEventListener("click", () => {
    RecursiveDraw(ctx, 400/2, 400, 80, 0);
  })

  // let lsystem = document.getElementById('canvas-3');
  // ctx = lsystem.getContext('2d');
  // let graph = new Lsystem(ctx, 400, 400, 80);
  // lsystem.addEventListener('click', () => {
  //   graph.generate();
  // })
})
