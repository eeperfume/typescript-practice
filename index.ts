// ===========================
// 변수에 타입 지정
// ===========================
let lastname: string = "Lee";
let age: number = 31;
let placeOfBirth: string = "Seoul";

// ===========================
// 변수에 타입 지정 (object)
// ===========================
let favoriteMusic: { song: string; artist: string } = {
  song: "Burning",
  artist: "Hitsujibungaku",
};

// ===========================
// 변수에 타입 지정 (array inside an object)
// ===========================
let project: { member: string[]; days: number; started: boolean } = {
  member: ["Kim, Park"],
  days: 30,
  started: true,
};

// ===========================
// 변수에 타입 지정 (union type)
// ===========================
let arr: (number | string)[] = [1, "2", 3];
let obj: { data: number | string } = { data: "123" };

// ===========================
// 변수에 타입 지정 (undefined)
// ===========================
let lastname1: string = "Kim";
let age1: undefined | number = undefined;
let married: boolean = false;
let minsoo: (string | undefined | number | boolean)[] = [lastname1, age1, married];

// ===========================
// 변수에 타입 지정 (union type)
// ===========================
let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];

// ===========================
// 함수에 타입 지정 (void)
// ===========================
const hello = (name?: string): void => {
  console.log(`안녕하세요. ${name}.`);
};
hello("홍길동");

// ===========================
// 함수에 타입 지정 (union type)
// ===========================
const getLength = (input: string | number): number => {
  return input.toString().length;
};
console.log(getLength("123")); // 3
console.log(getLength(1234)); // 4

// ===========================
// 함수에 타입 지정 (union type and undefined)
// ===========================
/**
 * 결혼 가능성을 계산하는 함수
 *
 * @param monthlyIncome - 월 소득 (number)
 * @param hasHouse - 집 보유 여부 (boolean)
 * @param attractivenessScore - 매력 점수 (string), "상", "중", "하" 중 하나
 * @returns "결혼 가능" 또는 undefined (sum이 600 미만일 경우)
 */
const calculateMarriageProbability = (
  monthlyIncome: number,
  hasHouse: boolean,
  attractivenessScore: string
): string | undefined => {
  let sum: number = 0;
  sum += monthlyIncome;
  sum += hasHouse ? 500 : 0;
  sum += attractivenessScore === "상" ? 100 : 0;

  if (sum >= 600) {
    return "결혼 가능";
  }
};
console.log(calculateMarriageProbability(700, false, "중")); // 결혼 가능
console.log(calculateMarriageProbability(100, false, "상")); // undefined

// ===========================
// 타입 축소 (type narrowing)
// ===========================
/**
 * 주어진 문자열에서 문자와 숫자를 숫자로 변환하여 배열로 반환하는 함수
 *
 * @param mixedInput - 문자와 숫자가 섞인 입력값 (string)
 * @returns 변환된 숫자로 구성된 배열 (number[])
 */
const convertCharactersToNumbers = (mixedInput: (number | string)[]): number[] => {
  let array: number[] = [];
  mixedInput.forEach((element) => {
    typeof element === "string" ? array.push(parseFloat(element)) : array.push(element);
  });
  return array;
};
console.log(convertCharactersToNumbers(["1", 2, "3", 4, 5]));

// ===========================
// 타입 축소 (array)
// ===========================
/**
 * 주어진 학생의 마지막 과목을 반환합니다.
 *
 * @param subjects - 학생의 과목을 포함하는 객체입니다.
 *                   과목은 문자열 형태로 단일 과목일 수도 있고,
 *                   배열 형태로 여러 과목일 수도 있습니다.
 * @returns 마지막 과목을 문자열로 반환합니다.
 *          만약 과목이 문자열인 경우, 그 문자열을 직접 반환하며,
 *          배열인 경우 배열의 마지막 요소를 반환합니다.
 *          두 경우 모두 해당하지 않으면 빈 문자열을 반환합니다.
 */
