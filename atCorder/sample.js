function Main(input) {
  var input = input.split(" ");
  var maxNum = [];
  
  maxNum.push(parseInt(input[0]) + parseInt(input[1]));
  maxNum.push(parseInt(input[0]) - parseInt(input[1]));
  maxNum.push(parseInt(input[0]) * parseInt(input[1]));
  
  console.log(maxNum.reduce((a,b)=>a>b?a:b));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

