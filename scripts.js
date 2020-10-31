/* Add your JavaScript to this file */

document.onload = function(){
    var email = document.querySelector("#email").value;
    var message = document.querySelector(".message").innerHTML;
    let subscribebutton = document.querySelector(".btn");
    let errorMessage = "Please insert an email address";
    let passMessage = "Thank you! Your email address " + email + " Has been added to our mailing list";

   subscribebutton.addEventListener("subscribe", function(){
       if (email == " " || email == null){
            message.classList.add(errorMessage);
       }

       else{
            message.classList.add(passMessage);
       }
   })
}