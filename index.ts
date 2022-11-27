// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

///////////////////
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

interface Vector {
  distance(): number;
}

class Line implements Vector {
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
      s(this.ending.x - this.starting.x) + s(this.ending.y - this.starting.y)
    );
  }
}

class Line3D implements Vector {
  public readonly starting: Point3D;
  public readonly ending: Point3D;

  constructor(starting, ending) {
    this.starting = starting;
    this.ending = ending;
  }

  public distance(): number {
    const r = Math.sqrt;
    const s = Math.sqrt;
    return r(
      s(this.ending.x - this.starting.x) +
        s(this.ending.y - this.starting.y) +
        s(this.ending.z - this.starting.z)
    );
  }
}

///////// Execute Zone
const startingPoint = new Point(1, 1);
const startingPointInSpace = new Point3D(1, 1, 1);

console.log(startingPoint.toString());
console.log(startingPointInSpace.toString());

const line = new Line(new Point(0, 0), new Point(64, 64));
console.log(line.distance());

const line3d = new Line(new Point3D(0, 0, 0), new Point3D(2, 2, 4));
console.log(line3d.distance());
