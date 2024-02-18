function validateAndSubmit() {
  resetErrors();

  
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var userId = document.getElementById("userId").value;

  
  var isValid = true;

  if (title.trim() === "") {
    displayError("title", "Title is required");
    isValid = false;
  }

  if (body.trim() === "") {
    displayError("body", "Body is required");
    isValid = false;
  }

  if (isNaN(userId) || userId <= 0) {
    displayError("userId", "User ID must be a positive number");
    isValid = false;
  }

  
  if (isValid) {
    
    let obj = { "title:": title, body: body, userId: userId };
    postData(obj);

    
    document.getElementById("myForm").reset();
  }
}

function displayError(fieldId, errorMessage) {
  
  document.getElementById(fieldId + "Error").innerText = errorMessage;
}

function resetErrors() {
  document.getElementById("titleError").innerText = "";
  document.getElementById("bodyError").innerText = "";
  document.getElementById("userIdError").innerText = "";
}

function postData(data) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 201) {
        displaySuccessMessage("Post request successful!");
      console.log("Post Created:", JSON.parse(xhr.responseText));
    }
  };
  xhr.send(JSON.stringify(data));
}

function displaySuccessMessage(message) {

    var successMessage = document.createElement("h1");
    successMessage.style.color = "green";
    successMessage.textContent = message;

    document.getElementById("myForm").appendChild(successMessage);

   
    setTimeout(function () {
        document.getElementById("myForm").removeChild(successMessage);
    }, 10000);
}