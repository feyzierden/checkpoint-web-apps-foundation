//Formularelemente:
const pwForm = document.querySelector("form");
const elPW1 = document.querySelector("#pw1");
const elPW2 = document.querySelector("#pw2");

//Passwort-Validierungselemente:
const elEqual = document.querySelector("#elEqual");
const elLowerCase = document.querySelector("#elLowerCase");
const elUpperCase = document.querySelector("#elUpperCase");
const elNumbers = document.querySelector("#elNumbers");
const elTenChar = document.querySelector("#elTenChar");

//Buttons:
const btnPassword = document.querySelector("#btnPassword");
const btnSavePw = document.querySelector("#btnSavePw");

//Save-Button initial deaktivieren:
disableSaveButton();

//Passwort anzeigen/verschleiern (toggeln):
btnPassword.addEventListener("click", () => {
  if (elPW1.type === "text" || elPW2.type === "text") {
    elPW1.type = "password";
    elPW2.type = "password";
    btnPassword.innerText = "Show Password";
  } else {
    elPW1.type = "text";
    elPW2.type = "text";
    btnPassword.innerText = "Hide Password";
  }
});

//Listener auf Inputelemente (Passwortfelder):
pwForm.addEventListener("input", () => {
  //Regulärer Ausdruck: Aufruf mit der Methode 'test()'
  const regexLowerCase = /[a-z]/g.test(elPW1.value);
  const regexUpperCase = /[A-Z]/g.test(elPW1.value);
  const regexDigit = /[0-9]/g.test(elPW1.value);
  const pwIs10Char = elPW1.value.length >= 10;

  //Prüfung, ob PW-Inputfeld mit 2. PW-Inputfeld identisch
  if (elPW1.value === elPW2.value && elPW1.value !== "") {
    elEqual.innerText = "✅";
    //Nur wenn beide Inputfelder identisch, weitere Checks:
    checkPW(regexLowerCase, elLowerCase);
    checkPW(regexUpperCase, elUpperCase);
    checkPW(regexDigit, elNumbers);
    checkPW(pwIs10Char, elTenChar);
  } else {
    elEqual.innerText = "❌";
    resetCheckPw(); //Passwort Validierungselemente reseten
    disableSaveButton(); //Save Button deaktivieren
  }
});

//Prüfung der Passwort-Validierung
function checkPW(checkResult, element) {
  if (checkResult === true) {
    element.innerText = "✅";
    enableSaveButton();
  } else {
    element.innerText = "❌";
    disableSaveButton();
  }
}

//Validierungselemente reseten:
function resetCheckPw() {
  if (pw1.value === "" || pw2.value === "") {
    elLowerCase.innerText = "❌";
    elUpperCase.innerText = "❌";
    elNumbers.innerText = "❌";
    elTenChar.innerText = "❌";
    disableSaveButton();
  }
}

function enableSaveButton() {
  btnSavePw.disabled = false;
  btnSavePw.style.color = "green";
}

function disableSaveButton() {
  btnSavePw.disabled = true;
  btnSavePw.style.color = "red";
}
