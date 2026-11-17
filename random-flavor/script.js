//html要素の読み込み
//constは定数を定義するという意味。
const startBtn =document.querySelector(`#startBtn`)
const icecream =document.querySelector(`#icecream`)

//初期値の色を適用
icecream.setAttribute('fill', '#B9CCDD');

//ランダムな色を生成する関数を作る
//functionとは、今から関数を作るよという宣言。この宣言単独では動かずreturnで作った数を返すことで動く。
//math.randomで1未満の数を生成、*256で掛け算をする、math.floorで小数点以下を切り捨て。これによりランダムな0~255の数を生成できる。
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    return `rgb(${r}, ${g}, ${b})`;
  }

//ボタンを押すとランダムな色を生成する関数が計算される
startBtn.addEventListener('click', () => {
  icecream.setAttribute('fill', randomColor());
});