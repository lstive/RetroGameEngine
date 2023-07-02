/* game make*/
import { DrawableColliderSquare, DrawableSquare } from "=/retroGameEngine/drawable/drawable";
import Vector, { UVector } from "=/retroGameEngine/vector/vector";
import { ColliderSquare } from '=/retroGameEngine/collisionable/collisionable'
import { DrawableCollisionableSquare } from '=/retroGameEngine/drawable/drawable'


// collisionable elements
let wallTop: DrawableColliderSquare
let wallRight: DrawableColliderSquare
let wallBottom: DrawableColliderSquare
let wallLeft: DrawableColliderSquare

let ball: DrawableCollisionableSquare
let player: DrawableCollisionableSquare

// ball physics
let uSpeed: UVector
let speed: Vector
let uSpeedPlayer: UVector
let speedPlayer: Vector

// keys
let isKey: boolean
let key: string

// pause game
let paused: boolean
const pauseButton: HTMLElement = document.getElementById('pause-button')

pauseButton.addEventListener('click', () => {
  if(paused){
    paused = false
  }else{
    paused = true
  }
})

export function initialConfig(context: CanvasRenderingContext2D): void{
  isKey = false
  key = ''
  
  // instance collisionable elements
  wallTop = new DrawableColliderSquare(context, new Vector(400, 25), 800, 50, 'silver')
  wallLeft = new DrawableColliderSquare(context, new Vector(25, 300), 50, 600, 'silver')
  wallBottom = new DrawableColliderSquare(context, new Vector(400, 575), 800, 50, 'silver')
  wallRight = new DrawableColliderSquare(context, new Vector(775, 300), 50, 600, 'silver')

  ball = new DrawableCollisionableSquare(context, new Vector(400, 300), 20, 20, 'red')
  player = new DrawableCollisionableSquare(context, new Vector(400, 450), 100, 20, 'skyblue')
  
  // instance ball physics
  uSpeed = new UVector(0, 0)
  uSpeed.rotate(-Math.PI / 4)
  speed = new Vector(uSpeed.x * 6, uSpeed.y * 6)
  speedPlayer = new Vector(0, 0)

  // collision connection, read it as, the ball can collide with the top wall
  ball.canCollideWith(wallTop)
  ball.canCollideWith(wallRight)
  ball.canCollideWith(wallBottom)
  ball.canCollideWith(wallLeft)

  // as you see the collisionables can collide too
  player.canCollideWith(ball)
}

export function gameLoop(delta: number): void{
  // render elements
  wallTop.render()
  wallLeft.render()
  wallBottom.render()
  wallRight.render()

  ball.render()
  player.render()

  

  // collisions handling
  if(ball.collisions()){
    ball.collisions().forEach(collision => {
      if(collision == wallTop){
        speed.y *= -1
      }

      if(collision == wallLeft || collision == wallRight){
        speed.x *= -1
      }

      if(collision == wallBottom){
        console.log('has perdido')
        ball.position.x = 400
        ball.position.y = 300

        player.position.x = 400
        player.position.y = 475
        uSpeed.rotate(-Math.PI / 4)
        speed.x = uSpeed.x * 4
        speed.y = uSpeed.y * 4
      }
    })
  }

  if(player.collisions()){
    player.collisions().forEach(collision => {
      speed.y *= -1
    })
    player.width -= 10
  }

  if (!paused) {
    // ball movement
    ball.position = ball.position.add(speed)

    // keys handling
    if (isKey) {
      if (key == 'a') {
        speedPlayer.x = -4
        player.position = player.position.add(speedPlayer)
      }

      if (key == 'd') {
        speedPlayer.x = 4
        player.position = player.position.add(speedPlayer)
      }
    }
  }
  
}

export function eventsConnection(): void{
  window.addEventListener('keydown', event => {
    isKey = true
    
    if(event.key == 'a'){
      key = 'a'
    }

    if(event.key == 'd'){
      key = 'd'
    }
  })

  window.addEventListener('keyup', () => {
    isKey = false
    key = ''
  })
}

// // player
// let player: DrawableCollisionableSquare
// let angle: number
// let uSpeed: UVector
// let speed: Vector

// // event movement
// let isKey: boolean
// let key: string

// export function initialConfig(context: CanvasRenderingContext2D): void{
//   isKey = false
//   key = ''
//   angle = Math.PI / 3
//   player = new DrawableCollisionableSquare(context, new Vector(100, 100), 40, 40, 'red')
//   uSpeed = new UVector(0, 0)
//   uSpeed.rotate(angle)
//   speed = new Vector(uSpeed.x * 4, uSpeed.y * 4)
//   console.log(uSpeed.angle * 180 / Math.PI)
// }

// export function gameLoop(delta: number): void{
//   player.render(uSpeed.angle)
  
//   if(isKey){
//     if(key == 'd'){
//       angle += 0.1
//       uSpeed.rotate(angle)
//       console.log('ga')
//     }

//     if(key == 'a'){
//       angle -= 0.1
//       uSpeed.rotate(angle)
//     }

//     if(key == 'w'){
//       speed = new Vector(uSpeed.x * 4, uSpeed.y * 4)
//       player.position = player.position.add(speed)
//     }

//     if(key == ''){
//       speed = new Vector(0, 0)
//       speed.angle = uSpeed.angle
//     }
//   }
// }

// export function eventsConnection(): void {
//   window.addEventListener('keydown', event => {
//     if(event.key == 'd'){
//       key = 'd'
//     }

//     if(event.key == 'a'){
//       key = 'a'
//     }

//     if(event.key == 'w'){
//       key = 'w'
//     }

//     isKey = true
//   })

//   window.addEventListener('keyup', () => {
//     isKey = false
//     key = ''
//   })
// }
