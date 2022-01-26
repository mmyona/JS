//argument : 함수를 호출할 때, 매개변수에 전달해주는 값

function printArgument(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(arguments); //arguments 객체 : 유사 배열 객체
    //배열이랑 형태는 비슷하지만, 완전 배열은 아님.
    //index로 접근도 가능, for of문도 사용 가능.
    console.log('-------------');
}

printArgument('Young','Mark','Tom');
printArgument('Happy','Sad','Funny');

//parameter 이름을 arguments로 하면 안됨!!