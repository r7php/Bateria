document.body.addEventListener('keyup',(event)=>{
    playsong(event.code.toLocaleLowerCase());

});

function playsong(soud){
    let au = document.querySelector(`#s_${soud}`);
    let key = document.querySelector(`div[data-key="${soud}"]`);
    if(au){
        au.currentTime=0;
        au.play();
    }
    if(key){
        key.classList.add('active');

     setTimeout(() => {
            key.classList.remove('active');
     }, 300);

    }
}


