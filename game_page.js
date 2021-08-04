player_1_name = localStorage.getItem("P1");
player_2_name = localStorage.getItem("P2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML=player_1_name + " : ";
document.getElementById("player2_name").innerHTML=player_2_name + " : ";

document.getElementById("score1").innerHTML=player_1_score;
document.getElementById("score2").innerHTML=player_2_score;

document.getElementById("player1_Q").innerHTML= player_1_name;
document.getElementById("player1_A").innerHTML= player_2_name;

function send1(){
    var guess_word = document.getElementById("word_input").value;
    guess_word_lower = guess_word.toLowerCase();
    
    charAT1 = guess_word_lower.charAt(1);
    console.log(charAT1);
    length_of_word = Math.floor(guess_word_lower.length/2);

    charAt2 = guess_word_lower.charAt(length_of_word);
    minus = guess_word_lower.length-1;
    charAt3 = guess_word_lower.charAt(minus);

    replace_1 = guess_word_lower.replace(charAT1, "_");
    replace_2 = replace_1.replace(charAt2, "_");
    replace_3 = replace_2.replace(charAt3, "_");


    answer101 = "<h1 id='answer_js'>Q."+ replace_3 +"</h1>";
    display = "<h1>Answer: </h1>"+ "<input type='text' id='answer_of_P'>";
    check = "<button class='btn-warning' id='check1' onclick='check_the_ans()'>Check</button>"  
    row = answer101+"<br>"+display+"<br>"+check+"<br>";
    document.getElementById("game_output").innerHTML=row;
    document.getElementById("word_input").value="";
}

var Q_turn = "player1";
var A_turn = "player2";

function check_the_ans(){
    var answer_word = document.getElementById("answer_of_P").value;
    guess_answer_lower = answer_word.toLowerCase();
    
    if( guess_answer_lower==guess_word_lower){
        if(A_turn=="player1"){
            player_1_score = player_1_score+1;
            document.getElementById("score1").innerHTML=player_1_score;
        }
        else{
            player_2_score = player_2_score+1;
            document.getElementById("score2").innerHTML=player_2_score;
        }
    }

    if( Q_turn=="player1"){
        Q_turn = "player2";
        document.getElementById("player1_Q").innerHTML=player_2_name;
    }
    else{
        Q_turn = "player1";
        document.getElementById("player1_Q").innerHTML=player_1_name;
    }
    
    if( A_turn=="player1"){
        A_turn = "player2";
        document.getElementById("player1_A").innerHTML=player_2_name;
    }
    else{
        A_turn = "player1";
        document.getElementById("player1_A").innerHTML=player_1_name;
    }
    document.getElementById("game_output").innerHTML="";
}