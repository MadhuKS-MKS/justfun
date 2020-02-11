document.getElementById("sub").addEventListener("click", loadData);

function loadData() {
  const num = document.getElementById("range").value;
  console.log(num);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true);
  xhr.onload = function() {
    console.log("hi");
    if (this.status === 200) {
      const joke = JSON.parse(this.responseText);
      let output = "";
      console.log(joke);
      joke.value.forEach(function(jokes) {
        output += `<li>${jokes.joke}</li>`;
      });
      document.getElementById("joke").innerHTML = output;
    }
  };
  xhr.send();
}
