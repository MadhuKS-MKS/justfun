document.getElementById("selct").addEventListener("click", txtdis);

function txtdis() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById(
        "detl"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };
  xhr.send();
}
