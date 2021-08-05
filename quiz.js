 var account="";
 function hide() {
    account=document.getElementById("add").style.display = "none";
 }

 function addaccount() {
     var add="";
    var x = document.getElementById("add");
    if (x.style.display === "none") {
      x.style.display = "block";
      
 
    } else {
      x.style.display = "none";
      
    }
  }
  function signinuser() {
    var player1 = "";
     player1 = document.getElementById("quiz_player1").value;
    localStorage.setItem("player1",player1);
    var player2 = "";
     player2 = document.getElementById("quiz_player1").value;
    localStorage.setItem("player2",player2);

    window.location="quiz2.html";

}

