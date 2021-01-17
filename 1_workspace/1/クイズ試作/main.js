const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")
const feedback = document.getElementById("display")



button1.onclick = function(){
  feedback.textContent = "もっとたかいよ！！"
  console.log("A")
}

button2.onclick = function(){
  feedback.textContent = "せいかい"
}

button3.onclick = function(){
  feedback.textContent = "もっとひくいわ！"
}


