"use strict";
// ===========================
// 변수에 타입 지정
// ===========================
let lastname = "Lee";
let age = 31;
let placeOfBirth = "Seoul";
// ===========================
// 변수에 타입 지정 (object)
// ===========================
let favoriteMusic = {
    song: "Burning",
    artist: "Hitsujibungaku",
};
// ===========================
// 변수에 타입 지정 (array inside an object)
// ===========================
let project = {
    member: ["Kim, Park"],
    days: 30,
    started: true,
};
// ===========================
// 변수에 타입 지정 (union type)
// ===========================
let arr = [1, "2", 3];
let obj = { data: "123" };
// ===========================
// 변수에 타입 지정 (undefined)
// ===========================
let lastname1 = "Kim";
let age1 = undefined;
let married = false;
let minsoo = [lastname1, age1, married];
// ===========================
// 변수에 타입 지정 (union type)
// ===========================
let school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
// ===========================
// 함수에 타입 지정 (void)
// ===========================
const hello = (name) => {
    console.log(`안녕하세요. ${name}.`);
};
hello("홍길동");
// ===========================
// 함수에 타입 지정 (union type)
// ===========================
const getLength = (input) => {
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
const calculateMarriageProbability = (monthlyIncome, hasHouse, attractivenessScore) => {
    let sum = 0;
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
const convertCharactersToNumbers = (mixedInput) => {
    let array = [];
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
const getLastSubject = (subjects) => {
    if (typeof subjects.subject === "string") {
        return subjects.subject;
    }
    else if (Array.isArray(subjects.subject)) {
        return subjects.subject[subjects.subject.length - 1];
    }
    else {
        return "";
    }
};
let cheolsu = { subject: "math" };
let younghee = { subject: ["science", "english"] };
let minsu = { subject: ["science", "art", "korean"] };
console.log(getLastSubject(cheolsu)); // math
console.log(getLastSubject(younghee)); // english
console.log(getLastSubject(minsu)); // korean
let account = { name: "kim", phone: 123, email: "abc@naver.com" };
let item = { size: 10, position: [1, 2, 3] };
// item.position = [2, 3, 4]; // 'position'에 할당할 수 없습니다. 이는 읽기 전용 속성이기 때문입니다.
// readonly 키워드를 설명하려면...
const username = {
    lastname: "Lee",
};
username.lastname = "Ahn"; // const 변수인데 오류가 나지 않음
let account2 = {
    name: "kim",
    phone: 123,
    email: "abc@naver.com",
    isMinor: false,
};
let ab = { name: "Lee", age: 31, sex: "male" };
console.log(ab); // { name: 'Lee', age: 31, sex: 'male' }
const rockPaperScissors = (...input) => {
    return input;
};
console.log(rockPaperScissors("가위")); // [ '가위' ]
console.log(rockPaperScissors("바위", "보")); // [ '바위', '보' ]
// rockPaperScissors(["바위", "바보"]); // 타입 오류 발생: '"바보"' 형식은 '"가위" | "바위" | "보"' 형식에 할당할 수 없습니다.
// ===========================
// as const
// ===========================
function sendName(name) { }
const userInfo1 = {
    name: "Kim",
};
// sendName(userInfo1.name); // 타입 오류 발생: 'string' 형식의 인수는 '"Kim"' 형식의 매개 변수에 할당될 수 없습니다.
const userInfo2 = {
    name: "Kim",
};
sendName(userInfo2.name); // 타입 오류가 발생하지 않음
let memberInfo = {
    name: "kim",
    age: 30,
    plusOne: (x) => x + 1,
    hello: () => console.log("안녕"),
};
console.log(memberInfo.plusOne(1)); // 2
memberInfo.hello(); // 안녕
/**
 * 주어진 문자열의 첫 번째 문자가 '0'인 경우 이를 제거하는 함수
 * @param str - 처리할 입력 문자열
 * @returns 첫 번째 문자가 '0'인 경우 이를 제거한 문자열, 그렇지 않으면 원래 문자열 반환
 */
const cutZero = (str) => {
    return str[0] === "0" ? str.slice(1) : str;
};
console.log(cutZero("0123")); // 123
console.log(cutZero("123")); // 123
/**
 * 주어진 문자열에서 모든 대시 기호를 제거하고, 숫자 타입으로 반환하는 함수
 * @param str - 처리할 입력 문자열
 * @returns 대시가 제거된 후 숫자로 변환된 값 반환
 */
const removeDash = (str) => {
    let result = str.replace(/-/g, ""); // - 제거
    return parseFloat(result);
};
console.log(removeDash("1234-5678")); // 12345678
/**
 * 입력 문자열을 처리하여 선행 0을 제거하고 대시를 제거한 숫자를 출력합니다.
 * @param input - 처리할 입력 문자열
 * @param cutZero - 입력 문자열에서 선행 0을 제거하는 함수
 * @param removeDash - 입력 문자열에서 대시를 제거하고 숫자로 변환하는 함수
 */
const processInput = (input, cutZero, removeDash) => {
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
title = document.querySelector("#title");
title.innerHTML = "안녕하세요";
// ===========================
// HTML 제어 4 (optional chaining)
// ===========================
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = "안녕하세요";
}
// ===========================
// HTML 제어 5 (optional chaining)
// ===========================
let link = document.querySelector(".link");
// if (link instanceof HTMLElement) {
//   link.href = "https://www.kakaocorp.com/"; // 'HTMLElement' 형식에 'href' 속성이 없습니다.
// }
if (link instanceof HTMLAnchorElement) {
    link.href = "https://www.kakaocorp.com/"; // 정상
}
