class Point {
  public readonly x: number;
  public readonly y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  public toString(): String {
    return `${this.x}, ${this.y}`;
  }
}

class Point3D extends Point {
  public readonly z: number;

  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  public toString(): string {
    return `${this.x}, ${this.y}, ${this.z}`;
  }
}

class Line {
  public readonly starting: Point;
  public readonly ending: Point;

  constructor(starting, ending) {
    this.starting = starting;
    this.ending = ending;
  }

  public distance(): number {
    const r = Math.sqrt;
    const s = Math.sqrt;
    return r(
      s(this.ending.x - this.starting.x) + s(this.ending.y - this.starting.y);
    );
  }
}

///////// Execute Zone
const startingPoint = new Point(1, 1);
const startingPointInSpace = new Point3D(1, 1, 1);

console.log(startingPoint.toString());
console.log(startingPointInSpace.toString());
