document.addEventListener("DOMContentLoaded", function () {
  var toast=document.getElementById("toast"), shade=document.getElementById("alertShade"), timer;
  function note(message){toast.textContent=message;toast.classList.add("show");clearTimeout(timer);timer=setTimeout(function(){toast.classList.remove("show")},2800)}
  function openAlert(message){document.getElementById("alertText").textContent=message||"A sample market notice is ready to review.";shade.classList.add("open");shade.setAttribute("aria-hidden","false")}
  function closeAlert(){shade.classList.remove("open");shade.setAttribute("aria-hidden","true");note("Notice dismissed. This preview has no connected account.")}
  ["signIn","getStarted","heroStart"].forEach(function(id){document.getElementById(id).addEventListener("click",function(){openAlert("This panel is a visual preview. No account service is connected.")})});
  document.getElementById("watch").addEventListener("click",function(){document.getElementById("markets").scrollIntoView({behavior:"smooth"})});
  document.getElementById("allMarkets").addEventListener("click",function(){openAlert("The expanded market view is represented by the sample cards on this page.")});
  document.querySelectorAll(".period").forEach(function(button){button.addEventListener("click",function(){document.querySelectorAll(".period").forEach(function(item){item.classList.remove("active")});button.classList.add("active");note("Chart period changed for preview.")})});
  document.getElementById("alertClose").addEventListener("click",closeAlert);
  document.getElementById("alertLater").addEventListener("click",closeAlert);
  document.getElementById("alertReview").addEventListener("click",function(){closeAlert();document.getElementById("markets").scrollIntoView({behavior:"smooth"})});
  shade.addEventListener("click",function(event){if(event.target===shade)closeAlert()});
  setTimeout(function(){openAlert("Sample volatility notice: review the displayed figures before making a decision.")},17000);
});