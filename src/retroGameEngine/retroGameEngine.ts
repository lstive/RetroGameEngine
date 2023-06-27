/* engine config */
import { initialConfig, gameLoop, eventsConnection } from '=/main'

// globals
const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('retroGameEngine')
const context: CanvasRenderingContext2D = canvas.getContext('2d')
let oldTime: number = 0
let delta: number = 0

// config
initialConfig(context)
eventsConnection()

// start
function start(newTime: number): void{
  context.fillStyle = '#292929'
  context.fillRect(0, 0, canvas.width, canvas.height)
  delta = newTime - oldTime
  gameLoop(delta)
  oldTime = newTime
  requestAnimationFrame(time => start(time))
}
requestAnimationFrame(start)
