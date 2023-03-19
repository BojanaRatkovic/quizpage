  const urlParams = new URLSearchParams(window.location.search);
  const score = urlParams.get("score");
  
  document.getElementById("poeni").textContent = score;

  document.getElementById("btn").addEventListener("click", () => {
    window.location.href = "quizpage.html";
  });