var ctr = 1;
function cloneSelect() {
  var target = document.getElementById('bef');
  var Output = document.getElementById("action").value;
  var tblr = document.createElement('tr');
  var tbld1 = document.createElement('td');
  var tbld2 = document.createElement("td");
  var tblin = document.createElement('input');
  tblin.name = 'Author' + ctr;
  tblin.id = 'Author' + ctr;
  tblin.placeholder = 'add another author';

  tbld1.appendChild(document.createTextNode(Output));

  tbld2.appendChild(tblin);
  tblr.appendChild(tbld1);
  tblr.appendChild(tbld2);
  target.parentNode.insertBefore(tblr, target);

  document.getElementById("action").value = "Select action";
  ctr++;
}

function Undo() {
  var name = "Author" + (ctr - 1);
  var cTarget = document.getElementById(name);
  var tr = cTarget.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  ctr = ctr - 1;
}
let y = 0;
let paragraph = 0;
function copypaste() {
  let numvalue = document.getElementById("numbers").value;
  numvalue = parseInt(numvalue);
  Number(y);
  paragraph = y + numvalue;
  document.getElementById("sump").innerHTML = paragraph;
  y = paragraph;
}



