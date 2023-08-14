function showResult() {
    // kode untuk menampilkan skor dan media sosial
    // ...
  
    // kode untuk menambahkan tombol untuk beralih ke halaman credit.html
    var creditButton = document.createElement("button");
    creditButton.innerHTML = "Credit";
    creditButton.onclick = function() {
      window.location.href = "credit.html";
    };
    document.body.appendChild(creditButton);
  }