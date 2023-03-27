//Tworzenie funkcji odczytującej wartość ciasteczka o podanej nazwie.
function getCookieValue(cookieName) {
  const cookieParts = document.cookie.split(";");
  for (let i = 0; i < cookieParts.length; i++) {
    const cookieKeyValue = cookieParts[i].split("=");
    if (cookieKeyValue[0].trim() === cookieName) {
      return cookieKeyValue[1];
    }
  }
  return "";
}

var count = parseInt(getCookieValue("c_amount")) || 0;

if (getCookieValue("c_last") || getCookieValue("c_amount")) {
  console.log("Ciasteczko znalezione");
  // Użycie funkcji do odczytu wartości parametrów
  var js_last = getCookieValue("c_last");
  var js_amount = count;
  document.getElementById("h_last").innerHTML = js_last;
  document.getElementById("h_amount").innerHTML = js_amount;
  console.log("last" + js_last);
  console.log("ammount" + js_amount);
}

//Tworzenie/Nadpisywanie ciasteczka
let expirationDate = new Date();
let last_Date = new Date();
expirationDate.setDate(expirationDate.getDate() + 7);
last_Date.setDate(last_Date.getDate());
count = count + 1;
document.cookie =
  "c_last=" +
  last_Date +
  "; expires=" +
  expirationDate.toUTCString() +
  "; path=/";
document.cookie =
  "c_amount=" +
  count +
  "; expires=" +
  expirationDate.toUTCString() +
  "; path=/";
