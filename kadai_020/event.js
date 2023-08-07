// btnボタンのid要素の値を取得し、定数に代入する
const btn = document.getElementById('btn');

// h2のtextのid要素の値を取得し、定数に代入する
const text = document.getElementById('text');

// ボタンがクリックされたら、2秒後に文章を置き換える処理
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});