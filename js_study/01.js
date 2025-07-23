// 변수 선언 > let,const
// let : 값을 재할당할 수 있는  변수를 선언할 떄 사용
let name = "김준태";
console.log(name);
name = "이준태";
console.log(name);
const age = 27;
console.log(age);
//age = 28;
//console.log(age);

//연산자
// == 동등 연산자
let data1 = 10;
let data2 = "10";
let result1 = data1 == data2
console.log(result1)

// === 일치 연산자 값과 타입을 모두 엄격하게 비교
let result2 = data1 === data2
console.log(result2)

//typeof 연산자 : 변수의 데이터 타입을 확인
console.log(typeof data1, typeof data2)

//문자열 연결과 숫자 출력의 차이
console.log("1" + "2")
console.log(1,2)

//not 연산자
console.log(!1)
console.log(!0)
console.log(!"a")
console.log(!"")
console.log(!null)
console.log(!!null)
//!! => 값을 명시적으로 boolean 타입으로 변환하는 일반적인 방법

console.log("".length > 0)
console.log(!!"" === false)