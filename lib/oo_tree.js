class OOTree {
  constructor (ctx, start, end, length, count) {
    debugger
    this.ctx = ctx;
    this.start = start;
    this.end = end;
    this.length = length;

    this.count = count;
    this.finished = false;
  }

  draw () {
    this.ctx.beginPath();
    this.ctx.moveTo(this.start[0], this.start[1]);
    this.ctx.lineTo(this.end[0], this.end[1]);
    this.ctx.stroke();
  }

  leftBranch () {
    // this.ctx.save();

    let newStart = [this.end[0], this.end[1]];
    let newEnd = [];
    newEnd[0] = this.end[0] - (this.length * Math.cos(Math.PI/4 ))
    newEnd[1] = this.end[1] - (this.length * Math.sin(Math.PI/4 ))

    // this.ctx.translate(this.end[0], this.end[1]);
    // this.ctx.moveTo(0,0);
    // this.ctx.rotate(Math.PI/6);
    // let newStart = [0,0];
    // let newEnd = [0, -this.length];
    const count = this.count + 1;
    debugger
    var leftBranch = new OOTree(this.ctx, newStart, newEnd, this.length*(0.63), count)

    // this.ctx.restore();
    debugger
    // leftBranch.draw()
    return leftBranch;
  }


  rightBranch () {
    let newStart = [this.end[0], this.end[1]];
    let newEnd = [];
    newEnd[0] = this.end[0] + (this.length * Math.cos(Math.PI/4 ))
    newEnd[1] = this.end[1] - (this.length * Math.sin(Math.PI/4 ))
    const count = this.count + 1;

    var rightBranch = new OOTree(this.ctx, newStart, newEnd, this.length*(0.63), count)

    return rightBranch;
  }

}

export default OOTree;
