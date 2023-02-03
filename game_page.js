player1=localStorage.getItem("player1");
document.getElementById("player1_name").innerHTML=player1+":";
player2=localStorage.getItem("player2");
document.getElementById("player2_name").innerHTML=player2+":";
player1_score=0;
player2_score=0;
question_turn="player1";
answer_turn="player2";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn-"+player1;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charat1=word.charAt(1);

    length_2=Math.floor(word.length/2);
    charat2=word.charAt(length_2);

    length_minus=word.length-1;
    charat3=word.charAt(length_minus);

    remove_charat1=word.replace(charat1,"_");
    
    remove_charat2=remove_charat1.replace(charat2,"_");

    remove_charat3=remove_charat2.replace(charat3,"_");

    question_word="<h4 id='word_display'>Q."+remove_charat3+"</h4>";
    
    input_word="<br> Answer: <input type='text' id='input_check_box'";

    check_button="<br> <br> <button class='btn btn-info'onclick='check()'>Check </button>"

    row=question_word+input_word+check_button;

    document.getElementById("output").innerHTML=row;
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn: "+player2;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn: "+player1;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn: "+player2;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn: "+player1;
    }
    document.getElementById("output").innerHTML="";
}