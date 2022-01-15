const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}

function flagUp(e) {
  if(e.button===0){
    flagBlue.classList.add('up'); 
  }
else if(e.button===2){
    flagWhite.classList.add('up'); 
}
  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

//마우스 오른쪽 버튼 클릭시 나타나는 메뉴창을 막음 
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);

/*이번 실습에서 해결해야될 과제는 총 2가지 입니다.
마우스 버튼에 따라서 청기(flagBlue)와 백기(flagWhite)에 'up'이라는 클래스 속성값을 추가해야하고, 마우스 오른쪽 버튼을 눌렀을 때 나타나는 옵션창을 막아야 하는데요.

일단, 첫 번째부터 해결해 봅시다.
자바스크립트 파일의 마지막 테스트 코드 부분을 보면 flagUp 함수는 document 객체의 mousedown 타입의 이벤트 핸들러로 등록되어 있습니다.
다시 말해 웹 페이지 어디서든, 마우스의 어떤 버튼이 눌리는 순간 flagUp 함수가 호출된다는 의미인데요.

이런 상황에서 마우스 버튼을 구분하는 방법은 마우스 이벤트 객체의 button 프로퍼티를 활용하는 겁니다.
만약, 마우스 이벤트가 마우스 왼쪽 버튼을 눌러서 발생했다면 0, 마우스 오른족 버튼을 눌러서 발생했다면 2라는 값을 가지게 되는데요.

그래서 이 button 프로퍼티를 조건문과 함께 다음과 같이 활용하면 생각보다 간단하게 flagUp 함수를 완성할 수 있습니다.
*/