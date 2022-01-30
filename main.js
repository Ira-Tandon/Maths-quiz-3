function navigate() {
  var player_1 = document.getElementById("player_1_name").value;
  var player_2 = document.getElementById("player_2_name").value;
  localStorage.setItem("player 1 name", player_1);
  localStorage.setItem("player 2 name", player_2);
  window.location="gamepage.html";
} 
