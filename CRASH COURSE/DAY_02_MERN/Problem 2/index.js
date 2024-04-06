async function fetchData() {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      const response = await fetch(apiUrl);
  
      const data = await response.json();
  
      console.log(data);
      
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  fetchData();
  