let colors = [
  "radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% )",
  "linear-gradient( 109.6deg,  rgba(61,131,97,1) 11.2%, rgba(28,103,88,1) 91.1% )",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(249,232,51,1) 0%, rgba(250,196,59,1) 100.2% )",
  "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )",
  "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(162,102,246,1) 0%, rgba(203,159,249,1) 90% )",
  "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(247,87,0,1) 0%, rgba(249,0,0,1) 90.1% )",
];
let btn = document.getElementById("btn");
let box = document.getElementById("box");

btn.addEventListener("click", function () {
  var randomNumber = colors[Math.floor(Math.random() * colors.length)];
  box.style.background = randomNumber;
});