const getLastSubject = (subjects: { subject: string | string[] }): string => {
  if (typeof subjects.subject === "string") {
    return subjects.subject;
  } else if (Array.isArray(subjects.subject)) {
    return subjects.subject[subjects.subject.length - 1];
  } else {
    return "";
  }
};

let cheolsu = { subject: "math" };
let younghee = { subject: ["science", "english"] };
let minsu = { subject: ["science", "art", "korean"] };

console.log(getLastSubject(cheolsu)); // math
console.log(getLastSubject(younghee)); // english
console.log(getLastSubject(minsu)); // korean
// getLastSubject({ hello: "hi" }); // 객체 리터럴은 알려진 속성만 지정할 수 있으며, 'hello'는 타입 '{ subject: string | string[]; }'에 존재하지 않습니다.

// ===========================
// 타입 별칭 (type aliases)
// ===========================
type Account = { name: string; phone: number; email: string };
let account: Account = { name: "kim", phone: 123, email: "abc@naver.com" };

// ===========================
// readonly
// ===========================
type ItemAttributes = {
  color?: string;
  size: number;
  readonly position: number[];
};
let item: ItemAttributes = { size: 10, position: [1, 2, 3] };
// item.position = [2, 3, 4]; // 'position'에 할당할 수 없습니다. 이는 읽기 전용 속성이기 때문입니다.

// readonly 키워드를 설명하려면...
const username = {
  lastname: "Lee",
};
username.lastname = "Ahn"; // const 변수인데 오류가 나지 않음
/**
 * Why?
 * const 변수는 재할당만 막아줄 뿐, 그 안에 있는 객체의 속성을 변경하는 것까지는 막지 못함
 * 그래서 객체의 속성이 변경되지 않게 하려면 TypeScript의 readonly 키워드를 사용하면 됨
 */

// ===========================
// 교차 타입 (intersection type)
// ===========================
type Account2 = Account & { isMinor: boolean };
let account2: Account2 = {
  name: "kim",
  phone: 123,
  email: "abc@naver.com",
  isMinor: false,
};

// ===========================
// 교차 타입 (duplicate property)
// ===========================
type A = { name: string; age: number };
type B = { name: string; sex: string };
type C = { name: number; sex: string }; // B랑 동일한데, 'name'의 타입을 number으로 변경

type AB = A & B; // 타입 별칭을 합쳤을 때 중복된 속성이 있는 경우 => { name:string; age:number; sex:string }
type BC = B & C; // 타입 별칭을 합쳤을 때 중복된 속성이 있는 경우 + 'name'의 타입이 string과 number로 충돌하는 경우 => { name: ??; sex:string }

let ab: AB = { name: "Lee", age: 31, sex: "male" };
console.log(ab); // { name: 'Lee', age: 31, sex: 'male' }

// let bc: BC = { name: "Lee", sex: "male" }; // "타입 'string'을 타입 'never'에 할당할 수 없습니다.

// ===========================
// 리터럴 타입 (literal type)
// ===========================
/**
 * 리터럴 타입으로 구성된 '가위', '바위', '보' 선택지를 정의하고, 주어진 선택지를 배열로 반환하는 함수입니다.
 *
 * @param input - '가위', '바위', '보' 중 하나의 선택지를 포함하는 배열입니다.
 * @returns 선택한 선택지를 포함하는 배열을 반환합니다.
 */
type RockPaperScissors = "가위" | "바위" | "보";
const rockPaperScissors = (...input: RockPaperScissors[]): RockPaperScissors[] => {
  return input;
};
console.log(rockPaperScissors("가위")); // [ '가위' ]
console.log(rockPaperScissors("바위", "보")); // [ '바위', '보' ]
// rockPaperScissors(["바위", "바보"]); // 타입 오류 발생: '"바보"' 형식은 '"가위" | "바위" | "보"' 형식에 할당할 수 없습니다.

