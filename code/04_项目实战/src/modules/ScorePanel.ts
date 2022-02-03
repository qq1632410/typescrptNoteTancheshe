// 定义记分牌
class ScorePanel{
  score = 0
  level = 1
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel:number
  upscore: number
  constructor(maxLevel:number=10,upscore:number = 10){
    this.maxLevel = maxLevel 
    this.upscore = upscore
    this.scoreEle = document.getElementById('score')!
    this.levelEle  = document.getElementById('level')!
  }
  addScore(){
    this.scoreEle.innerHTML = ++this.score + ''
    if(this.score % this.upscore === 0){
      this.levelUp()
    }
  }
  levelUp(){
    if(this.level < this.maxLevel ){
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
  reStart(){
    this.score = 0
    this.level = 1
    this.scoreEle.innerHTML = 0 +''
    this.levelEle.innerHTML = 1 +''
  }
}

export default ScorePanel