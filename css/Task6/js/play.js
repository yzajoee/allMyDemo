
window.onload=function(){
    var player=document.getElementById("player");
    var audio=new Audio("music/kanon.mp3");
    player.onclick=function(){     
        if(audio.error){
              alert(audio.error.code);
        }
        if(audio!==null){             
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.在播放器暂停时返回true
               
            if(!audio.paused)  
            {                 
                audio.pause();// 这个就是暂停//audio.play();// 这个就是播放  
            }else audio.play();  
        }  
    }           
  };