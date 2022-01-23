const ordsw = ['Codeit', 'JavaScript', 'DOM', 'document', 'window', 'Event', 'Bubbling', 'Delegation'];
const container = document.querySelector('#container');

//랜덤 함수
function getRandomInt(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    /*
    Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 리턴한다.
    ex)
    Math.ceil(9.5); -> 리턴값 : 10
    Math.ceil(.95); -> 리턴값 : 1
    
    Math.floor()는 그 반대의 역할을 하는 함수
    */
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  
  function init() {
    const maxPositionX = container.offsetWidth - 90;
    const maxPositionY = container.offsetHeight - 100;
/*
offsetWidth, offsetHeight

일반적으로 엘리먼트의 전체 크기를 알고 싶다면, `offsetWidth`와 `offsetHeight` 속성을 가져오면 된다.
이 속성은 엘리먼트의 패딩과 보더, 스크롤바의 사이즈를 포함한 값을 리턴한다.

clientWidth, clientHeight

만약, 실제로 보여지고 있는 컨텐츠가 얼마만큼의 공간을 차지하고 있는지 확인하고 싶다면,
`clientWidth`와 `clientHeight` 속성을 사용하는 것이 좋다.
이 속성은 보더와 스크롤바의 크기를 제외한 실제 컨텐츠의 크기를 리턴한다. (패딩은 포함하고 있다)

*/

    for (let word of words) {
      const span = document.createElement('span');
      span.classList.add('word');
      span.style.top = `${getRandomInt(20, maxPositionY)}px`;
      span.style.left = `${getRandomInt(20, maxPositionX)}px`;
      span.dataset.word = word;
      span.textContent = word;
      container.append(span);
    }
  }
  
  init();