const input=document.querySelector('#input');

function checker(){
    const words=document.querySelectorAll('.word');
    if(words.length===0){
        alert('Success!');
        if(confirm('retry?')){
            window.location.reload();
        }
    }  
}