const shapes = [];
const colors = [
  'coral',
  'blueviolet',
  'teal',
  'gold',
  'purple',
  'cadetblue',
  'silver',
];

class Particles {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.strokeStyle = 'black';
    this.dx = (Math.random() - 0.5) * 2;
    this.dy = (Math.random() - 0.5) * 2;
    this.strokeColor = colors[Math.floor(Math.random() * colors.length)];
  }
}

Particles.prototype.toggleColorMode = function (isDark) {
  if (isDark) {
    this.strokeStyle = this.strokeColor;
  } else {
    this.strokeStyle = 'gainsboro';
  }
};

class Circle extends Particles {
  constructor(x, y, radius, ctx) {
    super(x, y, ctx);
    this.radius = radius;
  }

  draw() {
    const _ctx = this.ctx;
    _ctx.beginPath();
    _ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    _ctx.strokeStyle = this.strokeStyle;
    _ctx.stroke();
  }

  move(canvas) {
    if (this.x + this.radius >= canvas.width || this.x <= 0) {
      this.dx = -1 * this.dx;
    }

    if (this.y + this.radius >= canvas.height || this.y <= 0) {
      this.dy = -1 * this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

class Square extends Particles {
  constructor(x, y, length, ctx) {
    super(x, y, ctx);
    this.length = length * 2;
  }

  draw() {
    const _ctx = this.ctx;
    _ctx.beginPath();
    _ctx.moveTo(this.x, this.y);
    _ctx.lineTo(this.x, this.y + this.length);
    _ctx.lineTo(this.x + this.length, this.y + this.length);
    _ctx.lineTo(this.x + this.length, this.y);
    _ctx.lineTo(this.x, this.y);
    _ctx.strokeStyle = this.strokeStyle;
    _ctx.stroke();
  }

  move(canvas) {
    if (this.x + this.length >= canvas.width || this.x <= 0) {
      this.dx = -1 * this.dx;
    }

    if (this.y + this.length >= canvas.height || this.y <= 0) {
      this.dy = -1 * this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

class Triangle extends Particles {
  constructor(x, y, length, ctx) {
    super(x, y, ctx);
    this.length = length * 3;
  }

  draw() {
    const _ctx = this.ctx;
    _ctx.beginPath();
    _ctx.moveTo(this.x, this.y);
    _ctx.lineTo(this.x + this.length, this.y);
    _ctx.lineTo(
      this.x + this.length / 2,
      this.y + Math.cos(Math.PI / 3) * this.length
    );
    _ctx.lineTo(this.x, this.y);
    _ctx.strokeStyle = this.strokeStyle;
    _ctx.stroke();
  }

  move(canvas) {
    if (this.x + this.length >= canvas.width || this.x <= 0) {
      this.dx = -1 * this.dx;
    }

    if (this.y + this.length >= canvas.height || this.y <= 0) {
      this.dy = -1 * this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

function animate(ctx, canvas, shapes) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(function () {
    animate(ctx, canvas, shapes);
  });

  shapes.forEach(function (_shape) {
    _shape.move(canvas);
  });
}

export default function splash(context, canvas) {
  for (let i = 0; i < 9; i++) {
    const size = 10;
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);
    if (i % 3 === 0) {
      shapes.push(new Circle(x, y, size, context));
    } else if (i % 2 === 0) {
      shapes.push(new Square(x, y, size, context));
    } else {
      shapes.push(new Triangle(x, y, size, context));
    }
  }

  animate(context, canvas, shapes);
}

splash.dark = function (isDark) {
  shapes.forEach(function (_shape) {
    _shape.toggleColorMode(isDark);
  });
};
