// 1. 배열 타입
//   책의 제목을 담고 있는 배열을 생성하세요.
//   배열에는 최소 5개의 책 제목을 포함시키세요.
let books: string[] = ["책1", "책2", "책3", "책4", "책5"];
console.log(books);

// 2. 객체 타입
//   책을 나타내는 객체 타입(Book)을 정의하세요.
//   책 객체는 title, author, publicationYear, isAvailable 속성을 가져야 합니다.
//   책 객체의 예시 데이터를 하나 만드세요.
interface Book {
  title: string;
  author: string;
  publicationYear: number;
  isAvailable: boolean;
  status: string;
}
const deepdive: Book = {
  title: "모던리액트",
  author: "김용찬",
  publicationYear: 20231107,
  isAvailable: true,
  status: "available",
};
console.log(deepdive);

// 3. 함수 타입
// 책의 가용성을 변경하는 함수 타입(UpdateAvailability)을 정의하세요.
// 함수는 책 객체와 새로운 가용성 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
// 함수의 예시 구현을 작성하세요.
type UpdateAvailability = (deepdive: Book, newAvailability: boolean) => void;
// UpdateAvailability는 두개의 매개변수를 받는 함수타입
// (deepdive: Book, newAvailability: boolean)에서
// deepdive: Book은 Book타입의 객체, 가용성을 업데이트할 책
// newAvailability는 새로운 상태를 나타낼 boolean 타입
const updateBookAvailability: UpdateAvailability = (
  deepdive,
  newAvailability
) => {
  deepdive.isAvailable = newAvailability;
};
// updateBookAvailability는 UpdateAvailability을 구현하고
// 매개 변수로 받은 deepdive객체의 isAvailable속성을 newAvailability값으로 업데이트

console.log(
  `업데이트 전의 ${deepdive.title} available: ${deepdive.isAvailable}`
);
// 초기 상태를 출력
updateBookAvailability(deepdive, false);
console.log(
  `업데이트 후의 ${deepdive.title} available: ${deepdive.isAvailable}`
);
// 초기 상태가 업데이트되고 출력

// 4. 유니언 타입
//   책의 상태를 나타내는 유니언 타입(booktatus)을 정의하세요. 상태는 "available", "checked out", "reserved" 세 가지로 한정합니다.
//   책 상태를 변경하는 함수를 작성하세요. 함수는 책 객체와 새로운 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
//   함수의 예시 구현을 작성하세요.
type bookstatus = "available" | "checked out" | "reserved";
// 세가지 상태 정의

const updatedeepdivetatus = (deepdive: Book, status: bookstatus): void => {
  deepdive.isAvailable = status === "available";
};

updatedeepdivetatus(deepdive, "checked out");
console.log(`deepdive : ` + deepdive.status);

// 5. 인터페이스
//   도서관 시스템을 위한 인터페이스(Library)를 정의하세요. 이 인터페이스는 다음 메서드를 포함해야 합니다:
//   book: Book 객체의 배열
//   addBook: 책을 추가하는 메서드
//   removeBook: 책을 제거하는 메서드
//   인터페이스를 구현하는 예시 코드를 작성하세요.
interface Library {
  book: Book[]; // 객체 배열
  addBook: (book: Book) => void; // 추가
  removeBook: (title: string) => void; // 삭제
}
const library: Library = {
  book: [],
  addBook(book) {
    this.book.push(book);
  },
  removeBook(title) {
    this.book = this.book.filter((book) => book.title !== title);
  },
};
const 아파트: Book = {
  title: "아파트",
  author: "아무개",
  publicationYear: 20240101,
  isAvailable: false,
  status: "available",
};
const 아파트2: Book = {
  title: "아파트2",
  author: "홍길동",
  publicationYear: 125125,
  isAvailable: true,
  status: "available",
};
const 아파트3: Book = {
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
// 6. 튜플
//   책의 제목과 저자를 담고 있는 튜플(BookInfo)을 정의하세요.
//   튜플의 예시 데이터를 하나 만드세요.
type BookInfo = [string, number];
const info: BookInfo = ["정보", 1995];
console.log("정보", info);
// 7. 열거형
//   책의 장르를 나타내는 열거형(Genre)을 정의하세요.
//   Genre는 Fiction, NonFiction, Fantasy, Biography, ScienceFiction, Romance 여섯 가지 값을 가집니다.
//   Book 타입을 확장하여 DetailedBook 타입을 정의하세요. 이 타입은 기존 Book 타입에 genre 속성을 추가로 가져야 합니다.
//   DetailedBook 객체의 예시 데이터를 하나 만드세요.

// 열거형 문자열
enum Genre {
  Fiction = "Fiction",
  NonFiction = "NonFiction",
  Fantasy = "Fantasy",
  Biography = "Biography",
  ScienceFiction = "ScienceFiction",
  Romance = "Romance",
}
// 장르 속성 추가
type DetailedBook = Book & {
  genre: Genre;
}
// 장르 속성중 한가지 설정
const ex: DetailedBook = {
  title: "아파트3",
  author: "세종대왕",
  publicationYear: 124252,
  isAvailable: false,
  status: "checked out",
  genre: Genre.Fiction
};
console.log(ex)