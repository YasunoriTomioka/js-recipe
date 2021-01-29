const addButton = document.getElementById("decide")
const display = document.getElementById("display")
const inputField = document.getElementById("inputField")
const cola = document.getElementById("cola") 
const drinklist = document.getElementById("drinkList")
const resiveButton = document.getElementById("resive")
const switchButton = document.getElementById("light")
let totalAmount = 0 //合計金額の計算用の変数



//初期設定
cola.disabled = true
addButton.disabled = true
resiveButton.disabled = true


//追加ボタン
addButton.onclick = function(){

  totalAmount += Number(inputField.value)
  display.textContent = totalAmount

  hantei()
}

//返却ボタン
resiveButton.onclick = function(){
  const message = document.createElement("div")
  message.textContent = totalAmount + "円返却しました！！"
  drinklist.append(message)
  totalAmount = 0
  display.textContent = totalAmount

  cola.disabled = true
}

//コーラ買う
cola.onclick = function(){
  if(totalAmount>=150){
    //drinks.push["コーラ"]
    const drink = document.createElement("div")
    drink.textContent = "コーラ"
    totalAmount-=150
    display.textContent = totalAmount
    drinklist.append(drink)

    hantei()
    
  }
}

let switchState = true
//電源ボタン
switchButton.onclick = function(){
  if(switchState === true){
  addButton.disabled = false
  resiveButton.disabled = false
  switchState = false
  }else{
    addButton.disabled = true
  resiveButton.disabled = true
  switchState = true
  }

  
  
}

//ボタンが押せなくなる判定の関数
let hantei = function(){
  if(totalAmount<150){
    cola.disabled = true //ボタンが押せなくなる
  }else{
    cola.disabled = false //ボタンが押せるようになる
  }
}
