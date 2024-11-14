"use strict";
let name2 = "11";
// 1. 불리언
const inDone = false;
// 2. 숫자
const dicimal = 10; // 10진수
const hex = 0x00fd; //16진수
const octal = 0o123; //8진수
const binary = 0b1010; //진수
// 3. 문자열
const msg = "hello JS";
// 4.배열
const list = [1, 2, 3];
const list2 = ["a, b, c"];
const list3 = [true, false, true];
// 5. 튜플 = 여러타입으로 표현 가능
const tp = ["ts", 10, true];
// 6. 열거형
var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["green"] = 20] = "green";
    Color[Color["blue"] = 30] = "blue";
})(Color || (Color = {}));
const color = Color.blue;
console.log(color);
// 7. any 타입
let notSure = 4;
notSure = "문자열..";
notSure = false;
console.log(notSure);
// 8. void 타입 = any타입의 반대
let vd = undefined;
function doSomething() {
    console.log("로직 수정");
}
// 9. Object
function create(o) {
    console.log("working...");
}
create({ a: 1 });
// 10. 타입 단언
let value = "this is string 입니다";
let length2 = value.length;
console.log("length : ", length2);
