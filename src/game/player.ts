import { DrawableSquare } from '=/retroGameEngine/drawable/drawable'
import { ICollider, ColliderSquare } from '=/retroGameEngine/collisionable/collisionable'
import ICollisionable from '=/retroGameEngine/collisionable/collisionable'
import { CollisionableSquare } from '=/retroGameEngine/collisionable/collisionable'

// player























// export default class Player extends DrawableSquare implements ICollisionable{
//   public colliders: Array<ICollider>
  
//   constructor(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string){
//     super(context, x, y, width, height, color)
//     this.colliders = new Array<ICollider>()
//   }

//   public canCollideWith(collisioner: ICollider): void{
//     this.colliders.push(collisioner)
//   }

//   public collisions(): Array<ICollider>{
//     let collisions: Array<ICollider> = new Array<ICollider>()

//     // detect collision if collision exist return objects that collided
//     for(let collider of this.colliders){
//       if(collider instanceof ColliderSquare){
//         if(this.position.x - this.width / 2 < collider.position.x + collider.width - collider.width / 2 && collider.position.x - collider.width / 2 < this.position.x + this.width - this.width / 2 && this.position.y - this.width / 2 < collider.position.y + collider.width - collider.width / 2 && collider.position.y - collider.width / 2 < this.position.y + this.width - this.width / 2){
//           collisions.push(collider)
//         }
//       }else if(collider instanceof DrawableCircle){
        
//       }
//     }

//     return (collisions.length > 0)? collisions : null
//   }
// }

// // cuando se usa upcasting con interfaces no se ocultan los parametros de la clase derivada.
