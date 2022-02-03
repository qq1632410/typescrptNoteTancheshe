class Snake{
   head:HTMLElement
   body: HTMLCollection
   element: HTMLElement
   constructor(){
     this.element = document.getElementById('snake')!
     this.head = document.getElementById('head')!
     this.body = document.getElementById('snake')?.getElementsByTagName('div')!
   }
  //  获取蛇头坐标
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }

  set X(val:number){
    if(this.X === val){
      return;
    }
    if( val< 0 || val > 290 ){
      throw new Error('撞墙了')
    }
    if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === val){
      console.log("水平方向掉头")
      if(val > this.X){
        val = this.X -10
      }else{
        val = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = val+ 'px'
    this.checkHeadBody()
  }
  set Y(val:number){
    if(this.Y === val){
      return ;
    }
    if( val< 0 || val > 290 ){
      throw new Error('撞墙了')
    }
    if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === val){
      console.log("垂直方向掉头")
      if(val > this.Y){
        val = this.Y -10
      }else{
        val = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = val+ 'px'
    this.checkHeadBody()
  }
  addBody(){
    this.element.insertAdjacentHTML('beforeend','<div class="add"></div>')
  }
  moveBody():void{
    for(let i = this.body.length-1 ; i> 0;i--){
      let x = (this.body[i-1] as HTMLElement).offsetLeft
      let y = (this.body[i-1] as HTMLElement).offsetTop;
     (this.body[i] as HTMLElement).style.left = x + 'px';
     (this.body[i] as HTMLElement).style.top = y + 'px'
    }
  }
  checkHeadBody(){
    for(let i =1 ;i < this.body.length ;i++){
      let bd = this.body[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('撞到自己了')
      }
    }
  }
  reStart(){
    this.element.innerHTML = '<div id="head"></div>'
    this.head = document.getElementById('head')!
    setTimeout(()=>{
      this.head.style.top = 0+ 'px'
      this.head.style.left = 0+ 'px'
    },500)

    // this.body = document.getElementById('snake')?.getElementsByTagName('div')!
  }
}

export default Snake