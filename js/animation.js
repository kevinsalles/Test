/**
 * Created by Kevin on 2015-09-21.
 */
var left = 0;
var width = 100;
var speed = 1;
var velocity1 = 20;
var velocity2 = 20;
var anim = false;

function Active(){
    this.div = document.getElementsByClassName("carre");

    if(width  < 900 && left == 0)
    {
        width += velocity1;
        this.div[0].style.width = width + "px";
        setTimeout(Active,speed);
    }
    else if(left < 800)
    {
        left += velocity1;
        width -= velocity1;
        this.div[0].style.left = left + "px";
        this.div[0].style.width = width + "px";
        setTimeout(Active,speed);
    }
    else if(anim)
    {
        setTimeout(Init,speed);
    }
}

function Init(){
    this.div = document.getElementsByClassName("carre");

    if(left > 0)
    {
        left -= velocity2;
        width += velocity2;
        this.div[0].style.left = left + "px";
        this.div[0].style.width = width + "px";
        setTimeout(Init,speed);
    }
    else if(width >= 100)
    {
        width -= velocity2;
        this.div[0].style.width = width + "px";
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