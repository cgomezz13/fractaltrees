import Draw from "./tree.js";
import RecursiveDraw from "./recursive";
import Lsystem from "./lsystem";
import OOTree from "./oo_tree";

document.addEventListener("DOMContentLoaded", () => {
  // let ctx;

  let basic = document.getElementById("canvas-1");
  var ctx1 = basic.getContext("2d");
  basic.addEventListener("click", () => {
    new Draw(ctx1, 150);
  });

  let recursive = document.getElementById("canvas-2");
  var ctx2 = recursive.getContext("2d");
  recursive.addEventListener("click", () => {
    RecursiveDraw(ctx2, 400 / 2, 400, 80, 0);
  });

  let lsystem = document.getElementById("canvas-3");
  var ctx3 = lsystem.getContext("2d");
  let graph = new Lsystem(ctx3, 400, 400, 80);
  lsystem.addEventListener("click", () => {
    graph.generate();
  });

  let oocanvas = document.getElementById("canvas-4");
  var ctx4 = oocanvas.getContext("2d");
  let start = [400 / 2, 400];
  let end = [400 / 2, 400 - 80];
  let commands = [];
  let root = new OOTree(ctx4, start, end, 80, Math.PI / 2);
  oocanvas.addEventListener("click", () => {
    commands[0] = root; // root
    for (var j = commands.length - 1; j >= 0; j--) {
      if (!commands[j].finished) {
        commands.push(commands[j].rightBranch());
        commands.push(commands[j].leftBranch());
      }
      commands[j].finished = true;
    }

    for (var i = 0; i < commands.length; i++) {
      commands[i].draw();
    }
  });

  // var slideIdx = 1;
  // showCanvas(slideIdx);
  //
  // function showCanvas (n) {
  //   var k;
  //   var allCanvas = document.getElementsByClassName('canvas-slides');
  //   if (n > allCanvas.length) { slideIdx = 1 };
  //   if (n < 1) { slideIdx = allCanvas.length}
  //   for (var i = 0; i < allCanvas.length; i++) {
  //     allCanvas[i].style.display = 'none';
  //   }
  //   allCanvas[slideIdx - 1].style.display = 'block';
  // }
  //
  // let slideLeft = document.getElementById('slide-left');
  // slideLeft.addEventListener('click', () => {
  //   showCanvas( slideIdx -= 1 );
  // })
  //
  // let slideRight = document.getElementById('slide-right');
  // slideRight.addEventListener('click', () => {
  //   showCanvas( slideIdx += 1 );
  // })
});
