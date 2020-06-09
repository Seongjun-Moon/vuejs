/*
Array Helper Method
*/

// I.forEach

const colors = ["red", "blue", "green"];

// 배열의 요소를 순회(특정한 자료 내에 "한번씩" 탐색)하며, 출력하는 코드
// 0. 전통적인 for 문
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
} // => 결과값 red, blue, green

//1. 순회문으로서의 for문
for (let color of colors) {
  console.log(color);
} // => 결과값 red, blue, green

//2. forEach 헬퍼 메서드
colors.forEach(function (color) {
  console.log(color);
}); // => 결과값 red, blue, green
// const에 담아서 결과값 출력해보면 undefined로 나옴 => return 값은 undefined

// II. filter()
const numbers = [-20, -15, 5, 10];

const positiveNumbers1 = [];
numbers.filter((number) => {
  if (number > 0) {
    positiveNumbers1.push(number);
  }
});
console.log(positiveNumbers1);

const positiveNumbers2 = numbers.filter((number) => number > 0);
console.log(positiveNumbers2);

// III. map()
// - 순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
// - 숫자배열 <-> 글자배열, 동일한 데이터를 적용해야하는 경우

input = ["1", "5", "3", "6"];
const numberInput = input.map((input) => parseInt(input));
console.log(numberInput);
let result = 0;
numberInput.forEach((num) => {
  result += num;
});
console.log(result);

// IV. reduce()
// - 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야하는 경우

result = numberInput.reduce(
  (a, b) => a + b // acc(누적값) + cur(현재값)
);
console.log(result);

// find, some, every
