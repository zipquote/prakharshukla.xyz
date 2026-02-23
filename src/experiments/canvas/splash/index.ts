interface IParticle {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  strokeStyle: string;
  dx: number;
  dy: number;
  strokeColor: string;
  toggleColorMode(isDark: boolean): void;
  draw(): void;
  move(canvas: HTMLCanvasElement): void;
}

const shapes: IParticle[] = [];
const colors: string[] = [
  'coral',
  'blueviolet',
  'teal',
  'gold',
  'purple',
  'cadetblue',
  'silver',
];

class Particles implements IParticle {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  strokeStyle: string;
  dx: number;
  dy: number;
  strokeColor: string;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.strokeStyle = 'black';
    this.dx = (Math.random() - 0.5) * 2;
    this.dy = (Math.random() - 0.5) * 2;
    this.strokeColor = colors[Math.floor(Math.random() * colors.length)];
  }

  toggleColorMode(isDark: boolean): void {
    if (isDark) {
      this.strokeStyle = this.strokeColor;
    } else {
      this.strokeStyle = 'gainsboro';
    }
  }

  draw(): void {
    // Implemented in subclasses
  }

  move(canvas: HTMLCanvasElement): void {
    // Implemented in subclasses
  }
}

class Circle extends Particles {
  radius: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    ctx: CanvasRenderingContext2D
  ) {
    super(x, y, ctx);
    this.radius = radius;
  }

  draw(): void {
    const _ctx = this.ctx;
    _ctx.beginPath();
    _ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    _ctx.strokeStyle = this.strokeStyle;
    _ctx.stroke();
  }

  move(canvas: HTMLCanvasElement): void {
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
  length: number;

  constructor(
    x: number,
    y: number,
    length: number,
    ctx: CanvasRenderingContext2D
  ) {
    super(x, y, ctx);
    this.length = length * 2;
  }

  draw(): void {
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

  move(canvas: HTMLCanvasElement): void {
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
  length: number;

  constructor(
    x: number,
    y: number,
    length: number,
    ctx: CanvasRenderingContext2D
  ) {
    super(x, y, ctx);
    this.length = length * 3;
  }

  draw(): void {
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

  move(canvas: HTMLCanvasElement): void {
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

function animate(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  shapes: IParticle[]
): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(function () {
    animate(ctx, canvas, shapes);
  });

  shapes.forEach(function (_shape: IParticle) {
    _shape.move(canvas);
  });
}

export default function splash(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
): void {
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

splash.dark = function (isDark: boolean): void {
  shapes.forEach(function (_shape: IParticle) {
    _shape.toggleColorMode(isDark);
  });
};
