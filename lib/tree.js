class Draw {
  constructor(ctx, length) {
    this.ctx = ctx;
    this.currentLength = length;
    this.nextTranslate = [];

    ctx.translate(200, 400);
    this.line([0,0], [0, -length])

    this.branches(length);
  }

  line(start, end) {
    this.ctx.beginPath();
    start = start.map(i => i + 0.5);
    end = end.map(i => i + 0.5);
    if (!this.checkInclusion(this.nextTranslate, end)) {
      this.nextTranslate.push(end)
    }
    debugger
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

  drawRightLine(len) {
    // debugger
    this.ctx.rotate(Math.PI/4)
    this.line([0,0], [0, -len])
    this.ctx.rotate(-Math.PI/4)
    // this.ctx.translate(0, -len)
  }

  drawLeftLine(len) {
    // debugger
    this.ctx.rotate(-Math.PI/4)
    this.line([0,0], [0, -len])
    this.ctx.rotate(Math.PI/4)
    // this.ctx.translate(0, -len)
  }

  branches(len) {
    while (this.currentLength>5) {
      this.ctx.translate(0, -this.currentLength)
      this.drawRightLine(this.currentLength * (2/3))
      this.drawLeftLine(this.currentLength * (2/3))
      this.currentLength = this.currentLength*(2/3)
      // this.ctx.translate(0, -this.currentLength)
    }
  }

}

export default Draw;
