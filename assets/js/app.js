document.addEventListener("DOMContentLoaded", function () {
  var toast = document.getElementById("toast");
  var timer;
  function showNote(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove("show"); }, 2600);
  }
  ["signIn", "getStarted", "heroStart"].forEach(function (id) {
    document.getElementById(id).addEventListener("click", function () {
      showNote("Preview mode. This button does not connect to an account.");
    });
  });
  document.getElementById("watch").addEventListener("click", function () {
    document.getElementById("markets").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("allMarkets").addEventListener("click", function () {
    showNote("Sample market cards are shown for this preview.");
  });
  document.querySelectorAll(".period").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll(".period").forEach(function (item) { item.classList.remove("active"); });
      button.classList.add("active");
      showNote("Chart display changed for preview.");
    });
  });
});