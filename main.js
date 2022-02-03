const menu = document.querySelector(".menu-box");
const sideBar = document.querySelector("nav");
const box = document.querySelectorAll(".aboutheader");
const aboutP = document.querySelector(".aboutP");
const navClick = document.querySelectorAll(".navClick");



menu.onclick = () => {
  menu.classList.toggle("active");
  sideBar.classList.toggle("active");
}

const options = {
  threshold: 1
}





const io = new IntersectionObserver(run, options);


io.observe(aboutP);

for( e of box) {
  io.observe(e);
}




function run(elements) {
  for (element of elements) {
    if (element.isIntersecting) {
      element.target.classList.add("active");
    } else {
      element.target.classList.remove("active");
    }
  }
}


//email




function sendEmail() {
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const name = document.querySelector("#name").value;
  
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: '123blackflash@gmail.com',
    Password: 'D3956FB35D062BD2B2BEDAEC42B9169C6D91',
    To: 'inokasujivani7@gmail.com',
    From: '123blackflash@gmail.com',
    Subject: 'Portfolio Contact Form Inquery',
    Body: "Name : " + name + "<br><br>" +
           "Email : " + email + "<br><br>" +
           "Message : " + message
  }).then(
    message => alert(message + ".Email sent successfully!")
  );

}

for(i of navClick) {
  i.addEventListener("click" , () => {
    menu.classList.remove("active");
    sideBar.classList.remove("active");
  })
}

const end = document.querySelector(".end");

var date = new Date();

var year = date.getFullYear();

console.log(year);

end.innerHTML = `<p class="p">Created By Shenal Nimsara ${year} <i class="far fa-copyright" ></i> All rights reserved.</p>`;


window.addEventListener("scroll" , () => {
  sideBar.classList.remove("active");
  menu.classList.remove("active");
})