// ===========================
// as const
// ===========================
function sendName(name: "Kim") {}

const userInfo1 = {
  name: "Kim",
};
// sendName(userInfo1.name); // 타입 오류 발생: 'string' 형식의 인수는 '"Kim"' 형식의 매개 변수에 할당될 수 없습니다.

const userInfo2 = {
  name: "Kim",
} as const;
sendName(userInfo2.name); // 타입 오류가 발생하지 않음
/**
 * Why?
 * sendName 함수는 'Kim' 타입만 입력할 수 있지만, userInfo1.name은 string 타입임.
 *
 * 이 문제를 해결하는 방법은 세 가지:
 * 1. 객체를 만들 때 타입을 정확히 지정하기
 * 2. 타입 단언(type assertion)을 사용하기 (예: as 'Kim'으로 강제로 타입 지정)
 * 3. as const 문법을 사용하여 객체에 적용하기
 *
 * as const의 효과는 두 가지:
 * 1. 객체의 값으로 타입을 변환하여 'Kim' 타입으로 변경됨
 * 2. 객체 내의 모든 속성을 readonly로 만들어서 변경 시 오류 발생
 */

// ===========================
// 함수 타입 별칭 (function inside an object)
// ===========================
type MemberInfo = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  hello: () => void;
};
let memberInfo: MemberInfo = {
  name: "kim",
  age: 30,
  plusOne: (x) => x + 1,
  hello: () => console.log("안녕"),
};
console.log(memberInfo.plusOne(1)); // 2
memberInfo.hello(); // 안녕

// ===========================
// 함수 타입 별칭 1
// ===========================
type CutZero = (str: string) => string;
/**
 * 주어진 문자열의 첫 번째 문자가 '0'인 경우 이를 제거하는 함수
 * @param str - 처리할 입력 문자열
 * @returns 첫 번째 문자가 '0'인 경우 이를 제거한 문자열, 그렇지 않으면 원래 문자열 반환
 */
const cutZero: CutZero = (str) => {
  return str[0] === "0" ? str.slice(1) : str;
};
console.log(cutZero("0123")); // 123
console.log(cutZero("123")); // 123

// ===========================
// 함수 타입 별칭 2
// ===========================
type RemoveDash = (str: string) => number;
/**
 * 주어진 문자열에서 모든 대시 기호를 제거하고, 숫자 타입으로 반환하는 함수
 * @param str - 처리할 입력 문자열
 * @returns 대시가 제거된 후 숫자로 변환된 값 반환
 */
const removeDash: RemoveDash = (str) => {
  let result = str.replace(/-/g, ""); // - 제거
  return parseFloat(result);
};
console.log(removeDash("1234-5678")); // 12345678

// ===========================
// 함수 타입 별칭 3 (function inside an function)
// ===========================
type ProcessInput = (input: string, cutZero: CutZero, removeDash: RemoveDash) => void;
/**
 * 입력 문자열을 처리하여 선행 0을 제거하고 대시를 제거한 숫자를 출력합니다.
 * @param input - 처리할 입력 문자열
 * @param cutZero - 입력 문자열에서 선행 0을 제거하는 함수
 * @param removeDash - 입력 문자열에서 대시를 제거하고 숫자로 변환하는 함수
 */
const processInput: ProcessInput = (input, cutZero, removeDash) => {
  console.log(removeDash(cutZero(input)));
};
processInput("010-1111-2222", cutZero, removeDash);

// ===========================
// HTML 제어 1 (null check)
// ===========================
let title = document.querySelector("#title"); // 타입 => Element | null
// title.innerHTML = "안녕하세요"; // 타입 오류 발생: 'title'은(는) 'null'일 수 있습니다.
title ? (title.innerHTML = "안녕하세요") : console.error("요소를 찾을 수 없습니다.");

// ===========================
// HTML 제어 2 (instanceof)
// ===========================
title instanceof Element ? (title.innerHTML = "안녕하세요") : console.error("요소를 찾을 수 없습니다.");

