var js_imie = document.getElementById("h_imie").value;
//Pobranie wartości z komórek po id i zapis do zmiennych

$.ajax({
  url: "zapytanie.php",
  type: "POST",
  data: { js_imie: js_imie },
  dataType: "json",
  //Wysłanie POST z wartościami js_ do zapytanie.php
  //Oczekiwanie JSON
  success: function (data) {
    //Jeśli ok:
    console.log(data); //Wyświetla w konsoli zawartość JSONa
    var p_nazwisko = data.json_nazwisko; //Wydobycie nazwiska
    var js_output = js_imie + " ma na nazwisko " + p_nazwisko; //Scalanie tekstu
    var js_response = document.getElementById("h_response"); //Identyfikacja elementu wyświetlającego
    js_response.innerHTML = js_output; //Wyświetlenie
  },
  error: function (xhr, status, error) {
    //Jeśli nie ok:
    console.log("Błąd: " + error);
  },
});
