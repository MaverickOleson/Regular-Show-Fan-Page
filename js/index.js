var id = setInterval(darkmode, 5);
function darkmode(){
    var mode = true;
    if(mode === true){
        clearInterval(id);
        document.getElementById("switch").style.backgroundColor = "darkgray";
    }
    else{
        document.getElementById("switch").style.backgroundColor = "darkgray";
    }
}

var header = [document.getElementById("header1"), document.getElementById("header2"), document.getElementById("header3"), document.getElementById("header4"), document.getElementById("header5")]
var pic = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("vid1"), document.getElementById("vid2")]
var paragraph = [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3"), document.getElementById("p4"), document.getElementById("p5")]

header[0].style.visibility = 'visible';
header[1].style.visibility = 'hidden';
header[2].style.visibility = 'hidden';
header[3].style.visibility = 'hidden';
header[4].style.visibility = 'hidden';

pic[0].style.visibility = 'visible';
pic[1].style.visibility = 'hidden';
pic[2].style.visibility = 'hidden';
pic[3].style.visibility = 'hidden';
pic[4].style.visibility = 'hidden';

paragraph[0].style.visibility = 'visible';
paragraph[1].style.visibility = 'hidden';
paragraph[2].style.visibility = 'hidden';
paragraph[3].style.visibility = 'hidden';
paragraph[4].style.visibility = 'hidden';

document.getElementById("Back").style.visibility = 'hidden';

document.getElementById("Trivia").style.visibility = 'hidden';

function back(){
    if(pic[4].style.visibility == 'visible'){
        header[4].style.visibility = 'hidden';
        pic[4].style.visibility = 'hidden';
        paragraph[4].style.visibility = 'hidden';
        header[3].style.visibility = 'visible';
        pic[3].style.visibility = 'visible';
        paragraph[3].style.visibility = 'visible';
    }
    else if(pic[3].style.visibility == 'visible'){
        header[3].style.visibility = 'hidden';
        pic[3].style.visibility = 'hidden';
        paragraph[3].style.visibility = 'hidden';
        header[2].style.visibility = 'visible';
        pic[2].style.visibility = 'visible';
        paragraph[2].style.visibility = 'visible';
    }
    else if(pic[2].style.visibility == 'visible'){
        header[2].style.visibility = 'hidden';
        pic[2].style.visibility = 'hidden';
        paragraph[2].style.visibility = 'hidden';
        header[1].style.visibility = 'visible';
        pic[1].style.visibility = 'visible';
        paragraph[1].style.visibility = 'visible';
    }
    else if(pic[1].style.visibility == 'visible'){
        header[1].style.visibility = 'hidden';
        pic[1].style.visibility = 'hidden';
        paragraph[1].style.visibility = 'hidden';
        header[0].style.visibility = 'visible';
        pic[0].style.visibility = 'visible';
        paragraph[0].style.visibility = 'visible';
    }
}
function next(){
    if(pic[0].style.visibility == 'visible'){
        header[0].style.visibility = 'hidden';
        pic[0].style.visibility = 'hidden';
        paragraph[0].style.visibility = 'hidden';
        header[1].style.visibility = 'visible';
        pic[1].style.visibility = 'visible';
        paragraph[1].style.visibility = 'visible';
    }
    else if(pic[1].style.visibility == 'visible'){
        header[1].style.visibility = 'hidden';
        pic[1].style.visibility = 'hidden';
        paragraph[1].style.visibility = 'hidden';
        header[2].style.visibility = 'visible';
        pic[2].style.visibility = 'visible';
        paragraph[2].style.visibility = 'visible';
    }
    else if(pic[2].style.visibility == 'visible'){
        header[2].style.visibility = 'hidden';
        pic[2].style.visibility = 'hidden';
        paragraph[2].style.visibility = 'hidden';
        header[3].style.visibility = 'visible';
        pic[3].style.visibility = 'visible';
        paragraph[3].style.visibility = 'visible';
    }
    else if(pic[3].style.visibility == 'visible'){
        header[3].style.visibility = 'hidden';
        pic[3].style.visibility = 'hidden';
        paragraph[3].style.visibility = 'hidden';
        header[4].style.visibility = 'visible';
        pic[4].style.visibility = 'visible';
        paragraph[4].style.visibility = 'visible';
    }
}

function visNext(){
    if(pic[0].style.visibility == 'visible'){
        document.getElementById("Back").style.visibility = 'hidden';
    }
    else{
        document.getElementById("Back").style.visibility = 'visible';
    }
    if(pic[4].style.visibility == 'visible'){
        document.getElementById("Next").style.visibility = 'hidden';
        document.getElementById("Trivia").style.visibility = 'visible';
    }
}
function visBack(){
    if(pic[3].style.visibility == 'visible'){
        document.getElementById("Next").style.visibility = 'visible';
        document.getElementById("Trivia").style.visibility = 'hidden';
    }
    else if(pic[0].style.visibility == 'visible'){
        document.getElementById("Back").style.visibility = 'hidden';
    }
}