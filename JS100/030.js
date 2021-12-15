// 첫번째 입력에서는 문자열이 입력되고, 두번째에서는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요.

/* 
입력 
pineapple is yummy
apple

출력
4
*/

const word = "파인애플은 정말 맛있습니다.";
const keyword = "애플";

console.log(word.indexOf(keyword));

// indexOf를 호출한 문자열(word)과 indexOf의 매개변수(keyword)를 비교해서 같은 문자열에 첫번째 index를 반환함
