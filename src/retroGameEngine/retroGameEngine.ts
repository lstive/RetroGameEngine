/* engine config */
import { initialConfig, gameLoop, eventsConnection } from '=/main'

// globals
const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('retroGameEngine')
const context: CanvasRenderingContext2D = canvas.getContext('2d')
let oldTime: number = 0
let delta: number = 0

// config
initialConfig()
eventsConnection()

// start
function start(newTime: number): void{
  delta = newTime - oldTime
  gameLoop(delta, context)
  oldTime = newTime
  requestAnimationFrame(time => start(time))
}
requestAnimationFrame(start)
