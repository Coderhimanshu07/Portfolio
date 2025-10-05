const texts = ["Professional Coder", "Developer", "Cloud Engineer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {
  if (count === texts.length) {
    count = 0; // loop back to first text
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".dynamic").textContent = letter;

  if (letter.length === currentText.length) {
    // pause before deleting
    setTimeout(() => {
      eraseEffect();
    }, 1500);
  } else {
    setTimeout(typeEffect, 100);
  }
}

function eraseEffect() {
  letter = currentText.slice(0, --index);
  document.querySelector(".dynamic").textContent = letter;
  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(typeEffect, 500); // start typing next text
  } else {
    setTimeout(eraseEffect, 50);
  }
}

typeEffect();




document.getElementById("main_form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    // alert("Form submission is currently disabled.");

    let fName = document.querySelector(".fName").value;
    let lName = document.querySelector(".lName").value;
    let num = document.querySelector(".num").value;
    let email = document.querySelector(".email").value;

     let message = `Hello, my name is ${fName} ${lName}.
Here are my details:
📞 Phone: ${num}
📧 Email: ${email}

Looking forward to connecting with you!`;

    let whatsappURL = `https://wa.me/7291933500?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

});