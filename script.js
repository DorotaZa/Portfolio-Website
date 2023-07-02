// -----------------sidebar---------------

let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-150px";
}

// ------------sending e-mail via form using emailJS--------------

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      //  Api keys
      const serviceId = "service_2jyx4ft";
      const templateId = "template_k49pmeq";

      //  to prevent reload of the website
      event.preventDefault();

      // to collect data
      let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // to clear data from form
      const cleanFields = () => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      };

      // to display messages
      const displayMessage = (typeOfMessage) => {
        document.getElementById("message-wrapper").style.display = "flex";

        if (typeOfMessage === "success") {
          document.getElementById("message-success").style.display = "block";
        } else {
          document.getElementById("message-error").style.display = "block";
        }
      };

      // call to external service provider
      emailjs
        .send(serviceId, templateId, data)
        .then((response) => {
          if (response.status === 200) {
            displayMessage("success");
            cleanFields();
          }
        })
        .catch((err) => {
          displayMessage();
        });
    });

  document
    .getElementById("message-wrapper")
    .addEventListener("click", function (event) {
      document.getElementById("message-wrapper").style.display = "none";
    });
};
