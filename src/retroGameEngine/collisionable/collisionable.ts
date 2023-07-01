export default interface ICollisionable extends ICollider{
  colliders: Array<ICollider>
  canCollideWith(collisioner: ICollider): void
  collisions(): Array<ICollider>
}

export interface ICollider{}
