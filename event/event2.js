// 이벤트 등록하기
let btn = document.querySelector('#myBtn');

// btn.onclick = function () {
// 	console.log('Hi Codeit!');
// };

function event1() {
	console.log('Hi Codeit!');
}

function event2() {
	console.log('Hi again!');
}
//외부에 함수를 만들어서 핸들러로 전달해줘야 함

// elem.addEventListener(event, handler)
//이벤트핸들러 등록하는 방법
btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// elem.removeEventListener(event, handler)
//이벤트핸들러 삭제하는 방법
btn.removeEventListener('click', event2);
//이벤트 삭제할 때는, 등록할 때와 같은 함수(핸들러)를 써야 함

// 이벤트 위임 (Event Delegation)
//자식 요소에서 발생하는 이벤트를 -> 부모 요소에서 다루는 것 (위임한 것)
const list = document.querySelector('#list');
list.addEventListener('click', function(e) {
	// if (e.target.tagName === 'LI')
	if (e.target.classList.contains('item')) {
		e.target.classList.toggle('done');
        //부모 요소에 event handler를 등록한 것
	}
});
//이게 더 효율적
//event bubbling을 이용한 것
//자식 요소에 event가 발생하면 그게 부모 요소까지 타고 올라옴
//이벤트 위임 시에는,
//원하는 범위를 확실히 표시해줘야 함

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);
//만약 이렇게 list를 추가하게 되면,
//따로 eventListener를 등록해줘야 한다는 불편함이 있음
//그래서 이벤트 위임을 써주는 것

li.addEventListener('click', function(e) {
  e.stopPropagation();
});
//이런 식으로 버블링을 막을 수도 있지만
//정말 필요한 경우가 아닌 이상, 버블링을 막는 건 별로임


// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

//preventDefault
//브라우저의 기본 동작 막기
//꼭 필요할 때만 사용하는 게 좋다
//각 HTML 태그들이 가지고 있는 고유한 역할과 의미를 훼손하게 될 수도 있기 때문에 preventDefault 메소드는 꼭 필요한 경우에만 주의해서 사용해야 한다는 점. 
link.addEventListener('click', function(e) {
	e.preventDefault();
	alert('지금은 이동할 수 없습니다.');
});

input.addEventListener('keydown', function(e) {
	if (!checkbox.checked) {
		e.preventDefault();
		alert('체크박스를 먼저 체크해 주세요.');
	}
});

//문서 전체에서(이 범위도 다르게 설정 가능) 마우스 우클릭 방지 + 경고창 띄우기
document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
	alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});

