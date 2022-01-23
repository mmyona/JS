const input=document.querySelector('#input');

function checker(){
    const words=document.querySelectorAll('.word');
    if(words.length===0){ //모든 단어를 맞췄을 경우
        alert('Success!'); //알림창 띄운다.
        if(confirm('retry?')){ //다시 게임 시작
            window.location.reload();
        }
    }  
}

/*더 추가할 기능
1. 입력값과 일치하는 단어를 가진 요소가 있으면 그 요소를 삭제해야 한다.
2. 이벤트 핸들러가 호출되면 input 태그는 매번 초기화되어야 한다.
3. 단어를 삭제했다면 checker 함수가 호출되어야 한다.
*/

function deleteWords(){
    const word = document.querySelector(`[data-word="${input.value}"]`);
    if (word) {
      word.remove(); //1
      checker(); //3
    }
  
    input.value = ''; //2
}

input.addEventListener('change', deleteWords);
/*
- comment -

input은 값이 입력되는 순간마다 발생하고 
change는 입력된 값이 바뀌는 순간, 혹은 입력이 완료된 순간에 발생한다고 배웠었죠?

매번 입력할 때마다 값을 확인해서 태그를 삭제할 수도 있지만, 
그러면 이벤트 핸들러가 불필요하게 호출되는 경우가 많아지기도 하고 
사실 이번 과제에서는 이벤트 핸들러가 호출되면 
이벤트 핸들러 조건 2에 의해서 input 태그가 항상 초기화되어야 하다 보니 
input 타입은 사용하기가 어렵습니다.

심지어 text 타입의 input 태그에서는 enter키를 누르는 것으로 change 이벤트를 발생시킬 수 있다는 것도 떠올려보면, 
이번 실습에서는 change 타입으로 이벤트 핸들러를 등록하는 것이 과제의 조건을 떠나서라도 성능적인 부분과 UX적인 부분에서 더 좋은 것 같습니다.
*/