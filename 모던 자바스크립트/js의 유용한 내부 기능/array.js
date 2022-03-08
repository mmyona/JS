//for each와 map
// : 배열만의 메소드
const arr=['a','b','c'];
const arr2=['A','B','C'];

for(let letter of arr){
    console.log(`${letter}이다`);
}

//위 아래 다 같은 기능

arr.forEach(function(letter){
    console.log(`${letter}이다`);
});

arr.forEach((letter,index,array)=>{
    console.log('forEach');
    console.log(`${index}: ${letter}이다`);
    console.log(array); //forEach메소드를 호출한 배열이 출력된다
}); //arrow function 형태

/*
- forEach : parameter 정리
(1,2,3) 세개 가질 수 있다.
1. forEach메소드를 호출한 배열
2. 인덱스 번호
3. 배열 -> 결국은 1번의 forEach를 호출한 배열과 같은 것을 가리키므로, 
자주 사용되지는 않음
*/

arr.map((letter,index,array)=>{
    console.log('map');
    console.log(`${index}: ${letter}이다`);
    console.log(array); //forEach메소드를 호출한 배열이 출력된다
}); //forEach -> map으로 바꿔서 그냥 실행해도 문제 없음

const newArr=arr.map((arr,i)=>{
    return arr2[i]+arr;
}); //map은 메소드의 호출 결과로 새로운 배열을 리턴한다.

//forEach는 리턴값이 없음 (*차이점) -> 변수에 forEach 값을 담으면, undefined 값이 리턴됨

console.log(newArr);

//forEach, map 메소드는 배열의 요소 개수(배열의 길이)만큼 반복됨

//실습 과제
const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성해 주세요.
const answer = quiz.map((word, i) => {
  return word[i];
});

// 테스트 코드
console.log(answer);


//filter/find 메소드

const devices=[
    {name:'galaxy', brand:'a'},
    {name:'galaxy', brand:'b'},
    {name:'apple',brand:'b'},
    {name:'apple',brand:'a'},
];

const result=devices.filter((el)=>el.brand==='a');

console.log(result);
//조건문을 이용해 조건에 맞는 배열을 필터링
//리턴값이 "배열"
//그래서 아래와 같이 spread 구문을 써서 출력해줘야 요소로 출력 가능
console.log(...result);

//find 메소드는 filter과 동일한데, 리턴값이 "값"
const result2=devices.find((el)=>el.name==='apple');
console.log(result2);
//그리고, find는 조건에 맞는 값 단 1개만을 찾음.
//그래서 -> 값을 찾는 순간 반복을 멈춤. 더 앞 인덱스에 있는 값을 리턴하게 된다.
//그치만, filter는 조건에 맞는 값을 모두 찾기 때문에
// -> 반복을 더 많이 할 수 있음.

const result3=devices.find((el,i)=>{
    console.log(i);
    return el.name==='apple';
});

console.log(result3);
