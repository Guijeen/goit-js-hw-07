const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerForm);

function handlerForm(event) {
  event.preventDefault();
  const inputs = event.target.elements;

  if (inputs.password.value.trim() === "" || inputs.email.value.trim() === "") {
    alert("'All form fields must be filled in");
  } else {
    const formValues = {
      email: inputs.email.value.trim(),
      password: inputs.password.value.trim(),
    };
    console.log(formValues);
    form.reset();
  }
  
}
