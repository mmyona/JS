//객체 만들기 - 1

const user={ //객체
    name:"hyona", //프로퍼티
    number:"689",
    print(sth){ //메소드
        console.log(sth.name);
    },
};

const item={
    name:'apple',
    number:'1',
}

console.log(user);
user.print(item);

//객체 만들기 - 2
//factory function
function createUser(name,num){ 
    const user={ //객체를 만들고
        name:name, //파라미터로 받은 값을 그대로 객체에 전해주고
        num:num,
    };
    return user; //만들어진 객체를 리턴해준다
}

const user1=createUser('임현아','22');
const user2=createUser('임현아','23');
const user3=createUser('임현아','24');

// 객체 만들기 - 3
//constructor function, 생성자 함수
function User(name,num){
    this.name=name;
    this.num=num;
    this.print=function(sth){
        console.log(sth.name);
    };
}

const user4=new User('임현아','25');

console.log(user4);
user4.print(item);

// 객체 만들기  - 4
class User2{
    constructor(name,num){
        this.name=name;
        this.num=num;
    } //프로퍼티
    print (sth){
        console.log(sth.name);
    }; //메소드

    set num(number){ //캡슐화
        if(num>0){
            this._num=num;
        } else{
            throw new Error('invalid number.');
        }
    }

    get num(){ //캡슐화
        return this._num;
    }
//프로퍼티랑 메소드를 분리해서 쓴다. 
// -> constructor function이랑 분리
}

const user5=new User2('임현아','25');


//상속
// -> 코드의 재사용성이 좋아진다.
class Userr{ //부모
    constructor(name,num){
        this.name=name;
        this.num=num;
    } //프로퍼티
    print (sth){
        console.log(sth.name);
    }; //메소드
}

class PremiumUser extends Userr{ //자식
    constructor(name,num,level){
        super(name,num); //부모 클래스의 constructor 불러와줘야 함
        this.level=level;
    } //프로퍼티
    printLevel (sth){
        console.log(sth.level);
    }; //메소드
    print(sth){ 
        //1. 다형성 (오버라이딩)
        //자식 클래스에서 부모 클래스와 이름은 동일하지만,
        //동작은 다른 메소드를 정의해 사용하는 것

        super.print(sth); //2. 부모 클래스의 메소드 가져다가 사용
        console.log(`이름은 ${sth.name}입니다.`);
    }
}

const boy=new PreminumUserr('헨리','20','2');
console.log('상속');
boy.printLevel(sth);

//다형성
// : 많은 형태를 가지고 있는 성질


//instanceof
// -> true/false 출력됨

//static 프로퍼티 & 메소드
// : 클래스에 직접적으로 딸려있는 프로퍼티 & 메소드
class Math{
    static PI=3.14;

    static getCircleArea(r){
        return Math.PI*r*r;
    }
}
console.log(Math.PI);
console.log(Math.getCircleArea(5));
console.log(Date.now());



