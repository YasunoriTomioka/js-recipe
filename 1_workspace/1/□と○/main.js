const figure = document.getElementById("figure")

/* -----  toggle使うやつ
 
figure.onclick = function (){
  figure.classList.toggle('rounded')
}
*/

/*----マウスオーバーをすると丸くなり、マウスを離すと尖る

figure.onmouseover = function(){
  figure.classList.add("rounded")
}

figure.onmouseleave = function(){
  figure.classList.remove("rounded")
}
*/


let clickCount

figure.onclick = function (){

  clickCount++

  if(clickCount===1){ 
    //丸にかえる
    figure.classList.remove("square")
    figure.classList.add("rounded")
   
  }else if(clickCount===2){
    //三角にかえる
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  }else{
    //四角にかえる
    figure.classList.remove("triangle")
    figure.classList.add("square")
    clickCount=0 //カウントを０に戻しループする
  }
 
}
