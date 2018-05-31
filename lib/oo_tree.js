class OOTree {
  constructor (ctx, start, end, length, angle) {
    debugger
    this.ctx = ctx;
    this.start = start;
    this.end = end;
    this.length = length;

    this.angle = angle;
    this.finished = false;
  }

  draw () {
      this.ctx.beginPath();
      this.ctx.moveTo(this.start[0], this.start[1]);
      this.ctx.lineTo(this.end[0], this.end[1]);
      this.ctx.stroke();
  }

  leftBranch () {
    let newStart = [this.end[0], this.end[1]];
    let newEnd = [];
    debugger
    this.angle = this.angle - (Math.PI/4);
    newEnd[0] = this.end[0] - (this.length * Math.cos(this.angle ))
    newEnd[1] = this.end[1] - (this.length * Math.sin(this.angle ))
    var newAngle = this.angle

    var leftBranch = new OOTree(this.ctx, newStart, newEnd, this.length*(0.63), newAngle)

    // debugger

    return leftBranch;
  }


  rightBranch () {
    let newStart = [this.end[0], this.end[1]];
    let newEnd = [];
    newEnd[0] = this.end[0] + (this.length * Math.cos(this.angle + Math.PI/4))
    newEnd[1] = this.end[1] - (this.length * Math.sin(this.angle + Math.PI/4))

    var newAngle = this.angle - Math.PI/4
    debugger
    var rightBranch = new OOTree(this.ctx, newStart, newEnd, this.length*(0.63), newAngle)

    return rightBranch;
  }

}

export default OOTree;
