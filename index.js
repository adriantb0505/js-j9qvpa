// Initialize variables for player turn and game state
var currentPlayer = "X";
var gameState = [
  "", "", "",
  "", "", "",
  "", "", ""
];

// Get all tic-tac-toe cells
var cells = document.getElementsByClassName("tic-tac-toe-cell");

// Add click event to all cells
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(e) {
    // Get cell id
    var cellId = e.target.id;
    
    // Make sure cell is not already filled
    if (gameState[cellId] === "") {
      // Update cell with current player's symbol
      e.target.innerHTML = currentPlayer;
      
      // Update game state
      gameState[cellId] = currentPlayer;
      
      // Check for win
      checkForWin();
      
      // Switch to other player's turn
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}

// Function to check for win
function checkForWin() {
  // Check rows
  for (var i = 0; i < 9; i += 3) {
    if (gameState[i] === gameState[i + 1] && gameState[i] === gameState[i + 2] && gameState[i] !== "") {
      alert(gameState[i] + " wins!");
      resetGame();
      return;
    }
  }
  
  // Check columns
  for (var i = 0; i < 3; i++) {
    if (gameState[i] === gameState[i + 3] && gameState[i] === gameState[i + 6] && gameState[i] !== "") {
      alert(gameState[i] + " wins!");
      resetGame();
      return;
    }
  }
  
  // Check diagonals
  if (gameState[0] === gameState[4] && gameState[0] === gameState[8] && gameState[0] !== "") {
    alert(gameState[0] + " wins!");
    resetGame();
    return;
  }
  
  if (gameState[2] === gameState[4] && gameState[2] === gameState[6] && gameState[2] !== "") {
    alert(gameState[2] + " wins!");
    resetGame();
    return;
  }
  
  // Check for draw
  if (!gameState.includes("")) {
    alert("It's a draw!");
    resetGame();
    return;
  }
}

// Function to reset game
function resetGame() {
  gameState = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  
  currentPlayer = "X";
  
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}

