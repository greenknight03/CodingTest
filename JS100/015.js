// 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력

const name = prompt("이름을 입력하세요.");

console.log(`안녕하세요. 저는 ${name}입니다.`);

/*
 * es6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용
 * 이를 템플릿 리터럴(Template literals)함.
 */
