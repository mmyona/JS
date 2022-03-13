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

const nums=[1,2,3,4,5];

//some 메소드
// : 조건을 만족하는 요소가 1개 이상 있는지 -> true/false
console.log(nums.some((el)=>el>2));

//every 메소드
// : 모든 요소가 조건을 만족하는지 -> true/false
console.log(nums.every((el)=>el>2));

//이 두 메소드 역시 -> 반복 횟수가 다름.
//every 메소드는 조건을 만족하지 않는 요소를 찾는 순간 반복 멈춤.
//some 메소드는 조건을 만족하는 요소를 찾는 순간 멈춤
//빈 매열인 경우 -> some은 false, every는 true를 출력


//reduce 메소드 
//재귀함수 만드는 데에 이용되는 듯
/*nums.reduce((acc,el,i,arr)=>{
    return nextAccValue;
},initialAccValue);*/

const sumAll=nums.reduce((acc,el,i)=>{
    console.log(`${i}번 index의 요소로 재귀함수가 동작 중`);
    console.log('acc: ',acc); //이전까지의 함수 결과 값
    console.log('el: ',el); //현재 시행에서의 함수 결과 값
    console.log('-----------------------');
    return acc+el; //이전 + 현재 값 더해서 리턴
},0);

console.log('sumAll: ',sumAll);

//reduce 실습

const data = [ 
    { company: 'Naber', month: 3 },
      { company: 'Amajohn', month: 12 },
      { company: 'Coogle', month: 10 },
    { company: 'Ittel', month: 6 },
    { company: 'Sasung', month: 4 },
    { company: 'CaCao', month: 3 },
      { company: 'Microhard', month: 17 },
  ];
  
  // 여기에 코드를 작성해 주세요.
  const totalCareer = data.reduce((acc,{month})=>{
    return acc+month;
  },0);
  
  //같은 의미
  const totalCareer = data.reduce((acc, el) => acc + el.month, 0);
  
  console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);
  