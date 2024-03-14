function validForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.value.trim() === "") {    
      name.nextElementSibling.style.display = "block";
      name.style.border = "1px solid #f00";
      return false;
    } else {
      name.nextElementSibling.style.display = "none";
      name.style.border = "1px solid transparent";
    }

    if (!emailPattern.test(email.value)) {
      email.nextElementSibling.style.display = "block";
      email.style.border = "1px solid #f00";
      return false;
    } else {
      email.nextElementSibling.style.display = "none";
      email.style.border = "1px solid transparent";
    }

    if (message.value == "") {
      message.nextElementSibling.style.display = "block";
      message.style.border = "1px solid #f00";
      return false;
    } else {
      message.nextElementSibling.style.display = "none";
      message.style.border = "1px solid transparent";
    }

    if (subject.value == "") {
      subject.nextElementSibling.style.display = "block";
      subject.style.border = "1px solid #f00";
      return false;
    } else {
      subject.nextElementSibling.style.display = "none";
      subject.style.border = "1px solid transparent";
    }
  }