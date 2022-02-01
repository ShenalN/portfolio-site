const menu = document.querySelector(".menu-box");
const sideBar = document.querySelector("nav");
const box = document.querySelectorAll(".aboutheader");
const aboutP = document.querySelector(".aboutP");


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
    //Host: 'smtp.elasticemail.com',
    Host: 'smtp.gmail.com',
    Username: '123blackflash@gmail.com',
    Password:  'shenal123!',
    To: 'inokasujivani7@gmail.com',
    From: email,
    Subject: 'New contact form inquery',
    Body: "Name :" + name + "<br><br>" +
           "Email :" + email + "<br><br>" +
           "Message :" + message
  }).then(
    message => alert(message)
  );

}
