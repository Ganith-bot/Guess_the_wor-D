function login_1(){
    names1=document.getElementById("player1_name").value;
    names2=document.getElementById("player2_name").value;
    localStorage.setItem("P1", names1);
    localStorage.setItem("P2", names2);

    window.location="game_page.html";
}

