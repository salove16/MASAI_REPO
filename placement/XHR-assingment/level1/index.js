
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Response:", JSON.parse(xhr.response));
    // const container=document.getElementsByClassName("cards")
    JSON.parse(xhr.response).map((e)=>{
        const h1=document.createElement("h1")
        h1.setAttribute('id', 'box')
        h1.innerHTML=e.title
       document.getElementById("main").append(h1)
        
    })

    }else{
        console.error("Error fetching items. Status code:", xhr.status);
    }
    };

  
    xhr.onerror = function () {
        console.log("Request failed");
    }
    // console.log(xhr.send())
    xhr.send();
   }
  console.log(getData()) 

  const container=document.getElementsByClassName("card")




