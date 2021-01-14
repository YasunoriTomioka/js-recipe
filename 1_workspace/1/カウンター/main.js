/*カウンター

const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

let count = 0
// ボタンをクリックしたときの処理を登録
plusButton.onclick = function(){
  // ここにクリック後の処理を書く
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function(){
  // ここにクリック後の処理を書く
  count -= 1
  // count を表示
  display.textContent = count
}

doubleButton.onclick = function(){
  // ここにクリック後の処理を書く
  count *= 2
  // count を表示
  display.textContent = count
}
*/


// 電卓

const display = document.getElementById("display-cal")
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const equalButton = document.getElementById("equal")
const acButton = document.getElementById("AC")

let num = ""


oneButton.onclick = function(){
  // ここにクリック後の処理を書く
  num += "1"  

  display.textContent = num
}
twoButton.onclick = function(){
  // ここにクリック後の処理を書く
  num += "2"  
  display.textContent = num
}

threeButton.onclick = function(){
  // ここにクリック後の処理を書く
  num += "3"  
  display.textContent = num
  
}
plusButton.onclick = function(){
  // ここにクリック後の処理を書く
if(num.indexOf("+") === -1|| num.indexOf("-") === -1|| num.indexOf("*") === -1|| num.indexOf("/")=== -1){
  if(num != "0"){  //演算子入力の前に何かしらの数字が入力されていた場合
    if(num.slice(-1) ==="+" || num.slice(-1)==="-" || num.slice(-1)==="*" || num.slice(-1)==="/"){
      
      num =num.slice(0,-1)
      num += "+"
      }else{
        num += "+"

      }
  }else{
    num= ""
  }
}else{
  //イコールにしたい
  console.log("!")
  const calc = new Function(
    'return ' + num
  );
  num = calc();
}
  
  display.textContent = num
}
minusButton.onclick = function(){
  
  // ここにクリック後の処理を書く
if(num.indexOf("+") === -1|| num.indexOf("-") === -1|| num.indexOf("*") === -1|| num.indexOf("/")=== -1){
  if(num != "0"){  //演算子入力の前に何かしらの数字が入力されていた場合
    if(num.slice(-1) ==="+" || num.slice(-1)==="-" || num.slice(-1)==="*" || num.slice(-1)==="/"){
      
      num =num.slice(0,-1)
      num += "-"
      }else{
        num += "-"
    
      }
  }else{
    num= ""
  }
}else{
  //イコールの役割をしたい
  const calc = new Function(
    'return ' + num
  );
  num = calc();
}
  
  display.textContent = num
  
}
equalButton.onclick = function(){
  const calc = new Function(
    'return ' + num
  );
  num = calc();
  display.textContent = num
  
}


acButton.onclick = function(){
  // ここにクリック後の処理を書く
  num = ""
  display.textContent = "0"
}


