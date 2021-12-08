// 문장이 입력되면 거꾸로 출력하는 프로그램문장이 입력되면 거꾸로 출력하는 프로그램

const n = prompt("입력하세요.");

const reverseString = n.split("").reverse().join("");

console.log(reverseString);

/* 
- split() 메서드는 문자열을 배열로 만들어 반환한다.
- reverse() 메서드는 배열의 순서를 반전한다.
- join() 메서드는 원소를 모둔 붙여 문자열로 반환한다.
*/