// ===========================
// HTML 제어 3 (assertion)
// ===========================
title = document.querySelector("#title") as HTMLHeadingElement;
title.innerHTML = "안녕하세요";

// ===========================
// HTML 제어 4 (optional chaining)
// ===========================
if (title?.innerHTML != undefined) {
  title.innerHTML = "안녕하세요";
}

// ===========================
// HTML 제어 5 (a tag)
// ===========================
let link = document.querySelector(".link");
// if (link instanceof HTMLElement) {
//   link.href = "https://www.kakaocorp.com/"; // 'HTMLElement' 형식에 'href' 속성이 없습니다.
// }
if (link instanceof HTMLAnchorElement) {
  link.href = "https://www.kakaocorp.com/"; // 정상
}

// ===========================
// HTML 제어 5 (event listener + optional chaining + img tag)
// ===========================
let button = document.querySelector("#button");
// button.addEventListener("click", () => {}); // 'button'은(는) 'null'일 수 있습니다.
button?.addEventListener("click", () => {
  let image = document.querySelector("#image");
  if (image instanceof HTMLImageElement) {
    image.src = "./images/Nijika_Ijichi.PNG";
  }
});

// ===========================
// HTML 제어 6 (a tags + optional chaining)
// ===========================
let links = document.querySelectorAll(".naver");
links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    link.href = "https://www.daum.net";
  }
});

// ===========================
// class 타입 지정 1
// ===========================
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price * 0.1;
  }
}
let car = new Car("소나타", 3000);
console.log(car); // {model: '소나타', price: 3000}
console.log(car.tax()); // 300

// ===========================
// class 타입 지정 2 (reduce 함수의 초기값을 설정하여 array 타입 지정)
// ===========================
class Word {
  str: string[];
  num: number[];
  constructor(...input: (string | number)[]) {
    const { strings, numbers } = input.reduce(
      (acc, curr) => {
        if (typeof curr === "string") {
          acc.strings.push(curr);
        }
        if (typeof curr === "number") {
          acc.numbers.push(curr);
        }
        return acc;
      },
      { strings: [] as string[], numbers: [] as number[] }
    );
    this.str = strings;
    this.num = numbers;
  }
}
let word = new Word(1, 2, "Ahn", 3, "Lee");
console.log(word.str); // ['Ahn', 'Lee']
console.log(word.num); // [1, 2, 3]

// ===========================
// interface 타입 지정 (extends)
// ===========================
interface Animal {
  name: string;
}
interface Cat extends Animal {
  legs: number;
}

// ===========================
// interface 타입 지정 (타입 이름 중복 선언 시 interface: 가능, type: 불가능)
// ===========================
interface Animal {
  name: string;
}
interface Animal {
  legs: number;
}
// type Animal2 = {
//   name :string
// }
// type Animal2 = {
//   legs :number
// } // 'Animal2' 식별자가 중복되었습니다.

// ===========================
// interface 타입 지정
// ===========================
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let product: Product = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };

// ===========================
// interface 타입 지정 (array)
// ===========================
interface Cart {
  product: string;
  price: number;
}
let cart: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// ===========================
// interface 타입 지정 (extends)
// ===========================
interface Card extends Cart {
  card: boolean;
}
let card: Card = { product: "청소기", price: 7000, card: false };

// ===========================
// interface 타입 지정 (function inside an object)
// ===========================
interface Calculation {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}
let calculation: Calculation = {
  plus: (x, y) => x + y,
  minus: (x, y) => x - y,
};

// ===========================
// rest parameter
// ===========================
const findMax = (...input: number[]): number => {
  return Math.max(...input);
};
console.log(findMax(1, 2, 3, 4, 5)); // 5

// ===========================
// destructuring (object)
// ===========================
const logUserData = ({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }): void => {
  console.log({ user, comment, admin }); // {user: 'kim', comment: Array(3), admin: false}
};
logUserData({ user: "kim", comment: [3, 5, 4], admin: false });

