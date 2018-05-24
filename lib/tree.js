class Draw {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.position = [];

    ctx.translate(200, 400);
    this.branch = this.branch.bind(this);
  }

  line(start, end) {
    this.ctx.beginPath();
    start = start.map(i => i + 0.5);
    end = end.map(i => i = i + 0.5);
    this.ctx.moveTo(start[0], start[1]);
    this.ctx.lineTo(end[0], end[1]);
    this.ctx.stroke();
  }

  branch (len) {
    this.line([0,0], [0, -len])
    this.ctx.translate(0, -len)
    if (len > 5) {
      this.position.push([0, -len])
    }
  }

}

export default Draw;
