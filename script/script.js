function toggleMenu() {
  const menu = document.querySelector(".manu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "preciousmafoko@gmail.com",
    Password: "@A.b.c.123",
    To: "preciousmafoko@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact form enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email".value) +
      "<br> Phone number: " +
      document.getElementById("phone").value +
      "<br> Message: " + document.getElementById("message").value,
  }).then((message) => alert("Message sent succesfully!"));
}

