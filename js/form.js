document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const AlertModal = document.getElementById("AlertModal");
    const username = document.getElementById("email");
    const message = document.getElementById("message");

    emailjs
      .send(
        "service_43bwa5j",
        "template_84177d8",
        {
          from_name: username.value,
          to_name: "Alfa Aviation academy",
          from_email: username.value,
          to_email: "contact@alfaaviationacademy.in",
          message: message.value,
        },
        "3x9HxoLtTI2JRcraF"
      )
      .then(
        (res) => {
        //   console.log(res);
          //   alert("Thank you. We will get back to you as soon as possible.");
          AlertModal.style.display = "block";
        },
        (error) => {
        //   console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  });

function closeModal() {
  AlertModal.style.display = "none";
}
