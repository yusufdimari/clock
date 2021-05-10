const clock=document.querySelector('.time');
const tick=(()=>{
    let now=new Date();
    let h=now.getHours();
    if(h>12){
        h=h-12;
    }
    let m=now.getMinutes();
    let s=now.getSeconds();
    let dat= now.toDateString();
    
    const html=`<span class="content">${h}</span>:
                <span class="content">${m}</span>:
                <span class="content">${s}</span>
                <p><span class="date">${dat}</span></p>`;
    clock.innerHTML=html;
});

setInterval(tick, 1000);