function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
    }
    emailjs.send("service_mo30k5g", "template_jrlqz9m", params).then(function (res) {
        alert("success" + res.status);
    })

}