const selectBar = document.getElementById("dogs") //ここで選択肢の部分を取得
const URL1 = document.getElementById("url−1")
const URL2 = document.getElementById("url−2")
const Button = document.getElementById("button")
const dogImage = document.getElementById("dog-image")

console.log(URL1.textContent)


//プルダウン式の選択肢を作成
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) =>{
    return res.json()
  })
  .then((data) =>{
  
    for(var i=1; i<=Object.keys(data.message).length; i++){
      const obj = Object.keys(data.message)  //messageの中にあるキーを配列に格納
      const choice = document.createElement("option") //選択肢を生成
      choice.textContent = obj[i-1] //選択肢のテキストを代入
      choice.className = "option"
      selectBar.append(choice) //HTMLに返す
    }
    
  })

//プルダウンの選択肢を配列に格納＆＆画像を表示
const choices = selectBar.options 
var selectedText = ""

//プルダウンで選択された文字列取得関数
Button.onclick =function(){
  for(var i=1; i<=choices.length; i++){
    if(choices[i-1].selected ) {
      // 選択状態である
      selectedText = choices[i-1].textContent 
    }
  }

  const URL = URL1.textContent + selectedText + URL2.textContent

  //画像を表示
  fetch(URL)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      
      dogImage.src = data.message
      
    })
}

