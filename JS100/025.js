// 원의 넓이를 구하는 코드를 작성
// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수

function circle(n) {
  const result = n * n * 3.14;

  return result;
}

const r = prompt("원의 반지름을 입력하세요.");

console.log(circle(r));

// 원의 넓이를 구하는 방식은 n * n * 3.14 = 반지름 * 반지름 * 3.14
