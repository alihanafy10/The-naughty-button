let btn = document.getElementById("demo");
btn.addEventListener("mouseenter", function (e) {
  if (e.x > (446-(54/2))) {
    btn.style.left = `${e.x - 54}px`;
    btn.style.transition = "0.2s";
  }
  else {
    btn.style.left = `${e.x + 54}px`;
    btn.style.transition = "0.2s";
  }
})

btn.addEventListener("click", function () {
  console.log("error");
})