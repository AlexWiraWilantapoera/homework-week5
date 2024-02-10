function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

var nameInput = [];
var age = [];
var allowance = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);

  let nameTemp = document.getElementById("name").value;
  let ageTemp = document.getElementById("age").value;
  let allowanceTemp = document.getElementById("allowance").value;

  if (nameTemp.length >= 10 && ageTemp >= 25 && allowanceTemp >= 100000 && allowanceTemp <= 1000000) {
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);

    nameInput[x] = nameTemp;
    age[x] = ageTemp;
    allowance[x] = allowanceTemp;

    cel1.innerHTML = nameInput[x];
    cel2.innerHTML = age[x];
    cel3.innerHTML = allowance[x];

    n++;
    x++;
  } else {
    if (nameTemp.length < 10) {
      alert("Nama kurang dari 10 karakter.");
    }
    if (ageTemp < 25) {
      alert("Usia kurang dari 25 tahun.");
    }
    if (allowanceTemp < 100000 && allowanceTemp > 1000000) {
      alert("uang sangu harus berkisar antara 100000 dan 1000000.");
    }
  }
}

document.getElementById("resume").innerHTML = "Rata rata pendaftar memiliki uang sangu sebesar [nilai rata rata uang sangu] dengan rata rata umur [nilai rata rata umur]";
