// responsive navbar toggler
let iconToggle = document.querySelector(".toggle");
let showMenu = document.querySelector(".hide");

iconToggle.addEventListener("click", () => {
    iconToggle.classList.toggle("active");
    showMenu.classList.toggle("show");
});


// on scroll sticky navbar
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset > sticky + 100) {
        console.log(window.pageYOffset, sticky);
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


// smooth scrolling on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");


// Contact Form 
let form = document.querySelector(".form");
let sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    console.log(formData);

    sendBtn.value = "Sending..."

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = () => {
        console.log(xhr.responseText);

        if (xhr.responseText == "success") {
            name.value = "";
            email.vlaue = "";
            message.value = "";
            sendBtn.value = "Email Sent Successfully!"
        } else {
            alert("Something Went Wrong!");
            sendBtn.value = "Something Went Wrong!"
        }
    }
    xhr.send(JSON.stringify(formData));

});

// resume download
let download = document.getElementById("download");
download.addEventListener("click", () => {
    download.innerHTML = "downloading..."
    setTimeout(() => {
        download.innerHTML = "Download Resume";
    }, 3000)
});