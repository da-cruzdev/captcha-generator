var code;

function createCaptcha() {
  document.getElementById("captcha").innerHTML = "";

  var charArrays =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";

  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    var index = Math.floor(Math.random() * charArrays.length + 1);
    if (captcha.indexOf(charArrays[index]) == -1)
      captcha.push(charArrays[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv);
}

function validateCaptcha() {
  event.preventDefault();
  if (document.getElementById("captchaTextBox").value == "") {
    alert("Saissisez le captcha");
  } else if (document.getElementById("captchaTextBox").value == code) {
    alert("valid captcha");
  } else {
    alert("Invalid captcha. Try again!!");
    createCaptcha();
  }
}
