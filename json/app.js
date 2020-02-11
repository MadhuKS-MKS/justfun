document.getElementById("cstmr").addEventListener("click", addcstmr);
document.getElementById("cstmrs").addEventListener("click", showmore);

function addcstmr(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "custmr.json", true);
  xhr.onload = function() {
    if (this.status === 200) {
      const custmr = JSON.parse(this.responseText);
      //   console.log(custmr);
      let out = `
            <li>${custmr.id}</li>
            <li>${custmr.name}</li>
            <li>${custmr.age}</li>
            <li>${custmr.phone}</li>
            <li>${custmr.email}</li>
           `;
      //   console.log(out);
      document.getElementById("cust").innerHTML = `<ul>${out}</ul>`;
    }
  };
  xhr.send();
}

function showmore(e) {
  //   console.log("hii");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "custmrs.json", true);
  xhr.onload = function() {
    console.log("hi");
    if (this.status === 200) {
      const custmrs = JSON.parse(this.responseText);
      let output = "";
      console.log(custmrs);

      custmrs.forEach(function(cust) {
        output += `<li>${cust.id}</li>
            <li>${cust.name}</li>
            <li>${cust.age}</li>
          
            <li>${cust.email}</li>`;
      });
      document.getElementById("custs").innerHTML = output;
    }
  };
  xhr.send();
}
