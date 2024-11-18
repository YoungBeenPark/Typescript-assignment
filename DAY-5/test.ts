// 1. 타입 단언
let someValue: any = "Hello, ozcodingschool";
// 'as' 구문 또는 '<>'구문을 사용하여 someValue를 문자열로 단언하고, 그 길이를 strLength에 할당하는 코드를 작성하세요.
let strLength: number = (someValue as string).length;

console.log("Length(as 구문):", strLength); // 타입 단언 출력

console.log("-----------");

// 2. 제네릭
/*
요구사항: 아래에 작성된 제네릭 인터페이스와 클래스를 확인한 후, 
문자열 아이템과 숫자열 아이템을 추가, 제거, 모든 아이템 출력하는 코드를 작성하세요. 
*/

// 제네릭 DataItem 인터페이스
interface DataItem<T> {
  id: number; // 고유 식별자
  value: T; // 제네릭 타입 T를 가지는 값
}

// 제네릭 DataManager 클래스
class DataManager<T> {
  private items: DataItem<T>[] = []; // DataItem<T> 타입의 배열을 저장하는 private 속성

  // 아이템 추가 메서드
  addItem(item: DataItem<T>): void {
    this.items.push(item); // 배열에 아이템 추가
  }

  // 아이템 제거 메서드
  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id); // id가 일치하지 않는 아이템들만 남기고 필터링
  }

  // 모든 아이템 반환 메서드
  getItems(): DataItem<T>[] {
    return this.items; // 현재 저장된 모든 아이템 배열을 반환
  }
}

/* 이 곳에 문자열 값을 관리하는 DataManager 인스턴스를 생성해주세요.*/
const stringManager = new DataManager<string>();

/* 이 곳에 addItem을 이용하여 문자열 아이템을 1개 이상 추가하는 코드를 작성해주세요. */
stringManager.addItem({ id: 1, value: " 문자열1 " });
stringManager.addItem({ id: 2, value: " 문자열2 " });
stringManager.addItem({ id: 3, value: " 문자열3 " });
stringManager.addItem({ id: 4, value: " 문자열4 " });

// 모든 아이템 출력 : 작성한 아이템이 잘 추가되었는지 확인합니다.
console.log("String items:", stringManager.getItems());

/* 이 곳에 removeItem을 이용하여 아이템 배열에서 1개의 아이템을 삭제하는 코드를 작성해주세요*/
stringManager.removeItem(1);

// 모든 아이템 출력 : 아이템이 잘 삭제되었는지 확인합니다.
console.log("String items after removal:", stringManager.getItems());

/* 이 곳에 숫자값을 관리하는 numberManager 인스턴스를 생성해주세요.*/
const numberManager = new DataManager<number>;

/* 이 곳에 addItem을 이용하여 숫자 아이템을 1개 이상 추가하는 코드를 작성해주세요. */
numberManager.addItem({ id: 1, value: 11111 })
numberManager.addItem({ id: 2, value: 22222 })
numberManager.addItem({ id: 3, value: 33333 })
numberManager.addItem({ id: 4, value: 44444 })

// 모든 아이템 출력 : 작성한 아이템이 잘 추가되었는지 확인합니다.
console.log("Number items:", numberManager.getItems());

// 아이템 배열에서 id가 2인 아이템 삭제
/* 이 곳에 removeItem을 이용하여 아이템 배열에서 1개의 아이템을 삭제하는 코드를 작성해주세요*/
numberManager.removeItem(2);

// 모든 아이템 출력 : 아이템이 잘 삭제되었는지 확인합니다.
console.log("Number items after removal:", numberManager.getItems());
