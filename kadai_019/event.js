// btnボタンのid属性の値を取得し、定数に代入する
const btn = document.getElementById('btn');

// h2のtextのid属性の値を取得し、定数に代入する
const text = document.getElementById('text');

// btnボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました'
});