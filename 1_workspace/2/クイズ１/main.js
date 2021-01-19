const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")

/*--------------最初のクイズ--------------
choice1.onclick = function(){
  feedback.textContent = "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
}
choice2.onclick = function() {
  feedback.textContent = "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
}
choice3.onclick = function() {
  feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
}

--------------最初のクイズ--------------*/

/*--------------２つ目--------------

//正解を判定するための関数
const choose = function(choiceWord){
  if(choiceWord === "ゴリアテ"){
    feedback.textContent = "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
  }else if (choiceWord === "ゼニガメ"){
    feedback.textContent = "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
  }else if (choiceWord === "ガニメデ"){
    feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
  }
}

//ゴリアテを選択
choice1.onclick = function(){
  //ボタンのテキストをchooseの引数に入れる
  choose(choice1.textContent)
}
//ゼニガメを選択
choice2.onclick = function(){
  //ボタンのテキストをchooseの引数に入れる
  choose(choice2.textContent)
}
//ガニメデを選択
choice3.onclick = function(){
  //ボタンのテキストをchooseの引数に入れる
  choose(choice3.textContent)
}


--------------２つ目--------------*/

/*--------------3つ目--------------
// feedback の内容
const feedbacks = [
  "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
  "正解！ガニメデは、木星の第三惑星だよ！"
]

//正解を判定する
const choose = function(choiceNum){
  feedback.textContent = feedbacks[choiceNum]
}


choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}

--------------3つ目--------------*/

//--------------オブジェクト使用したくいず--------------

//クイズの内容
const quiz = {
  text: "この星の名前はなんでしょう？",
  image: "Ganymede.jpg",
  choices:[
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "ゴリアテ",
      feedback: "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    }
  ]
}

//quiz を画面に表示する関数

const reloadQuiz = function(){
  //問題文を表示
  quizText.textContent = "Q. " + quiz.text

  //画像を表示
  quizImage.src = "./Images/" + quiz.image

  //選択肢の文字を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

//choiceNum番目の選択肢を選択
const choose = function(choiceNum){
  //フィードバックを表示
  feedback.textContent = quiz.choices[choiceNum].feedback
}

choice1.onclick = function(){
  //0番目の選択肢を選択
  choose(0)
}
choice2.onclick = function(){
  //1番目の選択肢を選択
  choose(1)
}
choice3.onclick = function(){
  //2番目の選択肢を選択
  choose(2)
}

//reloadQuiz関数を読み込んでクイズ画面に表示にする
reloadQuiz()