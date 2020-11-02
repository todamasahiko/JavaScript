var x; //変数の宣言
x = 1; //変数の代入
x = 7;

var x = 7; //初期化(宣言と代入の同時化)
console.log(x); //コンソールで変数を表示

var x = 123 + 456;
var y = "123" + "456";
console.log(x);
console.log(y);

var x = 7;
x += 9;
console.log(x);

var x = 7;
x ++;
console.log(x); //インクリメント

var number = [7, 77, 777]; //配列の初期化
console.log(number.length); //要素数の取得
number[2] = 111; //要素の代入
number[3] = 1; //要素の追加
number[9] = 21; //要素は連番でなくて構わない
console.log(number[9]); //要素の参照

var number = []; //空の配列を作成
number[7] = 2; //あとから要素を追加しても構わない
number[3] = 123;
console.log(number[7]);

var number = [[1, 2, 3], [4, 5, 6]]; //二次元配列
console.log(number[0][0]); // 1
console.log(number[0][1]); // 2
console.log(number[0][2]); // 3
console.log(number[1][0]); // 4
console.log(number[1][1]); // 5
console.log(number[1][2]); // 6

var likes = {  //連想配列の初期化
	animal : "ねこ",
	drink : "炭酸水",
	sports : "野球",
	years : 77
};
console.log(likes.animal); //要素の参照
console.log(likes["drink"]); //この描き方もいける
var key = "sports"; //keyを用いて入れても構わない
console.log(likes[key]);
likes.country = "ドイツ"; //要素の追加
console.log(likes.country);
console.log(likes.years);