//값으로서 함수
function makeQuiz(quiz,answer,success,fail){
    if(prompt(quiz)===answer){
        console.log(success());
    } else{
        console.log(fail());
    }
};

function getSuccess(){ //콜백 함수
    return '정답!'
};

function getFail(){ //콜백 함수
    return '오답!'
};

const question='3 + 5 = ?';

makeQuiz(question,'8',getSuccess,getFail);

//고차 함수
//: 함수를 리턴하는 함수

//일급 함수 (first class function)
//: js의 함수들이 가지는 특징.
// 변수나 다른 데이터 구조에서 호출될 수 있고, 리턴값이 될 수도 있고, 다른 함수의 파라미터로도 호출될 수 있다..

//* 참고 : 자바스크립트에서 typeof 연산자로 함수의 타입을 확인하려고 하면 function 이라는 문자열이 리턴