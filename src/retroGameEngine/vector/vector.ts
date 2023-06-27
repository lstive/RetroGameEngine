export abstract class VectorBasic{
  x: number
  y: number
  magnitude: number
  angle: number

  constructor(x: number = 0, y: number = 0){
    this.x = x
    this.y = y
    this.magnitude = Math.sqrt(Math.pow(x , 2) + Math.pow(y, 2))
    this.angle = (x == 0 || y == 0)? 0 : Math.atan(y / x)
  }
}

export default class Vector extends VectorBasic{
  constructor(x: number = 0, y: number = 0){
    super(x, y)
  }

  public scale(): UVector{
    return new UVector(this.x, this.y)
  }

  public add(a: Vector, b: Vector = this): Vector{
    return new Vector(b.x + a.x, b.y + a.y)
  }

  public sub(a: Vector, b: Vector = this): Vector{
    return new Vector(b.x - a.x, b.y - a.y)
  }

  public rotate(radians: number): void{
    let temp: Vector = new Vector(Math.cos(radians) * this.magnitude, Math.sin(radians) * this.magnitude)
    this.x = temp.x
    this.y = temp.y
    this.angle = radians
  }
}

export class UVector extends VectorBasic{
  constructor(x: number = 0, y: number = 0){
    super(Math.sin(Math.atan(y / x)), Math.cos(Math.atan(y / x)))
  }

  public scale(magnitude: number): Vector{
    return new Vector(this.x * magnitude, this.y * magnitude)
  }
}
