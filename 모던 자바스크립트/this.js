//this 

//함수를 호출한 객체를 가리키는 keyword
//함수가 호출될 때, this의 값이 결정된다.
//상대적으로 this의 값이 변화하게 된다.
//this의 기본값은 window 객체

//* 주의점 : 일반 함수/errow 함수의 차이 
//-> errow 함수에서의 this값은 조금 다르게 동작함
//-> this 사용 시에는 일반 함수 사용이 권장됨

function getFullname(){
    return `${this.firstName} ${this.secName}`;
};

const user1={
    firstName:'임',
    secName: '현아',
    getFullname:getFullname,
};

const user2={
    firstName:'Lim',
    secName: 'Hyona',
    getFullname:getFullname,
};

console.log(user1.getFullname());
console.log(user2.getFullname());