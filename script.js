const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
  message.textContent = "🔥 Welcome! Website berhasil berjalan!";
  
  button.textContent = "AWESOME ✨";

  document.body.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.02)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 400
    }
  );
});
