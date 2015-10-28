
var count=1;
var Timer=setInterval(sliderAuto,3000);
//注册pre按钮单击切换事件
var pre=document.getElementById('pre');
    pre.onclick=function(){
        if (count>1) {
            count--;
            slider();
        }else{
            count=3;
            slider();
        }
    }
//注册next按钮单击切换事件
var next=document.getElementById('next');
    next.onclick=function(){
        if (count<3) {
            count++;
            slider();
        }else{
            count=1;
            slider();
        }
    }
//控制当鼠标指向banner时停止轮播，离开时继续
var banner=document.getElementById('banner');
    banner.onmouseover=function(){
        clearInterval(Timer);
    }
    banner.onmouseout=function(){
        Timer=setInterval(sliderAuto,3000);
    }
// 根据count确定需要显示的图片，通过控制left控制轮播位置
function slider(){
    var slider=document.getElementById('slider');
    if(count==1){
        slider.style.left="0%";
        dotsTab();
    }else
    if (count==2) {
        slider.style.left="-100%";
        dotsTab();
    }else
    if (count==3) {
        slider.style.left="-200%";
        dotsTab();
    };
};
//控制自动轮播
function sliderAuto(){
    count++;
    if (count==4) {
        count=1;
    };
    slider();
 }
 function dotsTab(){
    var arr=document.getElementById('slideDots').getElementsByTagName('li');
    //移除原来的active类
    for (var i = 0; i < arr.length; i++) {
        arr[i].className='';
    };
    arr[count-1].className='active';
 }