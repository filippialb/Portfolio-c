



function scrollToElement(elementSelector, instance = 0){
    //Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //Check if there are elements matching the selector and if the requestedinstance exist
    if (elements.length > instance){
        //scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}






const linkJobDone = document.getElementById("linkJobDone");
const linkJobDone2 = document.getElementById("linkJobDone2");
const linkPricing = document.getElementById("linkPricing");
const linkAbout = document.getElementById("linkAbout");
const linkGetInTouch = document.getElementById("linkGetInTouch");
const linkGetInTouch2 = document.getElementById("linkGetInTouch2");

linkJobDone.addEventListener('click', () => {
     scrollToElement('.header');
});

linkJobDone2.addEventListener('click', () => {
  scrollToElement('.header');
});

linkJobDone2.addEventListener('click', () => {
  scrollToElement('.header');
});

linkPricing.addEventListener('click', () => {
    //scrool to the second element with "header" class 
    scrollToElement('.header', 1);
});

linkAbout.addEventListener('click', () => {
    scrollToElement('.column');
});

linkGetInTouch.addEventListener('click', () => {
  scrollToElement('.header', 2);
});





emailjs.init("JcV5iPHNv8AMgB7Hq");
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Check if any of the fields are empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    // Send the email using EmailJS
    emailjs.send("service_957rz0n", "template_7a4muam", {
      name: name,
      email: email,
      message: message
    }).then(function(response) {
      alert('Message sent successfully!');
      // clear the form after sending the message
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, function(error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    });
  });

  


  




