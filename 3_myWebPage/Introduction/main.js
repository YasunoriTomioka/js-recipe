var cook //cookieデータを格納する変数
var cStart //訪問回数部分を切取る為の位置を格納
var cEnd
var cnt //訪問回数を格納

const visitCount = document.getElementById("visitorCount") //visitor部分のHTML要素取得

//訪問回数について
function VisitCount() {
  //cookieが使えるか確認
  if (navigator.cookieEnabled) {
    cook = document.cookie + ";" //変数cookにcookieデータを入れる

    //変数cStartにカウントデータの最初の位置を入れる
    cStart = cook.indexOf("counts=", 0)

    //データの有無で分岐
    if (cStart == -1) {
      //データの無い場合は最初の訪問ということ
      visitCount.textContent = "Num of Visit : 1"

      //cookieに訪問回数=1を書き込む
      document.cookie = "counts=1;"
    } else {
      //カウントデータの最後の部分「;」の位置を取得
      cEnd = cook.indexOf(";", cStart)

      //数値の部分だけを切り取る
      cnt = cook.substring(cStart + 7, cEnd)

      //数値に変換できない例外が出た時の処理
      try {
        //取得した回数に+1して表示する
        cnt = parseInt(cnt) + 1
        visitCount.textContent = "Num of Visit : " + cnt

        //cookieに訪問回数を書き込む
        document.cookie = "counts=" + cnt + ";"
      } catch (e) {
        visitCount.textContent = "Num of Visit : NaN"
      }
    }
  } else {
    //cookieが使用できない時の処理
    visitCount.textContent = "Num of Visit : NaN"
  }
}
//カウントを始める
VisitCount()
