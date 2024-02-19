const inact = document.querySelectorAll(".dashboard-type");
const nothov = document.querySelector(".page-bg");

const dash = document.querySelector(".dashboard");

inact.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    dash.classList.add("inact");
  });
});

nothov.addEventListener("mouseover", function () {
  dash.classList.remove("inact");
});
