// 몇 번째 행성?

const planets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성"
];

const n = prompt("몇 번째 행성인가요?");

console.log(planets[n - 1]);

// prompt - 사용자에게 윈도우 창을 띄워 데이터를 입력받을 수 있는 함수
