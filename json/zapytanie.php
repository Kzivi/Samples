<?php
$servername = "127.0.0.1"; //IP Servera
$username = "root"; //Login do serwera BD
$password = "123456789"; //Hasło
$dbname = "test"; //Baza danych

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) { //Sprawdzanie połączenia
    die("Connection failed: " . mysqli_connect_error());
}

//Pobieranie danych z formularza logowania
$p_imie = $_POST['js_imie'];

$sql = "SELECT nazwisko FROM osoby WHERE imie='$p_imie'"; // Tworzenie zapytania do bazy danych
$result = mysqli_query($conn, $sql); // Odpowiedź
if (mysqli_num_rows($result) == 0) { //Jeśli nie ma takiego Imienia
    $data = array('json_nazwisko' => 'nie ma.'); //Zapakowanie danych do JSON
} else { //Jeśli jest imię:
    $db_nazwisko = mysqli_fetch_assoc($result)['nazwisko'] . "."; //Wydobycie danych
    $data = array('json_nazwisko' => $db_nazwisko); //Zapakowanie danych do JSON
}
echo json_encode($data); //Wsyłanie JSON
mysqli_close($conn); //Zamykanie połączenia z bazą danych
?>