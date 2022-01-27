//argument : 함수를 호출할 때, 매개변수에 전달해주는 값
//함수 내부에서 arguments 객체를 사용하면 -> argument가 할당되지 않은 경우에 유연하게 대처 가능

function printArgument(a,b,c){
    console.log('function ver.1');
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(arguments); //arguments 객체 : 유사 배열 객체
    //배열이랑 형태는 비슷하지만, 완전 배열은 아님.
    //index로 접근도 가능, for of문도 사용 가능.
    //그런데, 배열 메소드는 사용 불가능
    console.log('-------------');
}

printArgument('Young','Mark','Tom');
printArgument('Happy','Sad','Funny');

//parameter 이름을 arguments로 하면 안됨!!

//rest parameter 
// -> ...args 이렇게 쓴다

function printArg(...args){
    console.log('function ver.2');
    console.log(args.splice(0,2));
    console.log(args);
    console.log('-----------');
};

printArg('Young','Mark','Tom');
printArg('Happy','Sad','Funny');

function printBank(first, second, ...others){
    //여기서 others는 앞의 파라메터들을 배열로 묶는 역할. 
    //그래서 맨 뒤에 쓰여져야 한다.
    //필요에 따라 부분적으로 유연하게 파라메터들을 다루는 좋은 방법.
    //arguments 객체의 단점을 보완 -> 그래서 거의 arguments 대신 rest 객체를 많이 사용하는 추세
    console.log('function ver.3')
    console.log('최종 결과')
    console.log(`우승 : ${first}`)
    console.log(`준우승 : ${second}`)
    for(const arg of others){
        console.log(`참가자 : ${arg}`)
    }
}
printBank('Young','Mark','Tom');
printBank('Happy','Sad','Funny');

//첫번째 파라미터 건너 뛰고 출력하는 함수
//1
function ignoreFirst(...args){
    const newArgs=args.slice(1);
    for(const arg of newArgs){
      console.log(arg);
    }
  };
  
  ignoreFirst('1세대', '2세대', '3세대');
  ignoreFirst('곰팡이', '강아지', '고양이');
  ignoreFirst(20, 9, 18, 19, 30, 34, 40);

  //2
  function ignoreFirstt(first, ...rest) {
    for (const el of rest) {
      console.log(el);
    }
  }
  
  ignoreFirstt('1세대', '2세대', '3세대');
  ignoreFirstt('곰팡이', '강아지', '고양이');
  ignoreFirstt(20, 9, 18, 19, 30, 34, 40);