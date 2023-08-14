<?php
// Koneksi ke database MySQL
$host = "localhost";
$username = "root";
$password = "";
$database = "quiz_db";

$conn = mysqli_connect($host, $username, $password, $database);

// Proses data dari form quiz
if (isset($_POST['save'])) {
  // Ambil data dari form quiz
  $nama = $_POST['nama'];
  $email = $_POST['email'];
  $score = $_POST['score'];

  // Simpan data ke dalam database
  $query = "INSERT INTO quiz (nama, email, score) VALUES ('$nama', '$email', '$score')";
  mysqli_query($conn, $query);

  // Redirect ke halaman terima kasih
  header("Location: thank_you.html");
  exit();
}
?>