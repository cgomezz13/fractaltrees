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

export default OOTree;