// ===========================
// destructuring (array)
// ===========================
const processData = ([productionYear, productName, isAvailable]: [number, string, boolean]): void => {
  console.log([productionYear, productName, isAvailable]); // [40, 'wine', false]
};
processData([40, "wine", false]);

// ===========================
// 타입 축소 (narrowing > in 연산자)
// - 배타적인 속성이 합쳐진 경우 사용
// ===========================
type Fish = { swim: string };
type Bird = { swim: string; fly: boolean };
const getAnimalAction = (animal: Fish | Bird): string | boolean => {
  if ("fly" in animal) {
    return animal.fly;
  }
  return animal.swim;
};
console.log(getAnimalAction({ swim: "Bird", fly: true })); // true
console.log(getAnimalAction({ swim: "Fish" })); // Fish

// ===========================
// 타입 축소 (narrowing > instance created from a class)
// ===========================
let date = new Date();
if (date instanceof Date) {
  console.log("클래스로 생성된 인스턴스인 경우 instanceof를 사용하여 타입을 좁히세요.");
}

// ===========================
// 타입 축소 (narrowing > literal type)
// - 속성이 동일해서 in 연산자를 통해 비교가 불가능한데, 리터럴 타입이 존재하는 경우
// ===========================
type Bus = {
  wheel: "8개";
  color: string;
};
type Bicycle = {
  wheel: "2개";
  color: string;
};
const logVehicleColor = (input: Bus | Bicycle): void => {
  if ("8개" === input.wheel) {
    console.log("이 버스의 색깔은 " + input.color);
  } else {
    console.log("이 자전거의 색깔은 " + input.color);
  }
};
logVehicleColor({ wheel: "8개", color: "빨강" }); // 이 버스의 색깔은 빨강
logVehicleColor({ wheel: "2개", color: "노랑" }); // 이 자전거의 색깔은 노랑

// ===========================
// never type
// ===========================
function func1() {
  throw new Error();
} // void 타입

let func2 = function () {
  throw new Error();
}; // never 타입

const func3 = () => {
  throw new Error();
}; // never 타입

// ===========================
// never type 1 (함수가 항상 예외를 던지는 경우)
// ===========================
const throwError = (message: string): never => {
  throw new Error(message);
};

// ===========================
// never type 2 (무한 루프에 빠지는 경우)
// ===========================
const infiniteLoop = (): never => {
  while (true) {}
};

// ===========================
// never type 3 (타입 축소(narrowing)를 통해 가능한 모든 경우를 처리했으나 특정 경우에 도달할 수 없는 경우)
// ===========================
const handlePet = (pet: "cat" | "dog"): void => {
  switch (pet) {
    case "cat":
      console.log("고양이에요");
      break;
    case "dog":
      console.log("강아지에요");
      break;
    default:
      let defaultPet: never = pet; // 여기에 도달할 수 없으므로 defaultPet의 타입은 never를 사용합니다.
      throw new Error(`처리할 수 없는 경우: ${defaultPet}`);
  }
};

// ===========================
// 접근 제어자 (public inside a class)
// ===========================
class Fruit {
  constructor(public name: string, public color: string) {
    this.name = name;
    this.color = color;
  }
}
const fruit = new Fruit("사과", "빨강");
console.log(fruit.name); // "사과"
console.log(fruit.color); // "빨강"

