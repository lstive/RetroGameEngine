import Vector from '=/retroGameEngine/vector/vector'
import { ShapeSquare } from '=/retroGameEngine/shape/shape'
import { ColliderSquare, CollisionableSquare } from '=/retroGameEngine/collisionable/collisionable'

// redefinition
export default interface Drawable{
  context: CanvasRenderingContext2D
  color: string
  render(): void
}

// export default abstract class Drawable{
//   public context: CanvasRenderingContext2D
//   public position: Vector
//   public color: string
//   public abstract render(): void

//   constructor(context: CanvasRenderingContext2D, position: Vector, color: string){
//     this.context = context
//     this.position = position
//     this.color = color
//   }
// }

// export class DrawableCircle implements Drawable{
//   public render(){}
// }

export class DrawableSquare extends ShapeSquare implements Drawable{
  public context: CanvasRenderingContext2D
  public color: string
  
  constructor(context: CanvasRenderingContext2D, position: Vector, width: number, height: number, color: string){
    super(position, width, height)
    this.context = context
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
  }

  public rotate(radians: number): void{
    
  }
}

export class DrawableColliderSquare extends ColliderSquare implements Drawable{
  public context: CanvasRenderingContext2D
  public color: string

  constructor(context: CanvasRenderingContext2D, position: Vector, width: number, height: number, color: string){
    super(position, width, height)
    this.context = context
    this.color = color
  }

  public render(radians: number = 0): void{
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(radians)
    this.context.fillStyle = this.color
    this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
    this.context.restore()
  }

  public rotate(radians: number): void{
    
  }
}

export class DrawableCollisionableSquare extends CollisionableSquare implements Drawable{
  public context: CanvasRenderingContext2D
  public color: string

  constructor(context: CanvasRenderingContext2D, position: Vector, width: number, height: number, color: string){
    super(position, width, height)
    this.context = context
    this.color = color
  }

  public render(radians: number = 0): void{
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(radians)
    this.context.fillStyle = this.color
    this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
    this.context.restore()
  }

  public rotate(radians: number): void{
    
  }
}

