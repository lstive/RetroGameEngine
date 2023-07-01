import { DrawableSquare } from '=/retroGameEngine/drawable/drawable'
import { ICollider } from '=/retroGameEngine/collisionable/collisionable'

export default class Block extends DrawableSquare implements ICollider{
  constructor(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string){
    super(context, x, y, width, height, color)
  }
}
