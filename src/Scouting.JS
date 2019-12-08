let ctr = 1;
function cloneSelect() {
  let target = document.getElementById('bef');
  let Output = document.getElementById("action").value;
  let tblr = document.createElement('tr');
  let tbld1 = document.createElement('td');
  let tbld2 = document.createElement("td");
  let tblin = document.createElement('input');
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
  let name = "Author" + (ctr - 1);
  let cTarget = document.getElementById(name);
  let tr = cTarget.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  ctr = ctr - 1;
}

let y = 0;
let paragraph = 0;
function calculate() {
  let numvalue = document.getElementById("numbers").value;
  numvalue = parseInt(numvalue);
  console.log(numvalue);
  Number(y);
  paragraph = y + numvalue;
  document.getElementById("sump").innerHTML = paragraph;
  y = paragraph;
}
let subParagraph = 0;
function crashUndo() {
  let subvalue = document.getElementById("numbers").value;
  subvalue = parseInt(subvalue);
  var x = document.getElementById("sump").innerHTML;
  x = String(x);
  subParagraph = x-subvalue;
  document.getElementById("sump").innerHTML = subParagraph;
}

function plus(elementName) {
let name = document.getElementsByName(elementName)[0].value;
name++;
document.getElementsByName(elementName)[0].value = name;
}

function minus(elementName) {
let name = document.getElementsByName(elementName)[0].value;
name--;
document.getElementsByName(elementName)[0].value = name;
}

let nameid = 1

function penelties() {
let before = document.getElementById("ptr");
let type = document.getElementById("Penelty").value;
let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
td2.setAttribute("name", nameid);
td2.setAttribute("id", nameid);

td1.appendChild(document.createTextNode(type));
td1.setAttribute("class", "texttype");

tr.appendChild(td1);
tr.appendChild(td2);
before.parentNode.insertBefore(tr, before);

document.getElementById("Penelty").value = "Select action";
nameid++
}

function undoP() {
  let Pname = (nameid-1);
  let PTarget = document.getElementById(Pname);
  let ttrr = PTarget.parentNode;
  ttrr.parentNode.removeChild(ttrr);
  nameid = nameid - 1;
}
