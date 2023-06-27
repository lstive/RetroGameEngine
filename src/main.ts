/* game make*/
import { DrawableSquare } from "=/retroGameEngine/drawable/drawable";
import Vector from "=/retroGameEngine/vector/vector";

let square: DrawableSquare
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
  square = new DrawableSquare(context, 200, 200, 20, 20, '#FFFFFF')
}

export function gameLoop(delta: number): void{

  square.render(speed.angle)

  if(square.position.x > 400){
    square.position.x = 0
  }else if(square.position.x < 0){
    square.position.x = 400
  }else if(square.position.y < 0){
    square.position.y = 400
  }else if(square.position.y > 400){
    square.position.y = 0
  }

  if(isKey){
    if(key == 'a'){
      speed.rotate(speed.angle - 0.1)
      square.rotate(2)
    }

    if(key == 'd'){
      rad += 0.01
      speed.rotate(speed.angle + 0.1)
    }
  }

  square.position = square.position.add(speed)
  
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
