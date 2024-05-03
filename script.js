// script.js

function submitBooking() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
  
    // Display confirmation with animation
    document.getElementById("bookingForm").style.display = "none";
    var confirmationContainer = document.getElementById("bookingConfirmation");
    confirmationContainer.style.display = "block";
    setTimeout(function() {
      confirmationContainer.classList.add("confirmation-show");
    }, 100);
    document.getElementById("confirmationDetails").innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Date: " + date;
  }
  