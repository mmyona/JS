//ES2015 처음 등장한 arrow_function
// : 이름이 없는 익명 함수

const getTwice=(num)=>{
    return num*2;
};

console.log(getTwice(5));

const myBtn=document.querySelector('#myBtn');

myBtn.addEventListener('click',()=>{
    console.log('button is clicked!');
});
//기본적인 arrow function의 형태


//이렇게 아예 한 줄로 줄여버릴 수도 있음.
const getTwiceTwice=num=>num*2*2;
//파라미터가 하나인 arrow function은 () 생략 가능
//만약 2개 이상이면, () 생략 안됨.
//const getTwiceTwice=(num)=>num*2*2; 이런 식으로

console.log(getTwiceTwice(5));

const getObject = function(a, b, c) {
    return { 0: a, 1: b, 3: c };
  }
//이 함수는
const getObjectt = (a,b,c)=>({0: a, 1: b, 3: c});
//이렇게 바꿀 수 있음
//return 값으로 객체를 줄 때는 {} 밖에 ()로 한 번 더 묶어줘야 함
/*
첫 번째는 파라미터가 하나일 때 파라미터를 감싸는 소괄호 부분을 생략할 수 있습니다. 
하지만, 주어진 문제의 함수는 파라미터가 3개이기 때문에 소괄호를 생략할 수는 없겠죠?
두 번째는 함수 내부의 동작 코드가 return 문 하나일 때 중괄호와 return 키워드를 생략할 수 있습니다. 
여기서 한 가지 주의해야 할 부분이 있습니다. 
함수 내부의 동작이 return 문 하나밖에 없지만 return 값이 객체일 때 무작정 중괄호를 생략해 버리면, 객체를 표현하는 중괄호를 함수의 동작 부분을 구분하는 중괄호로 해석해 버려서 오류가 발생하기 때문입니다. 
*/

/*
화살표 함수는 기존의 함수 선언 방식을 좀 더 간결하게 만들어주는 문법
rest parameter를 사용한다거나 파라미터의 기본값을 지정하는 방식들은 기존의 함수와 똑같기 때문에 기존에 사용하던 함수 선언 방식들은 대부분 화살표 함수로 변환할 수가 있다.
단, 화살표 함수는 arguments 객체가 없어서 예외적으로 arguments 객체를 활용하는 함수는 화살표 함수로 변환하기가 어렵다.
또 한 가지 주의할 점은 모든 화살표 함수는 익명 함수라서, 변수에 할당하거나 다른 함수를 호출할 때 아규먼트로 사용된다는 점을 잘 기억해두셔야 한다.
*/
