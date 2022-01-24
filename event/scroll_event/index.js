let lastScrollY=0;

function onScroll(){
    const nav =document.querySelector('#nav');
    const toTop =document.querySelector('#to-top');
    const STANDARD=30;

    if(window.scrollY>STANDARD){ // 스크롤이 30px을 넘었을 때
    nav.classList.add('shadow');
    toTop.classList.add('show');
    } else{
        nav.classList.remove('shadow');
        toTop.classList.remove('show');
    }

    if (window.scrollY > lastScrollY) { // 스크롤 방향이 아랫쪽 일 때
        nav.classList.add('lift-up');
      } else { // 스크롤 방향이 윗쪽 일 때
        nav.classList.remove('lift-up');
      }
    
      lastScrollY = window.scrollY;
}

window.addEventListener('scroll', onSroll);
//scroll 이벤트는 보통 window 객체에 이벤트 핸들러를 등록하고 window 객체의 프로퍼티와 함께 자주 활용된다.
//특히 scrollY 프로퍼티를 활용하면 
// -> 스크롤된 특정한 위치를 기준으로 이벤트 핸들러가 동작하게 하거나 혹은 스크롤 방향(위로 스크롤 중인지/아래로 스크롤 중인지)을 기준으로 이벤트 핸들러가 동작하게끔 활용할 수도 있 다.