// 학생의 이름이 key이고 value가 수학 점수인 객체를 출력하기

const keys = prompt().split(" "); //입력할 문자열을 배열로 반환하는 코드
const values = prompt().split(" ");
// key & value값 초기화
let obj = {}; // 위의 두 변수들이 들어갈 객체 생성

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

console.log(obj);
