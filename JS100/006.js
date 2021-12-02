// False
//  False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));

// JavaScript 에서는 null, undefined, 0, 빈 문자열, NaN, false 를 제외하고는 모두 참인 값으로 평가
// 정답 2번
