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
