import Draw from './tree.js';
import RecursiveDraw from './recursive';
import Lsystem from './lsystem';
import OOTree from './oo_tree';

document.addEventListener('DOMContentLoaded', () => {
  let ctx;

  // let basic = document.getElementById('canvas-1');
  // ctx = basic.getContext('2d');
  // basic.addEventListener("click", () => {
  //   new Draw(ctx, 150)
  // })
  //
  // let recursive = document.getElementById('canvas-2');
  // ctx = recursive.getContext('2d');
  // recursive.addEventListener("click", () => {
  //   RecursiveDraw(ctx, 400/2, 400, 80, 0);
  // })
  //
  // let lsystem = document.getElementById('canvas-3');
  // ctx = lsystem.getContext('2d');
  // let graph = new Lsystem(ctx, 400, 400, 80);
  // lsystem.addEventListener('click', () => {
  //   graph.generate();
  // })

  let oocanvas = document.getElementById('canvas-4');
  ctx = oocanvas.getContext('2d');
  let start = [400/2, 400];
  let end = [400/2, 400-100];
  let commands = [];
  let root = new OOTree(ctx, start, end, 80, (Math.PI/6))
  oocanvas.addEventListener('click', () => {
    commands[0] = root; // root
    for (var j = commands.length-1; j >= 0; j--) {
      commands.push(commands[j].leftBranch())
      commands.push(commands[j].rightBranch())
    }

    console.log(commands)

    for (var i = 0; i < commands.length; i++) {
      if (!commands[i].finished) {
        commands[i].draw();
      }
    }

    console.log('COMPLETE')
  })
})
