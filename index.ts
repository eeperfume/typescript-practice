import { Bike } from "./types/interface";
import { Boat, ObjectFunction } from "./types/types";

let username = "Lee";
// let age = 31;
let born = "Seoul";

let favoriteMusic: { song: string; artist: string } = {
  song: "NAME",
  artist: "Tsuzuri",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let members: (number | string)[] = [1, "2", 3];
let object: { a: string | number } = { a: 123 };

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

const 함수 = (x: number | string): void => {
  if (typeof x === "number") {
    console.log(x + 2);
  }
  if (typeof x === "string") {
    console.log(x + 2);
  }
};

함수(2000); // 2002

const 이름 = (name?: string): void => {
  console.log(name ? `안녕하세요. ${name}.` : "이름이 없습니다.");
};

이름("홍길동"); // 안녕하세요. 홍길동.

const 글자수세기 = (input: string | number): number => {
  return input.toString().length;
};

console.log(글자수세기("1234")); // 4

const 결혼가능확률 = (
  월소득: number,
  집보유여부: boolean,
  매력점수: string
): string | void => {
  let score: number = 0;
  score += 월소득;
  score += 집보유여부 ? 500 : 0;
  score += 매력점수 === "상" ? 100 : 0;
  if (score > 600) {
    return "결혼 가능";
  }
};

console.log(결혼가능확률(700, false, "중")); // 결혼 가능
console.log(결혼가능확률(100, false, "상")); // undefined

const 숫자클리닝함수 = (input: (number | string)[]): number[] => {
  let 클리닝배열: number[] = [];

  input.forEach((x) => {
    const cleanedInput = x.toString().replace(/[^0-9.]/g, "");
    const numberValue = parseFloat(cleanedInput);
    클리닝배열.push(numberValue);
  });

  return 클리닝배열;
};

console.log(
  숫자클리닝함수(["1zzzzzzzz", 2, "3", 4, "5", "6.12345", "7qwerasdfzxcv"]) // [ 1, 2, 3, 4, 5, 6.12345, 7 ]
);

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

const 맨뒤과목반환함수 = (x: { subject: string | string[] }): string => {
  let 맨뒤과목: string = "";
  if (typeof x.subject === "string") {
    맨뒤과목 = x.subject;
  }
  if (Array.isArray(x.subject)) {
    맨뒤과목 = x.subject[x.subject.length - 1];
  }
  return 맨뒤과목;
};

console.log(맨뒤과목반환함수(민수쌤)); // korean

type HumanType = { name: string; age: number };
type AnimalType = { name: string; sex: string };
type HumanAnimal = HumanType & AnimalType;
const human: HumanType = { name: "kim", age: 20 };
const Animal: AnimalType = { name: "dog", sex: "male" };
const humanAnimal: HumanAnimal = { name: "hong", age: 20, sex: "male" };

type Style = { color?: string; size: number; position: number[] };
const style: Style = { size: 50, position: [1, 2, 3] };

type UserInfo = { name: string; phone: number; email?: string };
const userInfo: UserInfo = {
  name: "Lee",
  phone: 123,
  email: "test@email.com",
};

type Minor = { isMinor: boolean };

type UserInfoMinor = UserInfo & Minor;
const userInfoMinor: UserInfoMinor = {
  name: "park",
  phone: 123,
  isMinor: true,
};

const 가위바위보 = (x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] => {
  return ["보", "가위"];
};
가위바위보("보");

type Member = {
  name: string;
  age?: number;
  plusOne: (x: number) => number;
  changeName: (x: string) => string;
};
const 회원정보: Member = {
  name: "kim",
  plusOne: (a: number) => {
    return a + 1;
  },
  changeName: (x: string): string => {
    return "lee";
  },
};

console.log(회원정보.plusOne(9999999)); // 10000000
console.log(회원정보.changeName("park")); // lee

type CutZero = (x: string) => string;
const cutZero: CutZero = (x) => {
  const strNum = x.toString();
  return strNum.replace(/^0+/, "");
};
console.log(cutZero("0123")); // 123
type RemoveDash = (x: string) => number;
const removeDash: RemoveDash = (x) => {
  return parseFloat(x.replace(/-/g, ""));
};
console.log(removeDash("010-1111-2222")); // 1011112222

const czrd = (x: string, cutZero: CutZero, removeDash: RemoveDash) => {
  let result = cutZero(x);
  let result2 = removeDash(result);
  console.log(result2);
};
czrd("010-1234-5678", cutZero, removeDash); // 1012345678

let 제목 = document.querySelector("#title");
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://www.kakao.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", () => {
  let 이미지 = document.querySelector("#image");
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "./images/Nijika_Ijichi.PNG";
  }
  return;
});

