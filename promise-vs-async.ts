const API_KEY: string = "69ba2b87506746b59926e57163eca243";
const NEWS_URL: string = `https://newsapi.org/v2/top-headlines?country=us&apiKey=69ba2b87506746b59926e57163eca243`;

// Promise 
function getDataPromise() {
    fetch(NEWS_URL)
    .then(res => res.json())
    .then(data => {
      console.log("Data pakai Promise:");
      console.log(data);
    })
    .catch(err => {
      console.log("Error:", err);
    });
}

getDataPromise();

// Aysnc await
async function getDataAsync() {
  try {
    const response = await fetch(NEWS_URL);
    const data = await response.json();
    console.log("Data pakai Async Await:");
    console.log(data);

  } catch (err) {
    console.log("Error terjadi:", err);
  }
} 

getDataAsync();