// ===========================
// 접근 제어자 (private inside a class)
// ===========================
class Beverage {
  constructor(private name: string, private temperature: number) {
    this.name = name;
    this.temperature = temperature;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}
const beverage = new Beverage("콜라", 5);
// console.log(beverage.name); // 오류: Property 'name' is private and only accessible within class 'Beverage'.
console.log(beverage.getName()); // 콜라
/**
 * private 속성을 클래스 외부에서 수정해야 할 경우
 * 1. 클래스 내부에 private 속성을 수정하는 메서드 생성
 * 2. 해당 수정 메서드를 외부에서 호출
 */
beverage.setName("사이다");
console.log(beverage.getName()); // 사이다

// ===========================
// 접근 제어자 (private, protected) + function, method
// ===========================
/**
 * 1. private
 * - 언제 사용해야 할까?
 *   - 데이터 처리 로직에서 내부 상태나 중간 값을 유지하고 싶을 때 사용.
 *   - 외부에서 직접 접근하지 못하도록 하여 데이터 무결성을 보존하고, 객체의 상태를 안전하게 보호할 필요가 있을 때 적합.
 *
 * 2. protected
 * - 언제 사용해야 할까?
 *   - 상속받은 클래스에서 부모 클래스의 속성을 사용할 필요가 있을 때 사용.
 *   - 부모 클래스의 protected 속성을 통해 하위 클래스가 필요한 데이터를 가공하거나 처리할 수 있게 함.
 *
 * 3. 함수와 메서드
 * - 함수: 독립적으로 정의된 코드 블록으로, 특정 입력값을 받아 작업을 수행하고 결과를 반환.
 * - 메서드: 특정 객체의 속성으로 정의된 함수로, 그 객체와 밀접하게 관련되어 있으며 객체의 데이터를 다룸.
 */

// ===========================
// static keyword in a class
// ===========================
class Chair {
  color: string = "갈색";
  height: number = 50;
}
let chair = new Chair();
chair.color; // 가능
// Chair.color; // 'typeof Chair' 형식에 'color' 속성이 없습니다.

class Desk {
  static color: string = "갈색";
  width: number = 1200;
}
let desk = new Desk();
// desk.color; // 'color' 속성이 'Desk' 형식에 없습니다. 대신 정적 멤버 'Desk.color'에 액세스하려고 하셨습니까?
Desk.color; // 가능

// ===========================
// private static
// ===========================
class Position {
  private static x = 1;
  public static y = 2;
  protected z = 3;
  static getX(): number {
    return Position.x;
  }
}
/**
 * private static
 * - 언제 사용해야 할까?
 *   - 클래스 외부에서 접근할 수 없음. (즉, private static으로 선언된 속성은 클래스 내부에서만 사용되고, 외부에서는 전혀 볼 수 없음.)
 *   - 클래스 메서드 내에서만 접근이 가능. (즉, 인스턴스의 메서드에서 접근할 수 없음.)
 * - 접근 방법
 *   - Position.getX()와 같은 public + static 메서드를 통해 값에 접근할 수 있음.
 */
Position.getX();

class Point {
  private static x = 10;
  public static y = 20;
  static addOne(input: number) {
    return (Point.x += input);
  }
  static printX() {
    return Point.x;
  }
}
console.log(Point.addOne(1)); // 11
console.log(Point.addOne(10)); // 21
console.log(Point.printX()); // 21

// ===========================
// public inside a class, type narrowing
// ===========================
/**
 * 사각형을 나타내는 클래스입니다.
 */
class Square {
  /**
   * Square 클래스의 인스턴스를 생성합니다.
   * @param width - 사각형의 너비입니다.
   * @param height - 사각형의 높이입니다.
   * @param color - 사각형의 색상입니다.
   */
  constructor(public width: number, public height: number, public color: string) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  /**
   * 400x400 픽셀 영역 내의 임의 위치에 사각형을 그립니다.
   */
  draw() {
    let x = Math.random() * (400 - 30);
    let y = Math.random() * (400 - 30);
    let content = `<div style="position: absolute;
      width: ${this.width}px;
      height: ${this.height}px;
      background-color: ${this.color};
      left: ${x}px;
      top: ${y}px;"></div>`;
    let drawing = document.querySelector("#drawing");
    drawing?.insertAdjacentHTML("beforeend", content);
  }
}
let square = new Square(30, 30, "red");
new Array(8).fill(0).reduce(() => square.draw(), 0); // 8번 실행

// ===========================
// Generic 함수 1 (기본 구조)
// ===========================
// function identity<T>(arg: T): T {
//   return arg;
// }
const identity = <T>(arg: T): T => {
  return arg;
};
let result1 = identity<string>("안녕하세요");
let result2 = identity<number>(10);
// TypeScript가 자동으로 타입을 추론
let result3 = identity("안녕하세요"); // string으로 추론
let result4 = identity(42); // number로 추론

// ===========================
// Generic 함수 2 (제너릭 제약)
// ===========================
const loggingIdentity = <T extends { length: number }>(arg: T): T => {
  console.log(arg.length); // 이제 length 속성을 사용할 수 있습니다.
  return arg;
};
loggingIdentity<{ length: number }>({ length: 10 }); // 10

// ===========================
// Generic 함수 3 (여러 타입 매개변수 사용)
// ===========================
const pair = <K, V>(key: K, value: V): [K, V] => {
  return [key, value];
};

let p = pair<string, number>("age", 30);
console.log(p); // ['age', 30]
/**
 * Generic 함수
 * - 언제 사용해야 할까?
 *   - 하나의 함수로 다양한 타입을 처리하고 싶을 때
 *   - 잘못된 타입의 값을 전달할 경우 컴파일 타임에 오류를 잡을 수 있음.
 */
// ===========================
// Generic 함수 4 (예시)
// ===========================
// ---------------------------
// 일반 함수
// ---------------------------
const double = (value: number): number => value * 2;
console.log(double(5)); // 10
// console.log(double("5")); // 오류 발생
// ---------------------------
// Generic 함수
// ---------------------------
const echo = <T>(value: T): T => {
  return value;
};
console.log(echo(5)); // 5 (number로 추론)
console.log(echo("안녕하세요")); // 안녕하세요 (string으로 추론)
console.log(echo([1, 2, 3])); // [1, 2, 3] (number[]로 추론)

// ===========================
// Generic 함수 5
// ===========================
/**
 * 주어진 입력의 길이를 계산합니다.
 *
 * @param input - 길이를 계산할 입력값. 문자열 또는 배열일 수 있습니다.
 * @returns 입력값이 문자열이거나 배열일 경우 길이를 반환하고,
 *          그 외의 경우에는 undefined를 반환합니다.
 */
const calculateLength = <T extends string | string[]>(input: T): number => {
  return input.length;
};
console.log(calculateLength<string>("안녕하세요")); // 5
console.log(calculateLength<string[]>(["Kim", "Park"])); // 2

// ===========================
// Generic 함수 6
// ===========================
interface Creature {
  name: string;
  age: number;
}
/**
 * JSON 문자열을 파싱하여 주어진 타입의 객체로 변환합니다.
 *
 * @template Creature - 변환할 객체의 타입을 지정합니다.
 * @param input - JSON 형식의 문자열입니다.
 * @returns JSON 문자열을 파싱하여 객체로 반환합니다.
 */
const parseCreatureData = <Creature>(input: string): Creature => {
  return JSON.parse(input);
};
let data = '{"name" : "dog", "age" : 1 }';
let result = parseCreatureData<Creature>(data);
console.log(result); // {name: 'dog', age: 1}

// ===========================
// Generic 함수 7
// ===========================
class ValueHolder<T> {
  constructor(public input: T) {
    this.input = input;
  }
}
let valueHolder1 = new ValueHolder<string>("안녕하세요");
console.log(valueHolder1.input); // 안녕하세요
let valueHolder2 = new ValueHolder<number>(12345);
console.log(valueHolder2.input); // 12345
let valueHolder3 = new ValueHolder<(string | number)[]>(["Ahn", "Lee", 1, 2, 3]);
console.log(valueHolder3.input); // ['Ahn', 'Lee', 1, 2, 3]
