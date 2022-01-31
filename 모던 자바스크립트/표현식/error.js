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
throw error;

console.log('끝!'); // 이건 error 발생 뒤 코드이기 때문에 -> 작동하지 않는다.