const modal = document.getElementById("myModal");

function showModalAfterDelay() {
  setTimeout(function () {
    modal.style.display = "block";
    removeBeforeUnloadListener(); // Remove beforeunload event listener when modal is displayed
  }, 4000);
}

// Call the function when the page loads
window.addEventListener("load", showModalAfterDelay);

// Event listener for beforeunload event
function beforeUnloadHandler(e) {
  // Cancel the event
  e.preventDefault();
  // Chrome requires returnValue to be set
  e.returnValue = "";
}

function removeBeforeUnloadListener() {
  window.removeEventListener("beforeunload", beforeUnloadHandler);
}

// Handle button click
const button = document.getElementById("confirmButton");
button.onclick = function () {
  window.location.href = "../courses.html"; // Redirect to courses.html
};

function closeModal() {
  modal.style.display = "none";
}
