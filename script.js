const form = document.getElementById("form");
const username  = document.getElementById("username");
const email  = document.getElementById("email");
const password  = document.getElementById("password");
const passwordConfirmation  = document.getElementById("password_confirmation");

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value

    if(usernameValue === "") {
      setErrorFor(username, "O nome de usuário é obrigatório!");
    }
    else {
      setSuccessFor(username);
    } 
    if (emailValue === "") {
      setErrorFor(email, "O e-mail é obrigatório!");
    }
    else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um e-mail válido.");
    }
    else {
      setSuccessFor(email);
    }
    if (passwordValue === "") {
      setErrorFor(password, "A senha é obrigatória!");
    }
    else if (passwordValue.length < 7){
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    }
    else {
      setSuccessFor(password);
    }
  
  if(passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!");
  }
  else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.")
  }
  else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll('.form_control')

  const formIsValid = [...formControls].every(formControl => {
    return (formControl.className === "form_control success");
  });

  if (formIsValid) {
    console.log("O formulário está válido!");
  }

  function setErrorFor(input, message) {
     const formControl = input.parentElement;
     const small = formControl.querySelector("small");
  //Adicionar mensagem de erro
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = "form_control error";
    }

  function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso 
    formControl.className = "form_control success";
  }
  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
}