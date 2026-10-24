document.addEventListener("DOMContentLoaded", function () {
  var toast=document.getElementById("toast"), timer;
  function note(message){toast.textContent=message;toast.classList.add("show");clearTimeout(timer);timer=setTimeout(function(){toast.classList.remove("show")},2800)}
  function panel(message){note(message);document.querySelector(".chart-card").classList.add("attention");setTimeout(function(){document.querySelector(".chart-card").classList.remove("attention")},700)}
  ["signIn","getStarted","heroStart"].forEach(function(id){document.getElementById(id).addEventListener("click",function(){panel("Preview panel opened. No account service is connected.")})});
  document.getElementById("watch").addEventListener("click",function(){document.getElementById("markets").scrollIntoView({behavior:"smooth"})});
  document.getElementById("allMarkets").addEventListener("click",function(){panel("Expanded market view: sample cards below.")});
  document.querySelectorAll(".period").forEach(function(button){button.addEventListener("click",function(){document.querySelectorAll(".period").forEach(function(item){item.classList.remove("active")});button.classList.add("active");note("Chart period changed for preview.")})});
  setTimeout(function(){note("Market movement alert: sample values changed. Review the dashboard.");document.querySelector(".chart-card").classList.add("attention")},17000);
});