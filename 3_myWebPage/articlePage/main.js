/*
ざっくり開発手順
 ①入力された検索したいワードを取得 done
 ②noteなどのAPIを取得する
 ③APIに対してワードをいい感じに使って記事を取得
 ④一覧として表示する(きれいにグリッドみたいなかんじで出力したい）（切実）
 ⑤これは複数の記事媒体で行う
 ⑥これをランダムでやって毎日リマインドしてくれるアプリを作りたいなあ〜
 ⑦LINEbot連携説もある（webページではなくなってしまうが笑）
*/

const keyword = document.getElementById("inputField")
const searchButton = document.getElementById("serButton")

const debugText = document.getElementById("testText") //デバック用


searchButton.onclick = function(){
  debugText.textContent = keyword.value
  keyword.value = ""
}