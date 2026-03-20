document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector("button");

  if (startButton) {
    startButton.addEventListener("click", function () {
      alert("Bootcamp started! Let's begin your journey.");
    });
  } else {
    console.error("Button not found in the document.");
  }
});