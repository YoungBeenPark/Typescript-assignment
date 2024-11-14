let name2: string = "11";

// 1. 불리언
const inDone: boolean = false;

// 2. 숫자
const dicimal: number = 10; // 10진수
const hex: number = 0x00fd; //16진수
const octal: number = 0o123; //8진수
const binary: number = 0b1010; //진수

// 3. 문자열
const msg: string = "hello JS";

// 4.배열
const list: number[] = [1, 2, 3];
const list2: string[] = ["a, b, c"];
const list3: boolean[] = [true, false, true];

// 5. 튜플 = 여러타입으로 표현 가능
const tp: [string, number, boolean] = ["ts", 10, true];

// 6. 열거형
enum Color {
  red = 10,
  green = 20,
  blue = 30,
}
const color = Color.blue;
console.log(color);

// 7. any 타입
let notSure: any = 4;
notSure = "문자열..";
notSure = false;

console.log(notSure);

// 8. void 타입 = any타입의 반대
let vd: void = undefined;

function doSomething(): void {
  console.log("로직 수정");
}

// 9. Object
function create(o: object): void {
  console.log("working...");
}

create({ a: 1 });

// 10. 타입 단언
let value = "this is string 입니다";
let length2 = (value as string).length;

console.log("length : ", length2);
