let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabName){
    
       for( tablink of tablinks){
        tablink.classList.remove("active-link");
       }
       for( tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
       }
       event.currentTarget.classList.add("active-link")
      document.getElementById(tabName).classList.add("active-tab")
       
}

// Find the element with the class name "emailt"
const emailElement = document.querySelector('.emailt');

// Add a click event listener to the element
emailElement.addEventListener('click', () => {
    // Create a temporary input element
    const tempInput = document.createElement('input');

    // Set its value to the text content of the email element
    tempInput.value = emailElement.textContent.trim();

    // Append the input element to the document body
    document.body.appendChild(tempInput);

    // Select the value of the input element
    tempInput.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide visual feedback or a message to indicate that the text has been copied
    alert('Email copied to clipboard! ' )
});



