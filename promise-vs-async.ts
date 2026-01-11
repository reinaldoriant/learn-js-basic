const API_KEY: string = "69ba2b87506746b59926e57163eca243";
const NEWS_URL: string = `https://newsapi.org/v2/top-headlines?country=us&apiKey=69ba2b87506746b59926e57163eca243`;

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
// ciri2 callback itu async


// Definisi Fungsi (Model Callback)
function gilingKopi(callback: (hasil: string) => void) {
  setTimeout(() => {
    console.log("1. Sedang menggiling...");
    callback("Bubuk Kopi"); // Panggil callback saat selesai
  }, 1000);
}

function rebusAir(callback: (hasil: string) => void) {
  setTimeout(() => {
    console.log("2. Sedang merebus air...");
    callback("Air Panas");
  }, 1000);
}

function sajikan(bahan1: string, bahan2: string, callback: () => void) {
  setTimeout(() => {
    console.log(`3. Mencampur ${bahan1} dan ${bahan2}...`);
    callback();
  }, 1000);
}

// --- CARA PAKAI (PERHATIKAN BENTUKNYA) ---
console.log("Mulai Pesan...");

gilingKopi((bubuk) => {
    // Kita harus nunggu giling selesai baru bisa rebus air
    rebusAir((air) => {
        // Kita harus nunggu air selesai baru bisa sajikan
        sajikan(bubuk, air, () => {
            console.log("✅ Kopi Siap Dinikmati! (Selesai)");
        });
    });
});