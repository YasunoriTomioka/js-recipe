const inputField = document.getElementById("input")
const addButton = document.getElementById("addButton")
const memoList = document.getElementById("memo")


let list = []

addButton.onclick = function(){
  const inputText = inputField.value
  //配列に追加
  list.push(inputText)

  //list を JSON化する
  const listMemo = JSON.stringify(list)

  localStorage.memo = listMemo

  const A_memo = document.createElement("p")


  A_memo.textContent = inputText
  memoList.append(A_memo)
  inputField.value = ""
 
}

//ローカルストレージの内容を取り出す
// 注意！ localStarage.list が存在しない場合もある
console.log(localStorage.memo)

if(localStorage.memo === undefined){
  // localStarage に何かしらの値が保存されている場合
  console.log("なにもないよーん")
}else{
  //localStarage に何かしらの値が保存されている場合
  
  //localStorage からJSONデータを取り出す
  const listJson = localStorage.memo

  //取り出した list を配列に複合する
  list = JSON.parse(listJson)
  
  //list の内容をひとつづつ display に表示する
  for(var i=1; i<=list.length; i++){
    const memo_b = document.createElement("p")
    memo_b.textContent = list[i-1]
    memoList.append(memo_b)
  }
}

if(localStorage.inputText){
  inputField.value = localStorage.inputText
}


// inputFieldに何かの変化が
inputField.oninput = function(){
  localStorage.inputText = inputField.value
}



function toMorseCode(num){
  
  let sen = num.replaceAll("0","・").replaceAll("1","-")
  return sen
}

console.log(toMorseCode("0101101"))


function addAllNumbers(question){
  // 引数の中に含まれている数字のみを抽出
  let num = question.replaceAll(/[^0-9]/g, '')//正規表現
  let res=0
  // その中の数字をひとつづつ取り出して足しあわせていく

  for(var i=1; i<=num.length; i++){
      let j = Number(num.charAt(i-1))
      res += j
      console.log(res)
  }
  
  return res
}

console.log(addAllNumbers("1-2-3"))
