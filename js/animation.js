/**
 * Created by Kevin on 2015-09-21.
 */

function Active(){
    this.div = document.getElementsByClassName("carre");
    var left = 0;
    while(left < 800)
    {
        left += 1;
        this.div[0].style.left = left + "px";
    }
}