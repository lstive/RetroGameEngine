/* game make*/
import { DrawableColliderSquare, DrawableSquare } from "=/retroGameEngine/drawable/drawable";
import Vector from "=/retroGameEngine/vector/vector";
import { ColliderSquare } from '=/retroGameEngine/collisionable/collisionable'
import { DrawableCollisionableSquare } from '=/retroGameEngine/drawable/drawable'

let player: DrawableCollisionableSquare
let block: DrawableColliderSquare
let block1: DrawableColliderSquare

let speed: Vector
let acceleration: Vector
let rad: number
let isKey: boolean
let key: string
let magSpeed: number

// in a game engine the changes will be in the next frame rendered
export function initialConfig(context: CanvasRenderingContext2D): void{
  rad = 0
  magSpeed = 0
  speed = new Vector(1, -1)
  acceleration = new Vector(1, -1)

  // new method
  block = new DrawableColliderSquare(context, new Vector(200, 200), 100, 100, '#f0bd30')
  block1 = new DrawableColliderSquare(context, new Vector(100, 100), 20, 120, 'skyblue')
  player = new DrawableCollisionableSquare(context, new Vector(20, 20), 20, 20, '#FFFFFF')
  player.canCollideWith(block)
  player.canCollideWith(block1)
}

let collisions = 2

export function gameLoop(delta: number): void{
  block.render()
  block1.render()
  player.render(speed.angle)

  // on collision
  if(player.collisions()){
    player.collisions().forEach(collision => {
      if(collision === block){
        block.color = '#f03a30'
      }

      if(collision === block1){
        block1.color = '#f03a30'
      }      
    })
  }else{
    block.color = '#f0bd30'
    block1.color = '#f0bd30'
  }

  if(player.position.x > 400){
    player.position.x = 0
  }else if(player.position.x < 0){
    player.position.x = 400
  }else if(player.position.y < 0){
    player.position.y = 400
  }else if(player.position.y > 400){
    player.position.y = 0
  }

  if(isKey){
    if(key == 'a'){
      speed.rotate(speed.angle - 0.1)
      player.rotate(2)
    }

    if(key == 'd'){
      rad += 0.01
      speed.rotate(speed.angle + 0.1)
    }
  }

  //speed = speed.add(acceleration)
  player.position = player.position.add(speed)
}

export function eventsConnection(): void {
  document.addEventListener('keypress', event => {
    if(event.key == 'w'){
      isKey = true
      magSpeed += 0.1
    }else if(event.key == 'a'){
      
      isKey = true
      key = 'a'
    }else if(event.key == 'd'){
      
      isKey = true
      key = 'd'
    }
  }, true)

  document.addEventListener('keyup', event => {
    isKey = false
    key = null
  })
}