let 링크들 = document.querySelectorAll(".naver");
링크들.forEach((element) => {
  if (element instanceof HTMLAnchorElement) {
    element.href = "https://www.daum.net";
  }
});

class Car {
  //   model: string;
  //   price: number;
  constructor(public model: string, public price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price * 0.1;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1); // {model: '소나타', price: 3000}
console.log(car1.tax()); // 300

class Word {
  num: number[];
  str: string[];
  constructor(...param: (number | string)[]) {
    // let numbers: number[] = [];
    // let strings: string[] = [];

    // param.forEach((x) => {
    //   if (typeof x === "number") {
    //     numbers.push(x);
    //   }
    //   if (typeof x === "string") {
    //     strings.push(x);
    //   }
    // });
    const { numbers, strings } = param.reduce(
      (acc, x) => {
        if (typeof x === "number") {
          acc.numbers.push(x);
        }
        if (typeof x === "string") {
          acc.strings.push(x);
        }
        return acc; // { numbers: [3, 5], strings: ["kim", "park"] }
      },
      { numbers: [] as number[], strings: [] as string[] }
    );

    this.num = numbers;
    this.str = strings;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); // [3, 5]
console.log(obj.str); // ["kim", "park"]

type A = { name: string };
type B = { age: number } & A;
let abc: B = { name: "abc", age: 1 };

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart {
  product: string;
  price: number;
}
let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface NewCart extends Cart {
  card: boolean;
}
let 새장바구니: NewCart = { product: "청소기", price: 7000, card: false };

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let mathObj: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

var 자료 = {
  name: "kim",
} as const;
/**
 * as const
 * object value를 타입으로 지정
 * object 속성들에 모두 readonly 부여
 */
function 내함수(a: "kim") {}
내함수(자료.name);

let person = { student: true, age: 20 };

function 함수임({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수임({ student: true, age: 20 });

// 숫자 여러개를 입력하면 최댓값을 return 해주는 함수
const findMaxValue = (...numbers: number[]) => {
  console.log(Math.max(...numbers));
};
findMaxValue(6, 3, 7, 2, 9);

// object 자료를 파라미터로 입력할 수 있는 함수
// destructuring 문법
type PrintAllArgs = {
  user: string;
  comment: number[];
  admin: boolean;
};
const printAllArgs = ({ user, comment, admin }: PrintAllArgs) => {
  console.log(`Argument {user: ${user}, comment: ${comment}, admin: ${admin}}`);
};
printAllArgs({ user: "kim", comment: [3, 5, 4], admin: false });

// array 자료를 파라미터로 입력할 수 있는 함수
const printAllArgs2 = ([a, b, c]: (number | string | boolean)[]): void => {
  console.log(`Argument ${a} ${b} ${c}`);
};
printAllArgs2([40, "wine", false]);

// null & undefined 체크하기 위한 narrowing
const checkNullOrUndefined = (x?: string) => {
  // if (typeof x === "string") {
  //   return console.log(`입력된 값: ${x}`);
  // }
  // else {
  //   console.log("입력된 값이 없습니다.");
  // }
  if (x && typeof x === "string") {
    return console.log(`입력된 값: ${x}`);
  }
};
checkNullOrUndefined();

// in 연산자로 object 자료 narrowing
type Fish = { swim: string };
type Bird = { fly: string };
function hasProperty(animal: Fish | Bird): string {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}
console.log(hasProperty({ swim: "물고기 입니다." }));
console.log(hasProperty({ fly: "새 입니다." }));

// class로부터 생산된 object는 instanceof로 narrowing
let date = new Date();
if (date instanceof Date) {
  console.log("Data class로부터 생상된 Object입니다.");
}

// literal type의 narrowing
// type Boat = {
//   wheel: "0개";
//   color: string;
// };
// interface Bike {
//   wheel: "2개";
//   color: string;
// }
const checkVehicle = (x: Boat | Bike): void => {
  if (x.wheel === "0개") {
    console.log("이 보트의 색상은 " + x.color + " 입니다.");
  } else {
    console.log("이 오토바이의 색상은 " + x.color + " 입니다.");
  }
};

checkVehicle({ wheel: "0개", color: "회색" });
checkVehicle({ wheel: "2개", color: "검정색" });

// never type
const throwErrorOrInfiniteLoop = (): never => {
  /**
   * never type은 절대 발생하지 않는 값의 타입
   * 예를 들어
   * 1. 함수가 정상적으로 종료되지 않고, 예외를 던지거나 프로그램이 종료되는 함수의 반환 타입
   * throw new Error()
   * 2. 끝나지 않는 함수 (무한 루프)
   * while(true) {}
   */
  throw new Error();
};

// 객체지향 언어에서 제공하는 public, private, static, protected 키워드 사용
class Human {
  // firstname;
  private lastname: string = "Kim";
  username: string;
  protected sex: string = "male";
  static AGE = 20; // 유전자 안 내려주고 부모만 쓸 거임
  private static config: { [key: string]: string } = {}; // 클래스 내부에서만 접근할 수 있도록 할 거임
  constructor(public firstname: string) {
    this.firstname = firstname;
    this.username = firstname + " " + this.lastname;
  }
  setLastName() {
    this.lastname = "Park";
  }
  static setConfig(key: string, value: string) {
    this.config[key] = value;
  }
  static getConfig(key: string) {
    return this.config[key];
  }
}

let man = new Human("Minsoo");
console.log(`firstname: ${man.firstname}`);
// man.lastname; // 'lastname' 속성은 private이며 'Man' 클래스 내에서만 액세스할 수 있습니다.
console.log(`username: ${man.username}`);
man.setLastName(); // Kim -> Park
console.log(man); // {firstname: 'Minsoo', lastname: 'Park', username: 'Minsoo Kim'}

class Man extends Human {
  changeLastname() {
    // this.lastname = "Lee"; // 'lastname' 속성은 private이며 'Human' 클래스 내에서만 액세스할 수 있습니다.
  }
  changeSex() {
    this.sex = "female";
  }
}

let man2 = new Man("Gildong");

// 일반 변수에 접근하는 경우
// man2.age; // 가능
// Man.age; // 불가능 'typeof Man' 형식에 'age' 속성이 없습니다.

// static 변수에 접근하는 경우
// man2.AGE; // 'age' 속성이 'Man' 형식에 없습니다. 대신 정적 멤버 'Man.age'에 액세스하려고 하셨습니까?
Man.AGE; // 가능

// Human.config // 'config' 속성은 private이며 'Human' 클래스 내에서만 액세스할 수 있습니다.
Human.setConfig("취미", "낚시");
console.log(Human.getConfig("취미")); // 낚시

/**
 * x, y, z 속성의 특징
 *
 * x는 나만 접근할 수 있도록 할 거임 / 클래스 내부(부모)에서만 접근 가능한 메서드를 통해서 제어 가능 / 부모에서만 수정 가능
 * y는 유전자 안 내려주고 나(부모 class)만 접근할 수 있도록 할 거임 / 인스턴스(자식)가 아니라서 클래스 자체(부모)에만 속하는 변수
 * z는 자식 class한테 까지만 내려줄 거임 / 나, 자식 클래스에서만 접근 가능하고 클래스 외부에서는 접근 안 됨 / 인스턴스를 통해서 접근이 안 됨
 *
 * x는 클래스의 내부 로직에 필요한 데이터나 메서드, 외부에서 접근하면 안 되는 설정 값 같은 거 쓸 때 씀
 *
 * y는 인스턴스에서 공유하고 싶은 상수나 유틸리티 함수 같은 거 내려주고 싶을 때
 * 그래서 이거 안 하면 예를 들어서 부모 클래스에서 static PI = 3.14 같은 거 할 때
 * static 안 해주면 인스턴스에서 "자식.pi = 3.14" 이런 거 해 줘야하고
 * 자식 100만개면 "자식.pi = 3.14" 이런 거 100만개 해 줘야 됨.
 *
 * z는 자식 클래스에서 부모 클래스의 특정 기능을 확장하거나 수정하고 싶을 때 씀.
 */
class User {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

// x 속성에 숫자를 더해주는 함수
class Coordinates {
  private static x = 10;
  public static y = 20;
  static addOne(number: number) {
    let a = (Coordinates.x += number);
    console.log(a);
  }
  static printX() {
    console.log(Coordinates.x);
  }
}
Coordinates.addOne(3); // 이렇게 하면 x가 3 더해져야 함
Coordinates.addOne(4); // 이렇게 하면 x가 4 더해져야 함
Coordinates.printX(); // 이렇게 하면 콘솔창에 x값이 출력되어야 함

// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치
class Square {
  constructor(public a: number, public b: number, public c: string) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  draw() {
    let x = Math.random() * (400 - 30);
    let y = Math.random() * (400 - 30);
    let content = `<div style="background-color: ${this.c}; width: ${this.a}px; height: ${this.b}px; position: absolute;
          left: ${x}px;
          top: ${y}px;"></div>`;
    let drawing = document.querySelector("#drawing");
    drawing?.insertAdjacentHTML("beforeend", content);
  }
}
let square = new Square(30, 30, "red");
square.draw();
square.draw();
square.draw();
square.draw();

// 파라미터로 object 하나를 선택적으로 집어넣을 수 있고 아무것도 return 해주지 않는 함수
let objectFunction1: ObjectFunction = () => ({ name: "Alice", age: 30 });
console.log(objectFunction1);
let objectFunction2: ObjectFunction = () => {};
console.log(objectFunction2);

// namespace 활용
namespace 강아지 {
  export type Dog = string;
}
namespace 개 {
  export interface Dog {
    name: string;
  }
}

let dog1: 강아지.Dog = "bark";
let dog2: 개.Dog = { name: "paw" };

console.log(dog1);
console.log(dog2);

/**
 * 주어진 인자의 길이를 출력하는 함수입니다.
 *
 * @param input - 문자열 또는 문자열 배열을 입력받습니다.
 */
function logLength<InputType extends string | string[]>(
  input: InputType
): void {
  console.log(input.length);
}

// 문자열 인자를 사용한 예시
logLength<string>("hello"); // 출력: 5

// 문자열 배열 인자를 사용한 예시
logLength<string[]>(["kim", "park"]); // 출력: 2

/**
 * 동물의 속성을 정의하는 인터페이스입니다.
 */
interface Animal {
  name: string; // 동물의 이름
  age: number; // 동물의 나이
}

/**
 * JSON 문자열을 받아 지정된 타입으로 파싱하는 함수입니다.
 *
 * @param jsonString - JSON 형식의 문자열입니다.
 * @returns 지정된 타입으로 파싱된 객체를 반환합니다.
 */
const parseJson = <Type>(jsonString: string): Type => {
  return JSON.parse(jsonString);
};

// JSON 문자열 예시
const jsonData = '{"name": "dog", "age": 1}';

// Animal 인터페이스에 맞춰 JSON 문자열을 파싱합니다.
const result = parseJson<Animal>(jsonData);

// 파싱된 결과를 출력합니다.
console.log(result);

/**
 * 사람(Person)을 나타내는 제네릭 클래스입니다.
 *
 * @template T - 이름의 타입을 나타내는 제네릭 타입 매개변수입니다.
 */
class Person<T> {
  name: T; // 사람의 이름을 나타내는 속성

  /**
   * Person 클래스의 인스턴스를 생성하는 생성자입니다.
   *
   * @param name - 이름을 설정하기 위한 값입니다. 타입은 제네릭 T입니다.
   */
  constructor(name: T) {
    this.name = name;
  }
}

// 문자열 타입을 사용하여 Person 인스턴스를 생성합니다.
const personInstance = new Person<string>("인간");

// personInstance의 name 속성에 접근합니다.
console.log(personInstance.name); // 출력: '인간'
