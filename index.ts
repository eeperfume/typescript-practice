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

type Human = { name: string; age: number };
type Animal = { name: string; sex: string };
type HumanAnimal = Human & Animal;
const human: Human = { name: "kim", age: 20 };
const Animal: Animal = { name: "dog", sex: "male" };
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
