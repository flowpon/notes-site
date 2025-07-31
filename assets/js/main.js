document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("back-button");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.history.back();
    });
  }
});
