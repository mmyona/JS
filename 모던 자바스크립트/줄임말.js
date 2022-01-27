function firstWords() {
    let word = '';
  
    // 여기에 코드를 작성해 주세요.
    for(const arg of arguments){
      let argg=arg.substr(0, 1); //맨 앞글자 자르기
      word+=argg;
      //word += arg[0]; 이 한 줄로 간략히 표현 가능..!
    }
    console.log(word);
  }
  
  firstWords('나만', '없어', '고양이');
  firstWords('아니', '바나나말고', '라면먹어');
  firstWords('만두', '반으로', '잘라먹네', '부지런하다');
  firstWords('결국', '자바스크립트가', '해피한', '지름길');
  firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');