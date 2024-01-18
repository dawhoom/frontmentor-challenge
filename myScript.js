const form = document.getElementById("subscribeForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("e-mail");
  const email = emailInput.value;

  if (validateEmail(email)) {
    showFormResult();
    hideCallToAction();
  } else {
    emailInput.classList.add("invalid-email");
  }
});

const showFormResult = () => {
  const formResult = document.getElementsByClassName("formResult")[0];
  formResult.classList.remove("hidden");
};

const hideCallToAction = () => {
  const main = document.getElementById("callToAction");
  main.classList.add("hidden");
};
