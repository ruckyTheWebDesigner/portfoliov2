import $ from "jquery";

const jquery = () => {
  $(".myForm").on("submit", function (event) {
    event.preventDefault(); // prevent reload

    const formData = new FormData(this);
    formData.append("service_id", "default_service");
    formData.append("template_id", "template_84j6n0e");
    formData.append("user_id", "isgYroE-8cvOOhaCM");

    $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: formData,
      contentType: false, // auto-detection
      processData: false,

      // no need to parse formData to string
    })

      .done(function () {
        console.log(formData);
      })
      .fail(function (error) {
        alert("Oops... " + JSON.stringify(error));
      });
  });
};

export default jquery;
