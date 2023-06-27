/* game make*/
import { DrawableSquare } from "=/retroGameEngine/drawable/drawable";
import Vector from "=/retroGameEngine/vector/vector";

let square: DrawableSquare
let square2: DrawableSquare

export function initialConfig(context: CanvasRenderingContext2D): void{
  square = new DrawableSquare(context, 200, 200, 100, 100, '#000000')
  square2 = new DrawableSquare(context, 100, 100, 20, 20, '#4287f5')
}

let a: number = 1
let speed: Vector = new Vector(1, 0)

export function gameLoop(delta: number): void{
  square.position = square.position.add(speed)
  square2.position = square2.position.add(speed)
  square.render()
  square2.render()

  if(square.position.x > 400){
    square.position.x = 0
    square2.position.x = 0
  }
}

export function eventsConnection(): void{
  
}
