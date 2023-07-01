import Vector from '=/retroGameEngine/vector/vector'

export default abstract class Drawable{
  public context: CanvasRenderingContext2D
  public position: Vector
  public color: string
  public abstract render(): void

  constructor(context: CanvasRenderingContext2D, position: Vector, color: string){
    this.context = context
    this.position = position
    this.color = color
  }
}

export class DrawableCircle extends Drawable{
  public render(){}
}

export class DrawableSquare extends Drawable {
  public width: number
  public height: number
  
  constructor(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string){
    super(context, new Vector(x, y), color)
    this.width = width
    this.height = height
  }
  
  public render(radians: number = 0): void{
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(radians)
    this.context.fillStyle = this.color
    this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
    this.context.restore()


    
    // this.context.save()
    // this.context.translate(this.position.x - this.width / 2, this.position.y - this.height / 2)
    // this.context.rotate(radians)
    // this.context.fillStyle = this.color
    // this.context.fillRect(0, 0, this.width, this.height)
    // this.context.restore()
  }

  public rotate(radians: number): void{
    
  }
}
