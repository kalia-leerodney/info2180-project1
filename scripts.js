/* Add your JavaScript to this file */

window.onload = function(){
    
    
    var subscribebutton = document.getElementsByClassName("btn")[1];
    subscribebutton.addEventListener("click", function(e){
       var email = document.getElementById("email").value;
       var messageText = document.getElementsByClassName("message")[0];
       var errorMessage = "Please enter a valid email address";
       var passMessage = "Thank you! Your email address " + email + " has been added to our mailing list";
       
       if (email.length == 0){
          messageText.textContent = errorMessage;     
       }


       else if (email.length > 0){  
          messageText.textContent = passMessage;
          
       }

       e.preventDefault();

      
   });
}
