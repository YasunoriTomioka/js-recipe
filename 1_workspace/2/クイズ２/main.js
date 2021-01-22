/* ----------自作４択クイズ----------

const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")

----------自作４択クイズ---------- */

const choicesContainer = document.getElementById("choices-container")

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")

const feedback = document.getElementById("feedback")



//クイズの内容についてのオブジェクト
const quiz = {
  question: "これに勝て！",
  img: "Two.jpeg",

  choices:[
    {
      text: "グー",
      feedback: "勝ち！",
    },
    {
      text: "チョキ",
      feedback: "あいこ・・・",
    },
    {
      text: "パー",
      feedback: "まけ。。。",
    },
  ]
}

// 問題文や選択肢などクイズで必要なものすべてリロードするための関数
const reload = function(){
  //問題文
  quizText.textContent = quiz.question
  //問題画像
  quizImage.src = "./Images/" + quiz.img

  // for文 をつかい quiz オブジェクトの中にある choices の要素数分ボタンを生成する
  for(var i = 1; i<=quiz.choices.length; i++){
  const choiceButton = document.createElement("button")
  choiceButton.id = "choice-" + i
  choiceButton.className = "choiceButton"
  choiceButton.textContent = quiz.choices[i-1].text
  choicesContainer.append(choiceButton)
  }
  
}
//クイズをリロードすることを実行
reload()

var buttons =[]

//配列にボタンをそれぞれ格納する
for(var i = 1; i<=quiz.choices.length; i++){
  const button = document.getElementById("choice-" + i)
  buttons.push(button)
}

//生成したボタンが読み込む関数をどうやって付与したあげればいいんでしょうか？？




/* ----------自作４択クイズ----------
//quiz の内容についてのオブジェクト
const quiz = {
  question: "これに勝て！",
  img: "Two.jpeg",

  choices:[
    {
      text: "グー",
      feedback: "勝ち！",
    },
    {
      text: "チョキ",
      feedback: "あいこ・・・",
    },
    {
      text: "パー",
      feedback: "まけ。。。",
    },
    {
      text: "逃げる",
      feedback: "無理です",
    }
  ]
}

//問題についてロードする関数
const reload = function(){
  //問題文
  quizText.textContent = quiz.question
  //問題画像
  quizImage.src = "./Images/" + quiz.img

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

//選択肢のボタンを押したときに呼ぶ関数
const choose = function(choiceNum){
  feedback.textContent = quiz.choices[choiceNum].feedback
}

choice1.onclick = function(){
  //ボタン1 を押したとき
  choose(0)
}
choice2.onclick = function(){
  //ボタン2 を押したとき
  choose(1)
}
choice3.onclick = function(){
  //ボタン3 を押したとき
  choose(2)
}
choice4.onclick = function(){
  //ボタン3 を押したとき
  choose(3)
}

//問題文を最初に読み込む
reload()

----------自作４択クイズ---------- */