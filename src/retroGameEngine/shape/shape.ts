import Vector from '=/retroGameEngine/vector/vector'

export default abstract class Shape{
  public position: Vector

  constructor(position: Vector){
    this.position = position
  }
}

export class ShapeSquare extends Shape{
  public width: number
  public height: number

  constructor(position: Vector, width: number, height: number){
    super(position)
    this.width = width
    this.height = height
  }
}

export class ShapeCircle extends Shape{}
