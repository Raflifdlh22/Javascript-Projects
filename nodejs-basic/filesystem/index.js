// tampilkan teks pada notes.txt pada console.
const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};
fs.readFile("filesystem\\notes.txt", "utf-8", fileReadCallback);
