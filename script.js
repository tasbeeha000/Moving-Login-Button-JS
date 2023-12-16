let btnValue = document.querySelector("#btn");

btnValue.addEventListener("mouseenter", MoveLogin);

function MoveLogin() {
  let EmailValue = document.querySelector("#inputEmail");
  let EmailText = EmailValue.value;
  let PasswordValue = document.querySelector("#inputPassword");
  let PasswordText = PasswordValue.value;

  if (EmailText == "" || PasswordText == "") {
    let x = Math.random() * 85;
    let y = Math.random() * 85;

    // Move the button by adjusting the position
    document.querySelector("#btn").style.left = x + "%";
    document.querySelector("#btn").style.top = y + "%";
  }
}