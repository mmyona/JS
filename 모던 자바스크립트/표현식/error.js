/*에러 & 에러 객체
 : 에러가 발생하면, 자동으로 에러 객체를 생성 -> 에러 메세지를 띄운다
- syntax error
- type error ...
에러가 발생하면, 작동을 멈춤
 */

//직접 에러 객체 만들기
const error=new TypeError('타입 에러가 발생했습니다.');
console.log(error.name);
console.log(error.message);
//이건 그냥 에러 객체를 만든 것, 에러를 직접 발생시킨 것은 아님

//에러 발생시키기
//throw error;
console.log('끝! 에러 후'); // 이건 error 발생 뒤 코드이기 때문에 -> 작동하지 않는다.


//error 다루기
// : typ catch문

try{
    console.log('에러 전');
    throw error;
    console.log('에러 발생!'); //이건 동작하지 않음
} catch(error){ //try문에서 발생한 에러가 (error) -> catch문의 첫 번째 파라미터로 전달된다
    console.log('끝! 에러 후');
    console.error(error);
    console.log(error.name);
    console.log(error.message);
} //error가 발생하면 -> 이 catch문이 동작
//error가 발생하지 않으면, try문만 동작 O, catch문은 동작 X

//try catch문 활용하기
// -> fuction같은 곳에서 활용 가능

//* 주의
//실행이 가능한 코드에서 발생한 에러를 다룬다!
// -> exception handling (예외 처리)라고 부른다

