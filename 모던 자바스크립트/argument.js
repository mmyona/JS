//argument : 함수를 호출할 때, 매개변수에 전달해주는 값
//함수 내부에서 arguments 객체를 사용하면 -> argument가 할당되지 않은 경우에 유연하게 대처 가능

function printArgument(a,b,c){
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
    for(const arg of agrs){
        console.log(arg);
    }
    console.log('-----------')
    console.log(args)
};

printArg('Young','Mark','Tom');
printArg('Happy','Sad','Funny');