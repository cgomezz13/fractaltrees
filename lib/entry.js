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
  let leaves = [];
  let eachLeaf = [];
  let treeStatus = false;
  let root = new OOTree(ctx4, start, end, 80, Math.PI / 2);
  var count = 0;

  oocanvas.addEventListener("click", () => {
    commands[0] = root; // root
    if (count < 8) {
      console.log(count);
      for (var j = commands.length - 1; j >= 0; j--) {
        if (!commands[j].finished) {
          commands.push(commands[j].rightBranch());
          commands.push(commands[j].leftBranch());
        }
        commands[j].finished = true;
      }
      count++;

      // to get coordinates for outer most branches
      if (count === 8) {
        for (var i = 0; i < commands.length; i++) {
          if (!commands[i].finished) {
            leaves.push(commands[i].end);
          }
        }

        for (var i = 0; i < leaves.length; i++) {
          var leaf = {
            x: leaves[i][0],
            y: leaves[i][1],
            vx: 1,
            vy: 9,
            radius: 2,
            color: "red",
            draw: function() {
              ctx4.beginPath();
              ctx4.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
              ctx4.closePath();
              ctx4.fillStyle = this.color;
              ctx4.fill();
            }
          };
          leaf.draw();
          // eachLeaf.push(leaf);
        }
      }
    }

    for (var i = 0; i < commands.length; i++) {
      commands[i].draw();
    }
  });

  // function fallingLeaves(allLeaves) {
  //   // debugger;
  //   allLeaves.forEach(leaf => {
  //     // while (leaf.x < 400 && leaf.y < 400) {
  //     debugger;
  //     ctx4.clearRect(
  //       leaf.x - leaf.radius,
  //       leaf.y - leaf.radius,
  //       2 * leaf.radius,
  //       2 * leaf.radius
  //     );
  //     debugger;
  //     leaf.x += leaf.vx;
  //     leaf.y += leaf.vy;
  //     leaf.draw();
  //     // }
  //     // leaf.translate(leaf.x, leaf.y);
  //   });
  // }
});
