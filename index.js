"use strict";
let username = "Lee";
// let age = 31;
let born = "Seoul";
let favoriteMusic = {
    song: "NAME",
    artist: "Tsuzuri",
};
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
let members = [1, "2", 3];
let object = { a: 123 };
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
const 함수 = (x) => {
    if (typeof x === "number") {
        console.log(x + 2);
    }
    if (typeof x === "string") {
        console.log(x + 2);
    }
};
함수(2000); // 2002
const 이름 = (name) => {
    console.log(name ? `안녕하세요. ${name}.` : "이름이 없습니다.");
};
이름("홍길동"); // 안녕하세요. 홍길동.
const 글자수세기 = (input) => {
    return input.toString().length;
};
console.log(글자수세기("1234")); // 4
const 결혼가능확률 = (월소득, 집보유여부, 매력점수) => {
    let score = 0;
    score += 월소득;
    score += 집보유여부 ? 500 : 0;
    score += 매력점수 === "상" ? 100 : 0;
    if (score > 600) {
        return "결혼 가능";
    }
};
console.log(결혼가능확률(700, false, "중")); // 결혼 가능
console.log(결혼가능확률(100, false, "상")); // undefined
const 숫자클리닝함수 = (input) => {
    let 클리닝배열 = [];
    input.forEach((x) => {
        const cleanedInput = x.toString().replace(/[^0-9.]/g, "");
        const numberValue = parseFloat(cleanedInput);
        클리닝배열.push(numberValue);
    });
    return 클리닝배열;
};
console.log(숫자클리닝함수(["1zzzzzzzz", 2, "3", 4, "5", "6.12345", "7qwerasdfzxcv"]) // [ 1, 2, 3, 4, 5, 6.12345, 7 ]
);
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
const 맨뒤과목반환함수 = (x) => {
    let 맨뒤과목 = "";
    if (typeof x.subject === "string") {
        맨뒤과목 = x.subject;
    }
    if (Array.isArray(x.subject)) {
        맨뒤과목 = x.subject[x.subject.length - 1];
    }
    return 맨뒤과목;
};
console.log(맨뒤과목반환함수(민수쌤)); // korean
const human = { name: "kim", age: 20 };
const Animal = { name: "dog", sex: "male" };
const humanAnimal = { name: "hong", age: 20, sex: "male" };
const style = { size: 50, position: [1, 2, 3] };
const userInfo = {
    name: "Lee",
    phone: 123,
    email: "test@email.com",
};
const userInfoMinor = {
    name: "park",
    phone: 123,
    isMinor: true,
};
const 가위바위보 = (x) => {
    return ["보", "가위"];
};
가위바위보("보");
const 회원정보 = {
    name: "kim",
    plusOne: (a) => {
        return a + 1;
    },
    changeName: (x) => {
        return "lee";
    },
};
console.log(회원정보.plusOne(9999999)); // 10000000
console.log(회원정보.changeName("park")); // lee
const cutZero = (x) => {
    const strNum = x.toString();
    return strNum.replace(/^0+/, "");
};
console.log(cutZero("0123")); // 123
const removeDash = (x) => {
    return parseFloat(x.replace(/-/g, ""));
};
console.log(removeDash("010-1111-2222")); // 1011112222
const czrd = (x, cutZero, removeDash) => {
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
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", () => {
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
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car1 = new Car("소나타", 3000);
console.log(car1); // {model: '소나타', price: 3000}
console.log(car1.tax()); // 300
class Word {
    constructor(...param) {
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
        const { numbers, strings } = param.reduce((acc, x) => {
            if (typeof x === "number") {
                acc.numbers.push(x);
            }
            if (typeof x === "string") {
                acc.strings.push(x);
            }
            return acc; // { numbers: [3, 5], strings: ["kim", "park"] }
        }, { numbers: [], strings: [] });
        this.num = numbers;
        this.str = strings;
    }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); // [3, 5]
console.log(obj.str); // ["kim", "park"]
let abc = { name: "abc", age: 1 };
let 학생 = { name: "kim" };
let 선생 = { name: "kim", age: 20 };
let 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
let 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
let 새장바구니 = { product: "청소기", price: 7000, card: false };
let mathObj = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
};
var 자료 = {
    name: "kim",
};
/**
 * as const
 * object value를 타입으로 지정
 * object 속성들에 모두 readonly 부여
 */
function 내함수(a) { }
내함수(자료.name);
