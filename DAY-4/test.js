"use strict";
// 1. 배열 타입
//   책의 제목을 담고 있는 배열을 생성하세요.
//   배열에는 최소 5개의 책 제목을 포함시키세요.
let books = ["책1", "책2", "책3", "책4", "책5"];
console.log(books);
const deepdive = {
    title: "모던리액트",
    author: "김용찬",
    publicationYear: 20231107,
    isAvailable: true,
    status: "available",
};
console.log(deepdive);
// UpdateAvailability는 두개의 매개변수를 받는 함수타입
// (deepdive: Book, newAvailability: boolean)에서
// deepdive: Book은 Book타입의 객체, 가용성을 업데이트할 책
// newAvailability는 새로운 상태를 나타낼 boolean 타입
const updateBookAvailability = (deepdive, newAvailability) => {
    deepdive.isAvailable = newAvailability;
};
// updateBookAvailability는 UpdateAvailability을 구현하고
// 매개 변수로 받은 deepdive객체의 isAvailable속성을 newAvailability값으로 업데이트
console.log(`업데이트 전의 ${deepdive.title} available: ${deepdive.isAvailable}`);
// 초기 상태를 출력
updateBookAvailability(deepdive, false);
console.log(`업데이트 후의 ${deepdive.title} available: ${deepdive.isAvailable}`);
// 세가지 상태 정의
const updatedeepdivetatus = (deepdive, status) => {
    deepdive.isAvailable = status === "available";
};
updatedeepdivetatus(deepdive, "checked out");
console.log(`deepdive : ` + deepdive.status);
const library = {
    book: [],
    addBook(book) {
        this.book.push(book);
    },
    removeBook(title) {
        this.book = this.book.filter((book) => book.title !== title);
    },
};
const 아파트 = {
    title: "아파트",
    author: "아무개",
    publicationYear: 20240101,
    isAvailable: false,
    status: "available",
};
const 아파트2 = {
    title: "아파트2",
    author: "홍길동",
    publicationYear: 125125,
    isAvailable: true,
    status: "available",
};
const 아파트3 = {
    title: "아파트3",
    author: "세종대왕",
    publicationYear: 124252,
    isAvailable: false,
    status: "checked out",
};
// 첵 추가
library.addBook(아파트);
library.addBook(아파트2);
library.addBook(아파트3);
console.log("추가 된 책들", library.book);
// 책 제거
library.removeBook("아파트2");
console.log(library.book);
const info = ["정보", 1995];
console.log("정보", info);
// 7. 열거형
//   책의 장르를 나타내는 열거형(Genre)을 정의하세요.
//   Genre는 Fiction, NonFiction, Fantasy, Biography, ScienceFiction, Romance 여섯 가지 값을 가집니다.
//   Book 타입을 확장하여 DetailedBook 타입을 정의하세요. 이 타입은 기존 Book 타입에 genre 속성을 추가로 가져야 합니다.
//   DetailedBook 객체의 예시 데이터를 하나 만드세요.
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "NonFiction";
    Genre["Fantasy"] = "Fantasy";
    Genre["Biography"] = "Biography";
    Genre["ScienceFiction"] = "ScienceFiction";
    Genre["Romance"] = "Romance";
})(Genre || (Genre = {}));
// 장르 속성중 한가지 설정
const ex = {
    title: "아파트3",
    author: "세종대왕",
    publicationYear: 124252,
    isAvailable: false,
    status: "checked out",
    genre: Genre.Fiction
};
console.log(ex);
