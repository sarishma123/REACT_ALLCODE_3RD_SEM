const user2 = {
  name: "sarishma",
  login() {
    console.log(this.name);
  }
};

try {
  const buttonClick = user2.login;
  buttonClick(); 
} catch (error) {
  console.log("Error:", error.message);
}

const fixedButtonClick = user2.login.bind(user2);
fixedButtonClick();
