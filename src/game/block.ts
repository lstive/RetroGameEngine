import { DrawableColliderSquare, DrawableSquare } from '=/retroGameEngine/drawable/drawable'
import { ICollider, ColliderSquare } from '=/retroGameEngine/collisionable/collisionable'
import Vector from '=/retroGameEngine/vector/vector'

export default class Block extends DrawableColliderSquare {
  constructor(context: CanvasRenderingContext2D, position: Vector, width: number, height: number, color: string){
    super(context, position, width, height, color)
  }
}
