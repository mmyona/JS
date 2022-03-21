fetch('https://www.google.com')
.then((response)=>response.text()) 
.then((result)=>{console.log(result);}); //콜백함수*****
// 콜백함수 : 콜백함수 이전의 함수가 실행된 후에야 실행된다.

fetch('https://jsonplaceholder.typicode.com/users')

 .then((response) => response.text())

 .then((result) => {
     const users=JSON.parse(result);
     console.log(users.length);
     users.forEach((user)=>{
         console.log(user.name);
     });
    });

//POST 
const newMember={ 
    name:'Jerry',
    email:'jerry@codeitmail.kr',
    department:'engineering',
};

fetch('https://learn.codeit.kr/api/members',{ //새로운 argument 추가
    method:'POST', //request의 method값을 post로 설정한다는 뜻
    body: JSON.stringify(newMember),
    /*
parse() <-> stringify() 서로 반대되는 메소드 (형변환)
pasrse() : json -> js
stringify() : js(배열(객체) 타입) -> json (string타입)
    */
})
.then((response)=>response.text()) 
.then((result)=>{console.log(result);});


//PUT
const changeMember={ 
    name:'Jerry',
    email:'jerry@codeitmail.kr',
    department:' marketing',
};

fetch('https://learn.codeit.kr/api/members/2',{ //수정 대상
    method:'PUT', 
    body: JSON.stringify(changeMember),
})
.then((response)=>response.text()) 
.then((result)=>{console.log(result);});

//DELETE
fetch('https://learn.codeit.kr/api/members/2',{ //수정 대상
    method:'DELETE', 
    //굳이 body 프로퍼티 필요하지 않음
})
.then((response)=>response.text()) 
.then((result)=>{console.log(result);});