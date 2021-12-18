// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.(키는 공백으로 구분하여 입력됩니다.)
// sort함수로 구현하기

const unsorted = prompt();
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function (a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}

// return해서 마이너스값이 오름차순으로 정렬됨 / 내림차순은 b - a
// 중요한 것은 a와 b의 순서 , 반환되는값
// join 배열에 있는 원소들을 하나로 묶어서 문자열로 반환 원소와 원소 사이에 공백을 넣으면 공백문자로 반환해 줌
// 숫자를 정렬하기위해서는 안에 익명함수로 리턴값을 받아야함!!
/* 
입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
*/
