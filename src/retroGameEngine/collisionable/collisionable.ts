import { ShapeSquare, ShapeCircle } from '=/retroGameEngine/shape/shape'
import Vector from '=/retroGameEngine/vector/vector'

export interface ICollider{}

export default interface ICollisionable extends ICollider{
  colliders: Array<ICollider>
  canCollideWith(collisioner: ICollider): void
  collisions(): Array<ICollider>
}

// el render usa el shape para posicionar objetos y luego para renderizarlos
// asi el render no tiene que detectar las colisiones solo dibujar
// el colisionable debe detectar como colisiona
export class CollisionableSquare extends ShapeSquare implements ICollisionable{
  public colliders: Array<ICollider>

  constructor(position: Vector, width: number, height: number){
    super(position, width, height)
    this.colliders = new Array<ICollider>()
  }

  // modificar para que los colisionadores sean ajenos asi otros pueden tener
  // la misma referencia de colision y no cada colisionable
  public canCollideWith(collisioner: ICollider): void{
    this.colliders.push(collisioner)
  }

  public collisions(): Array<ICollider>{
    let collisions: Array<ICollider> = new Array<ICollider>()

    // detect collision if collision exist return objects that collided
    for(let collider of this.colliders){
      if(collider instanceof ShapeSquare){
        if(this.position.x - this.width / 2 < collider.position.x + collider.width - collider.width / 2 && collider.position.x - collider.width / 2 < this.position.x + this.width - this.width / 2 && this.position.y - this.width / 2 < collider.position.y + collider.width - collider.width / 2 && collider.position.y - collider.width / 2 < this.position.y + this.width - this.width / 2){
          collisions.push(collider)
        }
      }
    }

    return (collisions.length > 0)? collisions : null
  }
}

export class ColliderSquare extends ShapeSquare implements ICollider{}
export class ColliderCircle extends ShapeCircle implements ICollider{}
