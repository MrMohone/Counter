(function () {
  const buttons = document.querySelectorAll(".counterBtn");
  var count = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("prevBtn")) {
        /*contains(); it check T/F */
        count--;
      } else if (button.classList.contains("nextBtn")) {
        count++;
      }

      const counter = document.querySelector("#counter");
      counter.innerHTML = count;

      if (count < 0) {
        counter.style.color = "red";
      } else if (count > 0) {
        counter.style.color = "green";
      } else {
        counter.style.color = "#333333";
      }
    });
  });
})();
