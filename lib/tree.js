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
    endpos[0] = startpos[0] - (length * Math.cos(Math.PI/4))
    endpos[1] = startpos[1] - (length * Math.sin(Math.PI/4))
    this.branchesDrawn = this.branchesDrawn + 1;
    this.line(startpos, endpos);
  }

  drawRightLine(startpos) {
    let length = this.currentLength
    let endpos = []
    endpos[0] = startpos[0] - (length * -Math.cos(Math.PI/4))
    endpos[1] = startpos[1] - (length * Math.sin(Math.PI/4))
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

export default Draw;
