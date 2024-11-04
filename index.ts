// 변수에 타입 지정
let lastname: string = "Lee";
let age: number = 31;
let placeOfBirth: string = "Seoul";

// 변수에 타입 지정 (object)
let favoriteMusic: { song: string; artist: string } = {
  song: "Burning",
  artist: "Hitsujibungaku",
};

// 변수에 타입 지정 (array inside an object)
let project: { member: string[]; days: number; started: boolean } = {
  member: ["Kim, Park"],
  days: 30,
  started: true,
};

// 변수에 타입 지정 (union type)
let arr: (number | string)[] = [1, "2", 3];
let obj: { data: number | string } = { data: "123" };

// 변수에 타입 지정 (undefined)
let lastname1: string = "Kim";
let age1: undefined | number = undefined;
let married: boolean = false;
let minsoo: (string | undefined | number | boolean)[] = [
  lastname1,
  age1,
  married,
];

// 변수에 타입 지정 (union type)
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

// 함수에 타입 지정 (void)
const hello = (name?: string): void => {
  console.log(`안녕하세요. ${name}.`);
};
hello("홍길동");

// 함수에 타입 지정 (union type)
const getLength = (input: string | number): number => {
  return input.toString().length;
};
console.log(getLength("123")); // 3
console.log(getLength(1234)); // 4

// 함수에 타입 지정 (union type and undefined)
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

// 타입 Narrowing
/**
 * 주어진 문자열에서 문자와 숫자를 숫자로 변환하여 배열로 반환하는 함수
 *
 * @param mixedInput - 문자와 숫자가 섞인 입력값 (string)
 * @returns 변환된 숫자로 구성된 배열 (number[])
 */
const convertCharactersToNumbers = (
  mixedInput: (number | string)[]
): number[] => {
  let array: number[] = [];
  mixedInput.forEach((element) => {
    typeof element === "string"
      ? array.push(parseFloat(element))
      : array.push(element);
  });
  return array;
};
console.log(convertCharactersToNumbers(["1", 2, "3", 4, 5]));

// 타입 Narrowing (Array)
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

// 타입 별칭 (Type Aliases)
type A = { name: string; age: number };
type B = { name: string; sex: string };
type C = { name: number; sex: string }; // B랑 동일한데, 'name'의 타입을 number으로 변경

type AB = A & B; // 타입 별칭을 합쳤을 때 중복된 속성이 있는 경우 => { name:string; age:number; sex:string }
type BC = B & C; // 타입 별칭을 합쳤을 때 중복된 속성이 있는 경우 + 'name'의 타입이 string과 number로 충돌하는 경우 => { name: ??; sex:string }

let ab: AB = { name: "Lee", age: 31, sex: "male" };
console.log(ab); // { name: 'Lee', age: 31, sex: 'male' }

// let bc: BC = { name: "Lee", sex: "male" }; // "타입 'string'을 타입 'never'에 할당할 수 없습니다.

// 타입 별칭 + readonly
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
 * Why?)
 * const 변수는 재할당만 막아줄 뿐, 그 안에 있는 객체의 속성을 변경하는 것까지는 막지 못함
 * 그래서 객체의 속성이 변경되지 않게 하려면 TypeScript의 readonly 키워드를 사용하면 됨
 */
