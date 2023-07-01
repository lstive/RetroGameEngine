/* game make*/
import { DrawableSquare } from "=/retroGameEngine/drawable/drawable";
import Vector from "=/retroGameEngine/vector/vector";
import Player from '=/game/player'
import Block from '=/game/block'

let square: DrawableSquare
let otherSquare: DrawableSquare
let player: Player
let block: Block

let speed: Vector
let rad: number
let isKey: boolean
let key: string
let magSpeed: number

// in a game engine the changes will be in the next frame rendered
export function initialConfig(context: CanvasRenderingContext2D): void{
  rad = 0
  magSpeed = 0
  speed = new Vector(1, -1)

  // new method
  block = new Block(context, 200, 200, 100, 100, '#f0bd30')
  player = new Player(context, 20, 20, 20, 20, '#FFFFFF')

  // connect collision
  player.canCollideWith(block)
}

let collisions = 2

export function gameLoop(delta: number): void{
  block.render()
  player.render(speed.angle)

  // on collision
  if(player.collisions()){
    block.color = '#f03a30'
  }else{
    block.color = '#f0bd30'
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



class Dog{
  
}

class PugDog extends Dog{}

let doggie = new PugDog()
console.log(doggie instanceof PugDog)
