function checkDate() {
  const dob = document.getElementById("dob").value;
  const correctDate = "2000-01-10"; // CHANGE DATE

  if (dob === correctDate) {
    window.location.href = "surprise.html";
  } else {
    document.getElementById("error").innerText =
      "Oops… try again 💔";
  }
}

function playMusic(n) {
  document.getElementById("music"+n).play();
}
