/**
 * コンストラクタ関数からインスタンスを作成sるための演算子
 *
 * 1.コンストラクタ関数が戻り値がオブジェクトの場合、returnインスタンスのオブジェクト
 * 2.オブジェクト以外の処理はprototypeをコピー
 */

function F(a, b) {
  this.a = a;
  this.b = b;
  return 1;
}

const instance = new F(1, 2);
console.log(instance);
