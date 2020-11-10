var header = [document.getElementById("header1"), document.getElementById("header2"), document.getElementById("header3")]
var pic = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")]

header[0].style.visibility = "visible";
header[1].style.visibility = "hidden";
header[2].style.visibility = "hidden";

pic[0].style.visibility = "visible";
pic[1].style.visibility = "hidden";
pic[2].style.visibility = "hidden";

function back(){
    if(pic[0].style.visibility == 'visible'){
        header[0].style.visibility = "hidden";
        pic[0].style.visibility = 'hidden';
        header[2].style.visibility = "visible";
        pic[2].style.visibility = 'visible';
    }
    else if(pic[2].style.visibility == 'visible'){
        header[2].style.visibility = "hidden";
        pic[2].style.visibility = 'hidden';
        
        pic[1].style.visibility = 'visible';
    }
    else if(pic[1].style.visibility == 'visible'){
        header[1].style.visibility = "hidden";
        pic[1].style.visibility = 'hidden';
        
        pic[0].style.visibility = 'visible';
    }
}
function next(){
    if(pic[0].style.visibility == 'visible'){
        pic[0].style.visibility = 'hidden';
        pic[2].style.visibility = 'hidden';
        pic[1].style.visibility = 'visible';
    }
    else if(pic[2].style.visibility == 'visible'){
        pic[2].style.visibility = 'hidden';
        pic[1].style.visibility = 'hidden';
        pic[0].style.visibility = 'visible';
    }
    else if(pic[1].style.visibility == 'visible'){
        pic[1].style.visibility = 'hidden';
        pic[0].style.visibility = 'hidden';
        pic[2].style.visibility = 'visible';
    }
}