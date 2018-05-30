const rule = {
  a: 'X',
  b: '',
  // b: 'F+[[X]-X]-F[-FX]+X',
  c: 'F',
  d: 'F+[+F-F-F]-[-F+F+F]'
  // d: 'FF+[+F-F-F]-[-F+F+F]'
};

// const blueprint = 'X';


class lsystem {
  constructor(ctx, width, height, length) {
    this.ctx = ctx;
    this.length = length;
    this.blueprint = 'F';
    // this.blueprint = 'X';
    this.setup(width/2, height);
  }

  setup(posX, posY) {
    this.ctx.translate(posX, posY);
    this.ctx.moveTo(0,0);
    console.log('DONE');
  }

  generate () {
    let result = '';
    for (var i = 0; i < this.blueprint.length; i++) {
      var char = this.blueprint.charAt(i);

      if (rule.a === char) {
        result += rule.b;
      } else if (rule.c === char) {
        result += rule.d
      } else {
        result += char
      }
    }
    this.blueprint = result;
    this.length *= (2/3);

    // console.log(this.blueprint, this.length);
    this.path(this.blueprint, this.length);
  }


  path(blueprint, length) {

    if (length > 20) {
     for (var i = 0; i < blueprint.length; i++) {
       let char = blueprint.charAt(i);


       if (char === 'F') {
         this.ctx.beginPath();
         this.ctx.moveTo(0,0);
         this.ctx.lineTo(0, -length);
         this.ctx.translate(0, -length);
         this.ctx.stroke();
       } else if (char === '-') {
         this.ctx.rotate(-Math.PI/9);
       } else if (char === '+') {
         this.ctx.rotate(Math.PI/9);
       } else if (char === '[') {
         this.ctx.save();
       } else if (char === ']') {
         this.ctx.restore();
       }
     }
   }
 }

}

export default lsystem;
