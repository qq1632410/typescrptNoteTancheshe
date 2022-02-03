import Food from "./Food"
import ScorePanel from "./ScorePanel"
import Snake from './Snake'
class GameControl{
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction: string = ''
  isLive:boolean = true
  constructor(){
    this.snake = new Snake()
    this.scorePanel = new ScorePanel()
    this.food = new Food()
    this.init()
  }

  init(){
    document.addEventListener('keydown',this.keydownHandler.bind(this))
    this.run()
  }
  keydownHandler(e:KeyboardEvent){
    // this.direction = e.key
    switch(e.key){
      case 'n':
        this.isLive = false
        this.reStart()
        break;
        case 'c':
          this.isLive = !this.isLive
          if(this.isLive){
            this.run()
          }
          break
          default:
            this.direction = e.key
    }
    // console.log(this.)
    // this.run()
  }
  run(){
    let x = this.snake.X
    let y = this.snake.Y
    // console.log(this.direction)
    switch(this.direction){
      case 'ArrowUp':
        y -= 10
        break;
        case 'ArrowDown':
          y += 10
          break;
          case 'ArrowLeft':
            x -= 10
            break;
            case 'ArrowRight':
              x += 10
              break;
    }
    if(this.isLive){
      this.checkEat(x,y)
      try{
        this.snake.X = x
        this.snake.Y = y
      }catch(e){
        alert(e)
        this.isLive = false
      }
        this.isLive&&setTimeout(()=>{
          this.run()
        },300- (this.scorePanel.level-1)*30)
    }
  }
  checkEat(x:number,y:number){
   if( x===this.food.X && y === this.food.Y){
    this.food.change()
    this.scorePanel.addScore()
    this.snake.addBody()
   }
  }
  reStart(){
    this.isLive = true
    this.direction = ''
    this.snake.reStart()
    this.food.change()
    this.scorePanel.reStart()
  }
}

export default GameControl