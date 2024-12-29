function sendMail(){
    var params = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Message : document.getElementById("Message").value,
    };
}

const serviceID = "service_0k88q7n"
const templateID = "template_91dri52"

emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
        