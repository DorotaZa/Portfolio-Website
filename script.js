// -----------------sidebar---------------

let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-150px";
}

// ------------sending e-mail via form using emailJS--------------

<<<<<<< HEAD
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
=======
function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_2jyx4ft";
  const templateId = "template_k49pmeq";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent succesfully!");
    })
    .catch((err) => console.error(err));
}

// const contactForm = document.querySelector("#contact-form");
// const submitBtn = document.querySelector(".submit-btn");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const messageInput = document.querySelector("#message");

// const publicKey = "8BVAvw9SdM8t-mZ2f";
// const serviceID = "service_2jyx4ft";
// const templateID = "template_k49pmeq";

// emailjs.init(publicKey);

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   submitBtn.innerText = "just a moment...";

//   const inputFields = {
//     name: nameInput.value,
//     email: emailInput.value,
//     message: messageInput.value,
//   };

//   emailjs.send(serviceID, templateID, inputFields).then(
//     () => {
//       submitBtn.innerText = "Message sent successfully";

//       nameInput.value = "";
//       emailInput.value = "";
//       messageInput.value = "";
//     },
//     (error) => {
//       console.log(error);

//       submitBtn.innerText = "Something went wrong";
//     }
//   );
// });
>>>>>>> f50873d7b17f4b9bf3ab9ec416049408507dee7a
