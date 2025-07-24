// select the contact form 
const form =document.getElementById("contact-form");
// add submit event listener
form.addEventListener("submit", function(e){
    e.preventDefault(); //stop the form  from refreshing the page 
    alert("Thanks for contacting me!");
    form.requestFullscreen();// optional:clear form field after submitting 
});
//scroll to top button logic
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", function (){
if (window.scrollY > 200) {
    scrollBtn.style.display ="block";
} else{
    scrollBtn.style.display ="none";
}
});
//scroll to top smoothly when clicked
scrollBtn.addEventListener*("click", function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
        });
});