const myInput = document.querySelector('#my-input'); //입력한 값
const key = document.querySelector('#key'); //key 값
const code = document.querySelector('#code'); //code 값

function onkeyEvent(e) {
  const eventBtn = document.querySelector(`#${e.type}`); //key 값
  eventBtn.classList.add('check');

  const el = document.querySelector(`#${e.code}`); //code 값
  el.classList.add('on');

  if (e.type === 'keyup') { //key를 눌렀다가 뗌
    el.classList.remove('on');
  } else if (e.type === 'keydown') { //key를 누름
    key.textContent = `key: ${e.key}`; //key값 보여줌
    code.textContent = `code: ${e.code}`; //code값 보여줌
  }

  setTimeout(function() {eventBtn.className = 'event'}, 300);
}

myInput.addEventListener('keydown', onkeyEvent);
myInput.addEventListener('keypress', onkeyEvent);
myInput.addEventListener('keyup', onkeyEvent);

/** 
 * [키보드 이벤트]
 * 
 * > KeyboardEvent.type
 * keydown: 키보드 버튼을 누른 순간
 * keypress: 키보드 버튼을 누른 순간
 * keyup: 키보드 버튼을 눌렀다 뗀 순간
 * 
 * > KeyboardEvent.key
 * : 이벤트가 발생한 버튼의 값
 * 
 * > KeyboardEvent.code
 * : 이벤트가 발생한 버튼의 키보드에서 물리적인 위치
 */