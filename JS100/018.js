//  세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램

const scores = prompt("세 과목의 점수를 입력하세요.").split(" ");
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i], 10);
  /* 십진수 형태의 숫자로 데이터 타입 변환  */
}

console.log(Math.floor(sum / 3));
/* Math.floor 메서드는 소수점 자리를 모두 버림 */

// 입력 : 20 30 40
// 출력 : 30
