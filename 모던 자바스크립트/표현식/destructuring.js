// 구조 분해 (Destructuring)
// : 객체나 배열의 구조를 분해하는 문법

// - 배열에 적용하는 방법
const rank=['a','b','c'];

/*const veryGood=rank[0];
const good=rank[1];
const bad=rank[2];*/
// -> 얘를 구조 분해로 작성하면 다음과 같음
const [veryGood,good,...bad]=rank;
//rank배열의 요소들이 순서대로 할당됨
//할당되는 값이 배열의 형태여야 함
//할당하는 배열의 길이와, 할당할 배열의 길이는 달라도 됨
// case : 할당하는 배열의 길이 > 할당받을 배열의 길이
//마지막 요소에 ...을 써주면 -> 배열의 요소들 중 남은 것들을 모두 할당해줌

//case : 할당하는 배열의 길이 < 할당받을 배열의 길이
//차례대로 할당된 후, 나머지는 undefined 값으로 할당된다

console.log(veryGood);
console.log(good);
console.log(bad);

//값 교환에도 활용 가능
//원래는 temp 변수를 따로 만들어서 값을 저장해두고, 값을 교환했어야 함

let iphone='현아';
let ipad='임현아';

console.log(iphone, ipad);

[iphone,ipad]=[ipad,iphone]; //이렇게 해주면 두 변수의 값 서로 교환 가능

console.log(iphone, ipad); 



// - 객체에 적용하는 방법

const user={ 
    title:'codeit', 
    birth:2001,
    name:'임현아',
};

/*const title=user.title;
const birth=user.birth;*/
// -> 얘를 구조 분해로 작성하면 다음과 같음

const {title:head,birth,color='red'}=user;
//할당한 객체에 
//할당 받으려는 객체와 똑같은 프로퍼티 이름이 있으면, 
//할당된다!
// -> 객체에 존재하지 않는 프로퍼티 이름으로 할당을 받으려 하면, undefined값이 할당된다

//color에 기본값을 설정해준 것
//title -> head로 프로퍼티 이름을 바꿔준 것, 새로운 이름으로 변수 선언하는 방식

console.log(head, birth,color);



//실습 과제

// 1. Destructuring 문법을 사용해서 title, artist, year, medium 변수에 myBestArt 객체의 각 프로퍼티를 할당해 주세요.
const myBestArt = {
	title: '별이 빛나는 밤에',
	artist: '빈센트 반 고흐',
	year: 1889,
	medium: '유화',
};

const {title,artist,year,medium}=myBestArt;

// 2. Destructuring 문법을 활용해서 myBestSong의 프로퍼티 중 title과 artist는 각각 songName과 singer라는 변수에, 나머지는 rest라는 변수에 객체로 할당해 주세요.
const myBestSong = {
	title: '무릎',
	artist: '아이유(IU)',
	release: '2015.10.23.',
	lyrics: '모두 잠드는 밤에...'
};

const {title:songName, artist:singer, ...rest}=myBestSong;

// 3. printMenu 함수 안에 잘못 작성된 Destructuring 코드를 수정해 주세요.
const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };

function printMenu(menu) {
	//  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true여야 합니다.
	const {name, ice=true} = { ...menu };

	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}

// 테스트 코드
console.log(title);
console.log(artist);
console.log(year);
console.log(medium);
console.log(songName);
console.log(singer);
console.log(rest);
printMenu(menu1);
printMenu(menu2);
printMenu(menu3);



//destructuring과 함수
//parameter 부분에서 바로 destructuring 활용 가능
