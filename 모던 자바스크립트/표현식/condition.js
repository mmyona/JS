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
const num=[1,2,3];
console.log(... num);
console.log(1,2,3);
//이렇게 하면 위 아래 똑같은 결과가 출력됨

// rest parameter와 비슷한 형태
//근데 rest는 묶는 역할, spread는 펼치는 역할
