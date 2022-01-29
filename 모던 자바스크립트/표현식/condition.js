//조건 연산자 (conditional operator)
//조건 ? truthy 표현식 : falsy 표현식
// = 삼항 연산자

const Ascore=80;

function check(score){
    return score>Ascore ? '합격' : '불합격';
}
console.log(check(55));
console.log(check(85));

//if문보다 간결하게 표현 가능
//조건 연산자 = 표현식 -> 변수 선언이나 for문은 불가능
//-> 모든 if문 대체는 불가능


//spread 구문
//: 배열을 다룰 때 유용하다. 배열을 각각의 값으로 펼치는 기능
//1개 값 -> 여러개 값으로 펼침
//그래서 여러 값의 '목록'으로 평가된다.
const num=[1,2,3];
console.log(... num);
console.log(1,2,3);
//이렇게 하면 위 아래 똑같은 결과가 출력됨

// rest parameter와 비슷한 형태
//근데 rest는 묶는 역할, spread는 펼치는 역할

//spread를 argument로 활용 가능
function ignoreFirst(...args){
    const newArgs=args.slice(1);
    for(const arg of newArgs){
      console.log(arg);
    }
  };
  
  function ignoreFirst(...args){
    const newArgs=args.slice(1);
    for(const arg of newArgs){
      console.log(arg);
    }
  };
  
  const args=['1세대', '2세대', '3세대'];
  ignoreFirst(...args);
  //args라는 배열의 값을 펼쳐서 함수로 전달해줌
  
  //spread값 -> 여러 값의 목록 O, 하나의 값 X
  // -> 하나의 값을 펼칠 수는 없음.

  const argss={...args};
  //이렇게 하면 -> spread로 펼쳐진 값들로 구성된 '객체'가 만들어짐

//* 주의 사항
//Spread 구문을 사용해서 새로운 배열을 만든다거나 함수의 아규먼트로 사용할 수는 없다.
//그렇기 때문에 객체를 spread할 때는 반드시 객체를 표현하는 중괄호 안에서 활용해야 한다는 점


//spread 실습
const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
// 1. Spread 구문을 활용해서 sancks와 drinks 배열을 각각 mySnacks와 myDrinks 변수에 복사해 주세요.
const mySnacks = [...snacks];
const myDrinks = [...drinks];

mySnacks.splice(2, 3);
myDrinks.splice(1);

// 2. Spread 구문을 활용해서 mySnacks와 myDrinks 순서로 두 배열을 합쳐서 myChoice 변수에 할당해 주세요.
const myChoice = [...mySnacks, ...myDrinks];

// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달해 주세요.
printArguments(...myChoice);
