// 프로그래밍으로 트리 만들기

const level = 5;

for (let i = 1; i <= level; i++) {
  let tree = "";
  // 공백증가포문
  for (let k = 1; k <= level - i; k++) {
    tree = tree + " ";
  }

  // 별증가포문
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree = tree + "*";
  }
  console.log(tree);
}

/* 

출력
    *
   ***
  *****
 *******
********* 

*/
