/**
 * Created by Kevin on 2015-09-21.
 */
var left = 0;
var width = 100;

function Active(){
    this.div = document.getElementsByClassName("carre");

    if(width  < 900 && left == 0)
    {
        width += 1;
        this.div[0].style.width = width + "px";
        time1 = setTimeout(Active,5);
    }
    else if(left < 800)
    {
        clearTimeout(time1);
        left += 1;
        width -= 1;
        this.div[0].style.left = left + "px";
        this.div[0].style.width = width + "px";
        time2 = setTimeout(Active,5);
    }
    else{
        clearTimeout(time2);
    }
}

function Init(){
    this.div = document.getElementsByClassName("carre");

    if(left >= 800 && left > 0)
    {
        left -= 1;
        width += 1;
        this.div[0].style.left = left + "px";
        this.div[0].style.width = width + "px";
        setTimeout(Active,5);
    }
    else if(width > 100)
    {
        width -= 1;
        this.div[0].style.width = width + "px";
        setTimeout(Active,5);
    }
}