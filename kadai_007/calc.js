// 変数numに1～100の範囲でランダムは整数を代入
num = 1 + Math.floor(Math.random() * 100);

// 変数numの値を出力 (確認用)
console.log(num);

//変数numが3の倍数かつ5の倍数であれば「3と5の倍数です」を出力
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
//変数numが3の倍数であれば「3の倍数です」を出力
} else if (num % 3 === 0) {
  console.log('3の倍数です');
//変数numが5の倍数であれば「5の倍数です」を出力
} else if (num % 5 === 0) {
  console.log('5の倍数です');
//それ以外のときは、変数numを出力
} else {
  console.log(num);
}