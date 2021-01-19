const inputElement = document.getElementById("input-todo")
const inputElement2 = document.getElementById("input-todo-2")
const inputElement3 = document.getElementById("input-todo-3")

const container = document.getElementById("cards-container")
const container2 = document.getElementById("cards-container-2")
const container3 = document.getElementById("cards-container-3")

const addButton = document.getElementById("add-button")
//const addButton2 = document.getElementById("add-button-2")
//const addButton3 = document.getElementById("add-button-3")

// addEventListener : jsからいろいろなイベント処理を実行できる便利なやつ
//今回はキーボードの入力をとります
inputElement.addEventListener('keypress', decide)
inputElement2.addEventListener('keypress', decide)
inputElement3.addEventListener('keypress', decide)


//発展 エンターキー
function decide(e){
  //エンターキーを押したらする処理を書いていく（inputが空の場合は入力しない）

  //一番左の列
  if(e.keyCode === 13 && inputElement.value!=''){
  const card = createCard(inputElement.value)

  container.append(card)

  //入力欄を空にする
  inputElement.value = ''
  }

  //左から二番目
  if(e.keyCode === 13 && inputElement2.value!=''){
    const card = createCard(inputElement2.value)
    
    container2.append(card)
    //入力欄を空にする
    inputElement2.value = ''
  }
  
  //左から三番目
  if(e.keyCode === 13 && inputElement3.value!=''){
  const card = createCard(inputElement3.value)
  container3.append(card)

  //入力欄を空にする
  inputElement3.value = ''
  }

  return false
}


//追加ボタンを押した時の処理
addButton.onclick = function(){
  //カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  //入力欄を空にする
  inputElement.value = ''
}


//共通の処理:テキストからカードを作成する
const createCard = function(text){
  //カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  //テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  //削除ボタンを押した時の処理を実装
  deleteButton.onclick = function(){
    //カードを削除
    card.remove()
  }

  card.append(deleteButton)

  return card

}
