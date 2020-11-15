var answer4 = document.getElementById("answer4");

var answer5 = document.getElementById("answer5");

var answer12 = document.getElementById("answer12");

var answer15 = document.getElementById("answer15");

var answer18 = document.getElementById("answer18");

var p = document.getElementsByTagName("P")[0];
p.style.visibility = "hidden";

var score = "0";

function trivia(){
    if(answer4.checked){
        score++;
    }
    else{

    }
    if(answer5.checked){
        score++;
    }
    if(answer12.checked){
        score++;
    }
    if(answer15.checked){
        score++;
    }
    if(answer18.checked){
        score++;
    }
    if(score == 0){
        p.innerHTML = "0/5 Correct. Fix it or you're fired!";
    }
    if(score == 1){
        p.innerHTML = "1/5 Correct. Oh no, bro.";
    }
    if(score == 2){
        p.innerHTML = "2/5 Correct. Aw, man.";
    }
    if(score == 3){
        p.innerHTML = "3/5 Correct. Hmm, hmm, hm hm hm.";
    }
    if(score == 4){
        p.innerHTML = "4/5 Correct. Yeaeaaaahhhh.";
    }
    if(score == 5){
        p.innerHTML = "5/5 Correct. Wooooooo!";
    }
    p.style.visibility = "visible";
    window.scrollTo(0,document.body.scrollHeight);
    score = "0";
}