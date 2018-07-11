/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recursive__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lsystem__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oo_tree__ = __webpack_require__(4);





document.addEventListener("DOMContentLoaded", () => {
  let basic = document.getElementById("canvas-1");
  var ctx1 = basic.getContext("2d");
  basic.addEventListener("click", () => {
    new __WEBPACK_IMPORTED_MODULE_0__tree_js__["a" /* default */](ctx1, 150);
  });

  let recursive = document.getElementById("canvas-2");
  var ctx2 = recursive.getContext("2d");
  recursive.addEventListener("click", () => {
    Object(__WEBPACK_IMPORTED_MODULE_1__recursive__["a" /* default */])(ctx2, 400 / 2, 400, 80, 0);
  });

  let lsystem = document.getElementById("canvas-3");
  var ctx3 = lsystem.getContext("2d");
  let graph = new __WEBPACK_IMPORTED_MODULE_2__lsystem__["a" /* default */](ctx3, 400, 400, 80);
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
  let root = new __WEBPACK_IMPORTED_MODULE_3__oo_tree__["a" /* default */](ctx4, start, end, 80, Math.PI / 2);
  var count = 0;

  oocanvas.addEventListener("click", () => {
    commands[0] = root; // root
    if (count < 8) {
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Draw {
  constructor(ctx, length) {
    this.ctx = ctx;
    this.currentLength = length;
    this.nextTranslate = [];
    this.branchesDrawn = 0;

    this.line([200,400],[200,250]);

    this.branches(length);
  }

  line(start, end) {
    this.ctx.beginPath();
    start = start.map(i => i + 0.5);
    end = end.map(i => i + 0.5);
    if (!this.checkInclusion(this.nextTranslate, end)) {
      this.nextTranslate.push(end)
    }
    this.ctx.moveTo(start[0], start[1]);
    this.ctx.lineTo(end[0], end[1]);
    this.ctx.stroke();
  }

  checkInclusion(given, target){
    for (var i = 0; i < given.length; i++) {
      let arr = given[i]
      if (arr[0]===target[0] && arr[1]===target[1]) {
        return true;
      }
    }
    return false;
  }

  drawLeftLine(startpos) {
    let length = this.currentLength
    let endpos = []
    endpos[0] = startpos[0] - (length * Math.cos(Math.PI/3))
    endpos[1] = startpos[1] - (length * Math.sin(Math.PI/3))
    this.branchesDrawn = this.branchesDrawn + 1;
    this.line(startpos, endpos);
  }

  drawRightLine(startpos) {
    let length = this.currentLength
    let endpos = []
    endpos[0] = startpos[0] - (length * -Math.cos(Math.PI/3))
    endpos[1] = startpos[1] - (length * Math.sin(Math.PI/3))
    this.branchesDrawn = this.branchesDrawn + 1;
    this.line(startpos, endpos);
  }

  branches(len) {
    while (this.currentLength > 5) {
      const startpos = this.nextTranslate.shift();
      this.currentLength = this.checkLength();
      this.drawRightLine(startpos)
      this.drawLeftLine(startpos)
    }
  }

  checkLength() {
    const num = this.branchesDrawn;
    if (Math.pow(2,2)-1 <= (num+1) && (num+1) <= Math.pow(2,3)-2) {
      return 150 * Math.pow((2/3), 2)
    }
    if (Math.pow(2,3)-1 <= (num+1) && (num+1) <= Math.pow(2,4)-2) {
      return 150 * Math.pow((2/3), 3)
    }
    if (Math.pow(2,4)-1 <= (num+1) && (num+1) <= Math.pow(2,5)-2) {
      return 150 * Math.pow((2/3), 4)
    }
    if (Math.pow(2,5)-1 <= (num+1) && (num+1) <= Math.pow(2,6)-2) {
      return 150 * Math.pow((2/3), 5)
    }
    if (Math.pow(2,6)-1 <= (num+1) && (num+1) <= Math.pow(2,7)-2) {
      return 150 * Math.pow((2/3), 6)
    }
    if (Math.pow(2,7)-1 <= (num+1) && (num+1) <= Math.pow(2,8)-2) {
      return 150 * Math.pow((2/3), 7)
    }
    if (Math.pow(2,8)-1 <= (num+1) && (num+1) <= Math.pow(2,9)-2) {
      return 150 * Math.pow((2/3), 8)
    }
    if (Math.pow(2,9)-1 <= (num+1) && (num+1) <= Math.pow(2,10)-2) {
      return 150 * Math.pow((2/3), 9)
    }
    else {
      return 150 * Math.pow((2/3), 1)
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Draw);


// Not a recursive function. These branches are dependent on knowing which # branch they are in order to decide the length it will grow to
// NOT Object Oriented. also each branch does not know its starting or ending position.
// The way it is built right now: always stores last end point into an array


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function recursive(ctx, startPosX, startPosY, length, angle) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(startPosX, startPosY);
  ctx.moveTo(0, 0);
  ctx.rotate(angle);
  ctx.lineTo(0, -length);
  ctx.stroke();

  if (length < 10) {
    ctx.restore();
    return;
  }

  recursive(ctx, 0, -length, length * 0.75, Math.PI / 6);
  recursive(ctx, 0, -length, length * 0.75, -Math.PI / 6);

  ctx.restore();
}

/* harmony default export */ __webpack_exports__["a"] = (recursive);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const rule = {
  a: "X",
  b: "",
  // b: 'F+[[X]-X]-F[-FX]+X',
  c: "F",
  d: "F+[+F-F-F]-[-F+F+F]"
  // d: 'FF+[+F-F-F]-[-F+F+F]'
};

// const blueprint = 'X';

class lsystem {
  constructor(ctx, width, height, length) {
    this.ctx = ctx;
    this.length = length;
    this.blueprint = "F";
    // this.blueprint = 'X';
    this.setup(width / 2, height);
  }

  setup(posX, posY) {
    this.ctx.translate(posX, posY);
    this.ctx.moveTo(0, 0);
  }

  generate() {
    let result = "";
    for (var i = 0; i < this.blueprint.length; i++) {
      var char = this.blueprint.charAt(i);

      if (rule.a === char) {
        result += rule.b;
      } else if (rule.c === char) {
        result += rule.d;
      } else {
        result += char;
      }
    }
    this.blueprint = result;
    this.length *= 2 / 3;

    this.path(this.blueprint, this.length);
  }

  path(blueprint, length) {
    if (length > 20) {
      for (var i = 0; i < blueprint.length; i++) {
        let char = blueprint.charAt(i);

        if (char === "F") {
          this.ctx.beginPath();
          this.ctx.moveTo(0, 0);
          this.ctx.lineTo(0, -length);
          this.ctx.translate(0, -length);
          this.ctx.stroke();
        } else if (char === "-") {
          this.ctx.rotate(-Math.PI / 9);
        } else if (char === "+") {
          this.ctx.rotate(Math.PI / 9);
        } else if (char === "[") {
          this.ctx.save();
        } else if (char === "]") {
          this.ctx.restore();
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (lsystem);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class OOTree {
  constructor(ctx, start, end, length, angle) {
    this.ctx = ctx;
    this.start = start;
    this.end = end;
    this.length = length;

    this.angle = angle;
    this.finished = false;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.start[0], this.start[1]);
    this.ctx.lineTo(this.end[0], this.end[1]);
    this.ctx.stroke();
  }

  leftBranch() {
    let newStart = [this.end[0], this.end[1]];
    let newEnd = [];
    var newAngle = this.angle - Math.PI / 4;
    newEnd[0] = this.end[0] - this.length * Math.cos(newAngle);
    newEnd[1] = this.end[1] - this.length * Math.sin(newAngle);

    var leftBranch = new OOTree(
      this.ctx,
      newStart,
      newEnd,
      this.length * 0.63,
      newAngle
    );

    return leftBranch;
  }

  rightBranch() {
    let newStart = [this.end[0], this.end[1]];
    let newEnd = [];
    var newAngle = this.angle + Math.PI / 4;
    newEnd[0] = this.end[0] + this.length * -Math.cos(newAngle);
    newEnd[1] = this.end[1] - this.length * Math.sin(newAngle);

    var rightBranch = new OOTree(
      this.ctx,
      newStart,
      newEnd,
      this.length * 0.63,
      newAngle
    );

    return rightBranch;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (OOTree);


/***/ })
/******/ ]);
//# sourceMappingURL=else.js.map