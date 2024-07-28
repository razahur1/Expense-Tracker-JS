// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN EMAIL IS INVALID
function InvalidEmail() {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode("Please Enter Valid Email"));
  const container = document.querySelector(".signup-classic");
  const posts = document.querySelector("#alert");
  const newpost = container.insertBefore(div, posts);
  div.style.color = "red";
  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN PASSWORD INS > 6 CHARACTERS

function WeakPassword() {
  const div = document.createElement("div");
  div.appendChild(
    document.createTextNode("Password should be at least 6 characters")
  );
  const container = document.querySelector(".signup-classic");
  const posts = document.querySelector("#alert");
  const newpost = container.insertBefore(div, posts);
  div.style.color = "red";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN EMAIL IS ALREADY IN USE

function UsedEmail() {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode("The Email is Already in Use"));
  const container = document.querySelector(".signup-classic");
  const posts = document.querySelector("#alert");
  const newpost = container.insertBefore(div, posts);
  div.style.color = "red";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN FEILDS ARE EMPTY OR ACCOUNT IS CREATED !

function OtherValidities(message) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".signup-classic");

  const posts = document.querySelector("#alert");

  const newpost = container.insertBefore(div, posts);
  div.style.color = "green";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

/// FUNCTION FOR SIGNUP PAGE TO CALL DRIFFFERENT FUCNTIONS ON DRIFFERENT CASES
function showAlertSignup(message) {
  if (message === "Firebase: Error (auth/invalid-email).") {
    InvalidEmail();
  } else if (
    message ===
    "Firebase: Password should be at least 6 characters (auth/weak-password)."
  ) {
    WeakPassword();
  } else if (message === "Firebase: Error (auth/email-already-in-use).") {
    UsedEmail();
  } else {
    OtherValidities(message);
  }
}

// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN USER IS NOT FOUND

function NotFound() {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode("User not Found"));
  const container = document.querySelector(".login-classic");
  const posts = document.querySelector("#alert");
  const newpost = container.insertBefore(div, posts);
  div.style.color = "red";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN PASSWORD IS WRONG


function WrongPassword() {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode("Incorrect Password"));
  const container = document.querySelector(".login-classic");
  const posts = document.querySelector("#alert");
  const newpost = container.insertBefore(div, posts);
  div.style.color = "red";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN ACCOUNT IS DISABLED


function disabledAccount() {
  const div = document.createElement("div");
  div.appendChild(
    document.createTextNode(
      "account has been temporarily disabled due to many failed login"
    )
  );
  const container = document.querySelector(".login-classic");
  const posts = document.querySelector("#alert");
  const newpost = container.insertBefore(div, posts);
  div.style.color = "red";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

function InvalidEmailLogin() {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode("Please Enter Valid Email"));
  const container = document.querySelector(".login-classic");
  const posts = document.querySelector("#alert");
  const newpost = container.insertBefore(div, posts);
  div.style.color = "red";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

// CALLBACK FUNCTION FROM MAIN FUNCTION WHEN FEILDS ARE EMPTY OR LOGGED IN!


function OtherValiditiesLogin(message) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".login-classic");

  const posts = document.querySelector("#alert");

  const newpost = container.insertBefore(div, posts);
  div.style.color = "green";

  setTimeout(() => {
    newpost.remove();
  }, 4000);
}

/// FUNCTION FOR LOGIN PAGE TO CALL DRIFFFERENT FUCNTIONS ON DRIFFERENT CASES

function showAlertLogin(message) {
  if (message === "Firebase: Error (auth/user-not-found).") {
    NotFound();
  } else if (message === "Firebase: Error (auth/wrong-password).") {
    WrongPassword();
  } else if (
    message ===
    "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
  ) {
    disabledAccount();
  } else if (message === "Firebase: Error (auth/invalid-email).") {
    InvalidEmailLogin();
  } else {
    OtherValiditiesLogin(message);
  }
}
