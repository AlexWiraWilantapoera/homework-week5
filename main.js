// tab pages - START
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
// tab pages - END

var list1 = [];
var list2 = [];
var list3 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("name").value;
  list2[x] = document.getElementById("age").value;
  list3[x] = document.getElementById("allowance").value;

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];

  n++;
  x++;
}

document.getElementById("resume").innerHTML = "Rata rata pendaftar memiliki uang sangu sebesar [nilai rata rata uang sangu] dengan rata rata umur [nilai rata rata umur]";
