/**
 * Created by Kevin on 2015-09-21.
 */
var left = 0;
var width = 100;
var speed = 1;
var velocity1 = 20;
var velocity2 = 20;
var anim = false;
var subcarre = document.getElementsByClassName("subcarre");
var div = document.getElementsByClassName("carre");

function Active(){

    if(width  < 900 && left == 0)
    {
        width += velocity1;
        div[0].style.width = width + "px";
        subcarre[0].style.width = (div[0].offsetWidth - 20)+"px";
        setTimeout(Active,speed);
    }
    else if(left < 800)
    {
        left += velocity1;
        width -= velocity1;
        div[0].style.left = left + "px";
        div[0].style.width = width + "px";
        subcarre[0].style.width = (div[0].offsetWidth - 20)+"px";
        setTimeout(Active,speed);
    }
    else if(anim)
    {
        setTimeout(Init,speed);
    }
}

function Init(){

    if(left > 0)
    {
        left -= velocity2;
        width += velocity2;
        div[0].style.left = left + "px";
        div[0].style.width = width + "px";
        subcarre[0].style.width = (div[0].offsetWidth - 20)+"px";
        setTimeout(Init,speed);
    }
    else if(width > 100)
    {
        width -= velocity2;
        div[0].style.width = width + "px";
        subcarre[0].style.width = (div[0].offsetWidth - 20)+"px";
        setTimeout(Init,speed);
    }
    else if(anim)
    {
        setTimeout(Active,speed);
    }
}


function Anim(){
    anim = true;
    Active();
}

function Stop(){
    anim = false;
    Init();
}