//모던한 프로퍼티 표기법
const title='codeit';
const birth=2001;
const name='hyona';

const user1={ //객체 생성
    //더 간결하게 쓸 수 있는 방법, 축약형 표기
    //위에서 정의해둔 변수의 값을 활용한 표기
    title, 
    birth,
    name,
};

const user2={ //위에서 작성한 코드랑 완전히 똑같은 역할을 하는 코드
    firstName:'Lim',
    lastName:"Hyona",
};

console.log(user1);
console.log(user2);

const user3={
    title, 
    birth,
    name,
    print(){ //이런식으로 함수 작성할 때, fuction과 = 등을 생략 가능
        console.log(`${this.title} ${this.birth} ${this.name}`)
    },
    /*원래는
    function print(){

    }
    이런 식으로 작성했어야 하는데, 더 축약해서 쓸 수 있다는 소리
    */
};
user3.print();

const get=()=>'안녕하세요';

//계산된 속성명 (computed property name)
//프로퍼티 이름을 표현식으로 나타내는 방법
const user4={
    ['Hello'+'Hi']:'value',
    [name]:'임현아',
    [get()]:'안녕'
};
console.log(user4);


function getAge() {
    const date = new Date(); //date 객체 -> date라는 이름의 객체로 생성
    return date.getFullYear() - this.birth + 1;
  }
  
  const user5 = {
    age:getAge,
    name: 'codeit',
    birth: 2017,
  };
  console.log(user5);