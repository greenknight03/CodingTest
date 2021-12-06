// 객체의 키 이름 중복
var d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1
};

console.log(d["weight"]);

// 정답 84
// 동일한 키값에는 마지막 출력값이 적용됨
