(function(){
    let hours=document.querySelector('.hour');
    let min=document.querySelector('.minutes');
    let sec=document.querySelector('.second');

    let startBtn=document.querySelector('.start');
    let stopBtn=document.querySelector('.stop');
    let resetBtn=document.querySelector('.reset');
     
    let countDownTimer=null;
    function clearinter(state){
        if(state="pause"){
            clearInterval(countDownTimer)
            startBtn.style.display="initial";
        stopBtn.style.display="none";
        }
        
     }
    stopBtn.addEventListener('click',()=>{
        clearinter("pause")
    })
    resetBtn.addEventListener('click',()=>{
        clearinter("pause");
        hours.value="";
        min.value="";
        sec.value="";
        startBtn.style.display="initial";
        stopBtn.style.display="none";
    })
    startBtn.addEventListener('click',()=>{
        if(hours.value==0 && min.value==0 && sec.value==0)return;
        startBtn.style.display="none";
        stopBtn.style.display="initial";
         
        countDownTimer=setInterval(()=>{
           timer();     
        },1000)
        
        function timer(){
            if(sec.value>60){
                min.value++;
                sec.value=parseInt(sec.value)-59;
            }
            if(min.value>60){
                hours.value++;
                min.value=parseInt(min.value)-59;
            }
            
            if(hours.value==0 && min.value==0 && sec.value==0){
               hours.value="";
               min.value="";
               sec.value="";
               startBtn.style.display="initial";
               stopBtn.style.display="none";
            clearinter();
            }
            else if(sec.value!=0){                
                sec.value=`${sec.value<=10? '0' : "" }${sec.value-1}`;
            }
            else if(min.value!=0 && sec.value==0){
                sec.value=59;
                min.value=`${min.value<=10?'0':""}${min.value-1}`;
            }
            else if(hours.value!=0 & min.value==0){
                min.value=60;
                hours.value=`${hours.value>10 ? "0":""}${hours.value-1}`
            }

        }

    })
})()