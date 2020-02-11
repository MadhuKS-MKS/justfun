const num = Math.floor(Math.random() * 10 + 1);

let chance = 3;

let sub = document.getElementById("sub");
sub.addEventListener("click", onload);

function onload() {
  let guess = document.getElementById("guess").value;
  if (guess == num) {
    document.getElementById(
      "res"
    ).innerHTML = `<i style="color:green" class="display-4">Whoo!!.. Your guess is right</i>`;

    document.getElementById("sub").textContent = "Play Again";
     sub.addEventListener("click", restart);
     function restart() {
       location.reload();
     }
  } else {
    chance--;

    if (chance <= 0) {
      guess = document.getElementById("guess");
      guess.disabled = true;
      guess.borderColor = "red";

      document.getElementById("sub").textContent = "Play Again";
      document.getElementById(
        "res"
      ).innerHTML = `<i style="color:red"  class="display-4">Wrong!! Try Again</i>`;
       if (chance == 0) {
         
         sub.addEventListener("click", restart);
         function restart() {
           location.reload();
         }
       }
    } else {
      guess = document.getElementById("guess");
      let reso = document.getElementById("res");
      // document.getElementById('guess').borderColor = "red";
      // document.getElementById("fxn").className = "active-red-3 active-pink-4 ";
      reso.innerHTML = `<i style="color:red" class="display-4">Wrong!! You left ${chance} chance !!</i>`
      guess.style.border = "red solid";
     
     
      
      reso.style.color = "red";
     
    }
  }
}
