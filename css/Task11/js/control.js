var menu=document.getElementById('menu'),
    nav=document.getElementById('nav'),
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

//小屏幕时注册menu的单击事件
var setClick=function(){
    var clientWidth=document.documentElement.clientWidth;
    nav.style.display='block';
    if (clientWidth<=992) {
        nav.style.display='none';
        menu.addEventListener('click',show);
        nav.addEventListener('click',hide);
    }else{
        nav.style.display='block';
        menu.removeEventListener('click',show);
        nav.removeEventListener('click',hide);
    };
};
//导航栏的控制事件
var show=function(){
   document.getElementById('nav').style.display='block';
    }
var hide=function(){
    document.getElementById('nav').style.display='none';
    }


window.onload=function(){
    setClick();
    window.addEventListener(resizeEvt,setClick,false);
}