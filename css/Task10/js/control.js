var menu=document.getElementById('menu'),
    nav=document.getElementById('nav'),
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

//小屏幕时注册menu的单击事件
var setClick=function(){
    var clientWidth=document.documentElement.clientWidth;
    if (clientWidth<=768) {
        nav.style.display='none';
        menu.addEventListener('click',show);
        nav.addEventListener('click',hide);
    }else{
        nav.style.display='block';
        menu.removeEventListener('click',show);
        nav.removeEventListener('click',hide);
    };
};
//根据浏览器宽度设置banner的高度和字体大小
var setBanner=function(){
    clientWidth=document.documentElement.clientWidth;
    banner.style.height = 600 * ( clientWidth / 1980 ) + 'px';
    banner.style.fontSize = 100 * ( clientWidth / 1980 ) + 'px';
}

//导航栏的控制事件
var show=function(){
   document.getElementById('nav').style.display='block';
    }
var hide=function(){
    document.getElementById('nav').style.display='none';
    }

window.onload=function(){
    setClick();
    setBanner();
    window.addEventListener(resizeEvt,setClick,false);
    window.addEventListener(resizeEvt,setBanner,false);
}