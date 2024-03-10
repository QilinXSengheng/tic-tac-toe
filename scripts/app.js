const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropeElement = document.getElementById("backdrop");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backDropeElement.addEventListener("click", closePlayerConfig)