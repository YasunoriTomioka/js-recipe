const imageElement = document.getElementById("dog-image")
const changeButton = document.getElementById("change-image")


/* DogAPIを叩こうの回

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random") //fetchでデータの取得
  .then((res) => {
    return res.json() // 結果を json として読み込んで,次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
    console.log(data.message)
  })

*/

/*TheCatAPIを叩きます

//指定したサーバーにデータを取りに行く
fetch("https://api.thecatapi.com/v1/images/search") //fetchでデータを取得する
  .then((res) =>{
    return res.json() //jsonを読み込み
  })
  .then((data) =>{
    imageElement.src = data[0].url //htmlに写す
    
  })

*/

/*ボタン切り替えについて

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) =>{
      return res.json() //jsonを読み込み
    })
    .then((data) =>{
      imageElement.src = data.drinks[0].strDrinkThumb //htmlに写す
      
    }) //fetchでデータを取得する

//ボタンで画像を切り替える
changeButton.onclick = function(){
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) =>{
      return res.json() //jsonを読み込み
    })
    .then((data) =>{
      imageElement.src = data.drinks[0].strDrinkThumb //htmlに写す
      
    }) //fetchでデータを取得する
}

*/
