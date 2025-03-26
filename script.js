document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    //select the form
   const form =
    document.getElementById("registration-form");
    if (!form) {
        console.error("form not found! check the ID in HTML");
    }  else{ 
        console.log("form selected successfully:", form);
    }
    const feedbackDiv = document.getElementById("form-feedback");
          if (!feedbackDiv) {
            console.error("Error: Feedbackdiv not found! check the ID in HTML.");
          } else  {
                    console.log("feedbackdiv selected successfully:", feedbackDiv);
                };

        

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Get input values and trim whitespace
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        // Debugging: check values in the console
        console.log("Username:",username);
        console.log("Email:",email);
        console.log("Password:",password);

        if (!username || !email || !password){
            console.error("one or more inputs are empty");
        }
    
    let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !
         email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback messages
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
}
});
});
