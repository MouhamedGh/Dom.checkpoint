var likes = document.getElementsByClassName("like");
console.log(likes);

var minus = document.querySelectorAll(".minus-btn");
var quants = document.querySelectorAll(".Quant");

for (let i = 0; i < minus.length; i++) {
  minus[1].addEventListener("click", function () {
    if (quants[i].value > 1) {
      quants[i].value--;
    }
  });
}
var plus = document.querySelectorAll(".plus-btn");
var quants = document.querySelectorAll(".Quant");

for (let i = 0; i < plus.length; i++)
  plus[1].addEventListener("click", function () {
    if (quants[i].value > 1) {
      quants[i].value++;
    }
  });
