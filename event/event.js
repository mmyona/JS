//이벤트 - 마우스 클릭
const btn=document.querySelector('#myBtn');

//이벤트 핸들링
btn.onclick=function(){ //함수부분 -> 이벤트 핸들러
    alert('hello codeit!');
};

console.log(window);
console.log(window.innerWeight);
console.log(window.innerHeight);

//DOM (Document Object Model, 문서 객체 모델)
console.log(document);
console.log(typeof(document));
console.dir(document); //객체 형태로 다양한 프로퍼티를 출력

const title=document.querySelector('#title');
title.style.color = 'red';

//자식 요소 노드에 접근
const con=document.querySelector('#content');
console.log(con.children);

// 형제 요소 노드
console.log(con.previousElementSibling);
console.log(con.nextElementSibling);

// 부모 요소 노드
console.log(con.parentElement);

//요소 노드 프로퍼티
//innerHTML
console.log('innerHTML');
console.log(con.innerHTML);
con.innerHTML+='<li>hello!</li>'; //이렇게 수정하는 용도로 많이 사용됨

//outerHTML
console.log('outerHTML');
console.log(con.outerHTML);
con.outerHTML='<li>hello this is new! But First ha ha.</li>'; //이러면 처음 선택한 요소는 사라지게 된다.
//즉 con은 사라지고 새로운 hello!만 남게 되는 것
//요소 자체가 교체되어 버림

//textContent
console.log('textHTML');
console.log(con.textContent);
con.textContent='this is the new one!!!!';
//outerHTML처럼 요소 자체가 교체되어 버림

const newone=document.querySelector('#new');
newone.outHTML=newone.outHTML+'<p>next</p>';

//1. 요소 노드 만들기
const first=document.createElement('li');

//2. 요소 노드 꾸미기
first.textContent='처음';

//3. 요소 노드 추가하기
newone.prepend(first);

//위와 같이 반복
const last=document.createElement('li');
last.textContent='마지막';
newone.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
newone.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
newone.after(next);

//노드 삭제와 이동
const a=document.querySelector('#third');
newone.children[1].after(a.children[1]);
newone.children[1].before(a.children[1]);
newone.lastElementChild.before(a.children[1]);


// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class')); 
//그냥 접근할 때는 
console.log(item.className); //이지만
//다른 점이 있음..

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href'); 
tomorrow.removeAttribute('class'); 

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
console.log(link.href); //undefined로 출력됨 -> 메소드 이용하면 됨
console.log(tomorrow.href);

//속성 이름들은 대소문자 구분 없음

//js로 스타일 다루기
today.children[0].style.textDecoration='line-through';
//이건 좀 번거로움

//이렇게가 조금 더 편리 - 방법 1
today.children[0].className='done';

//방법 - 2 : classList -> add, remove, toggle(있으면 제거, 없으면 추가)
console.log('method2');
console.log(today.classList);
tomorrow.classList.add('done1','done2');
tomorrow.classList.remove('done1');
tomorrow.classList.toggle('done3');
tomorrow.classList.toggle('done4', true); //추가 기능만
tomorrow.classList.toggle('done2', false); //제거 기능만
//toggle은 class 하나만을 다룸, 아니면 불린 값까지 해서 두개




