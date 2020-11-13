var mode = document.body;
mode.id = "lightBody";

var h1 = document.getElementsByTagName("H1")[0];
h1.innerHTML = "Regular Show Fan Site";

var div = document.getElementById("container");

var backButton = document.getElementById("Back");
backButton.style.visibility = "hidden";

var nextButton = document.getElementById("Next");

var pic = document.getElementById("img1");

var vid1 = document.getElementById("vid1");

var vid2 = document.getElementById("vid2");

var p = document.getElementsByTagName("P")[0]
p.innerHTML = "This a Fan Site dedicated to Regular Show.";

function next(){ 
    if(vid1.style.visibility == "visible"){
        h1.innerHTML = "Favorite Scene";
        vid1.style.visibility = "hidden";
        vid2.style.visibility = "visible";
        nextButton.style.visibility = "hidden";
        p.innerHTML = "<h3>Season 7<span style='font-size: x-large;'>,</span> Episode 23 - Gary's Synthesizer</h3><br><br>Mordecai and Rigby go to Synthos after accidentally reseting<br>Gary's synthesizer<span style='font-size: x-large;'>,</span> which caused him to vanish. When they finally<br>fix Gary's synthesizer<span style='font-size: x-large;'>,</span> Gary reappears and fights his half-brother<br>(as you can see in this video)<span style='font-size: x-large;'>,</span> David<span style='font-size: x-large;'>,</span> who took over Synthos while Gary<br>was on Earth.";
    }
    else if(pic.id == "img1"){
        h1.innerHTML = "Main Characters";
        backButton.style.visibility = "visible";
        pic.id = "img2";
        p.innerHTML = "These are the main characters<span style='font-size: x-large;'>,</span> Mordecai and Rigby.<br>Mordecai is a blue jay and Rigby is a raccoon.<br>They've known each other since childhoold<span style='font-size: x-large;'>,</span> went<br>to the same school<span style='font-size: x-large;'>,</span> and<span style='font-size: x-large;'>,</span> after an incident where Rigby<br>tampered with Mordecai's college acceptance letter<span style='font-size: x-large;'>,</span><br>ended up both working jobs at a park<span style='font-size: x-large;'>,</span> where they embark<br>on crazy adventures together.";
    }
    else if(pic.id == "img2"){
        h1.innerHTML = "Favorite Characters";
        pic.id = "img3";
        p.innerHTML = "These are my favorite characters. They show up the most often<span style='font-size: x-large;'>,</span><br>so it seems super obvious to pick them as my favorites<span style='font-size: x-large;'>,</span> but<br>they are my favorites<span style='font-size: x-large;'>,</span> none the less. Apart from Mordecai and<br>Rigby<span style='font-size: x-large;'>,</span> who I told you about<span style='font-size: x-large;'>,</span> the gumball machine is Benson<span style='font-size: x-large;'>,</span> their<br>boss and manager of the park<span style='font-size: x-large;'>,</span> the gorilla is Skips (formerly Walks)<span style='font-size: x-large;'>,</span> <br>the pink<span style='font-size: x-large;'>,</span> round headed man is Pops (like a lollipop)<span style='font-size: x-large;'>,</span> and the green<br>man is Mitch (aka. Muscle Man).";
    }
    else if(pic.id == "img3"){
        h1.innerHTML = "Favorite Original Song";
        pic.style.visibility = "hidden";
        vid1.style.visibility = "visible";
        p.innerHTML = "<h3>Season 1<span style='font-size: x-large;'>,</span> Episode 12 - Mordecai and the Rigbys</h3><br><br>Mordecai and Rigby accidentally get into a gig for a battle of<br>the bands and have to prepare<span style='font-size: x-large;'>,</span> having no musical experience.<br>After spilling soda on a musical record<span style='font-size: x-large;'>,</span> older versions of themselves<br>appear<span style='font-size: x-large;'>,</span> apparently being celebrity musicians in the future<span style='font-size: x-large;'>,</span> and they recieve<br>help from their older selves to prepare for the gig.<br>This scene is the song they perform at the battle of the bands<span style='font-size: x-large;'>,</span> which<br>they turn out to have been lip-syncing to without knowing it<span style='font-size: x-large;'>,</span> as<br>planned by their older selves. When they find this out<span style='font-size: x-large;'>,</span> they immediately<br>swear never to turn out the way their older selves had<span style='font-size: x-large;'>,</span> which erases<br>their older selves from existance. Despite not winning battle of the<br>bands<span style='font-size: x-large;'>,</span> the crowd still appreciated the performance<span style='font-size: x-large;'>,</span> after a speech that<br>Mordecai gives.";
    }
}
function back(){
    if(pic.id == "img2"){
        h1.innerHTML = "Regular Show Fan Site";
        backButton.style.visibility = "hidden";
        pic.id = "img1";
        p.innerHTML = "This a Fan Site dedicated to Regular Show.";
    }
    else if(vid2.style.visibility == "visible"){
        h1.innerHTML = "Favorite Original Song";
        vid2.style.visibility = "hidden";
        vid1.style.visibility = "visible";
        nextButton.style.visibility = 'visible';
        p.innerHTML = "<h3>Season 1<span style='font-size: x-large;'>,</span> Episode 12 - Mordecai and the Rigbys</h3><br><br>Mordecai and Rigby accidentally get into a gig for a battle of<br>the bands and have to prepare<span style='font-size: x-large;'>,</span> having no musical experience.<br>After spilling soda on a musical record<span style='font-size: x-large;'>,</span> older versions of themselves<br>appear<span style='font-size: x-large;'>,</span> apparently being celebrity musicians in the future<span style='font-size: x-large;'>,</span> and they recieve<br>help from their older selves to prepare for the gig.<br>This scene is the song they perform at the battle of the bands<span style='font-size: x-large;'>,</span> which<br>they turn out to have been lip-syncing to without knowing it<span style='font-size: x-large;'>,</span> as<br>planned by their older selves. When they find this out<span style='font-size: x-large;'>,</span> they immediately<br>swear never to turn out the way their older selves had<span style='font-size: x-large;'>,</span> which erases<br>their older selves from existance. Despite not winning battle of the<br>bands<span style='font-size: x-large;'>,</span> the crowd still appreciated the performance<span style='font-size: x-large;'>,</span> after a speech that<br>Mordecai gives.";
    }
    else if(vid1.style.visibility == "visible"){
        h1.innerHTML = "Favorite Characters";
        vid1.style.visibility = "hidden";
        pic.style.visibility = "visible";
        p.innerHTML = "These are my favorite characters. They show up the most often<span style='font-size: x-large;'>,</span><br>so it seems super obvious to pick them as my favorites<span style='font-size: x-large;'>,</span> but<br>they are my favorites<span style='font-size: x-large;'>,</span> none the less. Apart from Mordecai and<br>Rigby<span style='font-size: x-large;'>,</span> who I told you about<span style='font-size: x-large;'>,</span> the gumball machine is Benson<span style='font-size: x-large;'>,</span> their<br>boss and manager of the park<span style='font-size: x-large;'>,</span> the gorilla is Skips (formerly Walks)<span style='font-size: x-large;'>,</span><br>the pink<span style='font-size: x-large;'>,</span> round headed man is Pops (like a lollipop)<span style='font-size: x-large;'>,</span> and the green<br>man is Mitch (aka. Muscle Man).";
    }
    else if(pic.id == "img3"){
        h1.innerHTML = "Main Characters";
        pic.id = "img2";
        p.innerHTML = "These are the main characters<span style='font-size: x-large;'>,</span> Mordecai and Rigby.<br>Mordecai is a blue jay and Rigby is a raccoon.<br>They've known each other since childhoold<span style='font-size: x-large;'>,</span> went<br>to the same school<span style='font-size: x-large;'>,</span> and<span style='font-size: x-large;'>,</span> after an incident where Rigby<br>tampered with Mordecai's college acceptance letter<span style='font-size: x-large;'>,</span><br>ended up both working jobs at a park<span style='font-size: x-large;'>,</span> where they embark<br>on crazy adventures together.";
    }
}