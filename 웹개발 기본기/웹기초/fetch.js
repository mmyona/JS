fetch("https://www.google.com")
  .then((response) => response.text()) //콜백함수
  .then((result) => {
    console.log(result);
  }); //콜백함수*****
// 콜백함수 : 콜백함수 이전의 함수가 실행된 후에야 실행된다.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())

  .then((result) => {
    const users = JSON.parse(result);
    console.log(users.length);
    users.forEach((user) => {
      console.log(user.name);
    });
  });

//POST
const newMember = {
  name: "Jerry",
  email: "jerry@codeitmail.kr",
  department: "engineering",
};

fetch("https://learn.codeit.kr/api/members", {
  //새로운 argument 추가
  method: "POST", //request의 method값을 post로 설정한다는 뜻
  body: JSON.stringify(newMember),
  /*
parse() <-> stringify() 서로 반대되는 메소드 (형변환)
pasrse() : json -> js
stringify() : js(배열(객체) 타입) -> json (string타입)
    */
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

//PUT
const changeMember = {
  name: "Jerry",
  email: "jerry@codeitmail.kr",
  department: " marketing",
};

fetch("https://learn.codeit.kr/api/members/2", {
  //수정 대상
  method: "PUT",
  body: JSON.stringify(changeMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

//DELETE
fetch("https://learn.codeit.kr/api/members/2", {
  //수정 대상
  method: "DELETE",
  //굳이 body 프로퍼티 필요하지 않음
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

//content-type 추가하는 법

/*const newMember = {
    name: 'Henry',
    email: 'henry@codeit.kr',
    department: 'engineering',
  };*/

fetch("https://learn.codeit.kr/api/members", {
  method: "POST",
  headers: {
    // 추가된 부분
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

//fetch 함수와 비동기 실행

/*promise 객체
: fetch함수 -> promise 객체를 리턴
: promise 객체가 fulfilled 됐을 때 -> promise 객체는 작업 성공 결과(=response, result) 를 갖게 된다.
-> then 메소드를 사용하면...
promise 객체가 fulfilled 상태가 됐을 때 등록해뒀던 콜백이 실행되게 할 수 있음
-> 콜백 함수
*/

//promise chaining
// : 비동기작업을 순차적으로 진행해야 할 때.

//catch 메소드

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .catch((error) => {
    console.log(error);
  })
  .then(undefined, (error) => {
    console.log(error);
  }) //이거랑 위의 줄 catch문이랑 완전히 같은 의미를 갖는다
  //그니까, catch 메소드는 then 메소드를 변형한 것이라고 알아둬도 됨.
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("exit");
  });
//항상 실행해야 하는 코드는 finally 메소드를 사용함
//보통 catch 메소드 바로 뒤에 쓴다.

//promise 객체 직접 만들기
//fullfilled 상태
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});
p.then((result) => {
  console.log(result);
});

//rejected 상태
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("fail"));
  }, 2000);
});
p2.then((error) => {
  console.log(error);
});

//async 와 await

async function fetchAndPrint() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.text();
  console.log(result);
}

fetchAndPrint();
