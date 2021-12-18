// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// const nums = "1 2 3 4 5";                   // 일단 입력받기위해 문자열로 가정
const arr = prompt().split(" ").reverse(); // 배열을 저장할 수 있는 변수 저장 /  reverse는 문자열을 지원하는 method가 아니기때문에 배열로 바꾸어 준다.(매서드체이닝)
let reverseVal = ""; // 역순으로 정렬된 배열을 다시 받아줄 변수 생성, 빈문자열로 초기화

for (let i = 0; i < arr.length; i++) {
  reverseVal = reverseVal + (arr[i] + " ");
}

console.log(reverseVal);

/* 
입출력
입력 : 1 2 3 4 5 
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2
*/
