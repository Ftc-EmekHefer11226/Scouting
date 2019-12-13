let ctr = 1;
function cloneSelect() {
  let target = document.getElementById('bef');
  let Output = document.getElementById("action").value;
  let tblr = document.createElement('tr');
  let tbld1 = document.createElement('td');
  let tbld2 = document.createElement("td");
  let tblin = document.createElement('input');
  tblin.name = 'Autho' + ctr;
  tblin.id = 'Autho' + ctr;
  tblin.setAttribute('type', 'hidden');
  tblin.setAttribute('value', Output);
  tblin.classList.add('ftc');
  tbld1.appendChild(document.createTextNode(Output));

  tbld2.appendChild(tblin);
  tblr.appendChild(tbld1);
  tblr.appendChild(tbld2);
  target.parentNode.insertBefore(tblr, target);

  document.getElementById("action").value = "Select action";
  ctr++;
}

function Undo() {
  let name = "Autho" + (ctr - 1);
  let cTarget = document.getElementById(name);
  let tr = cTarget.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  ctr = ctr - 1;
}
let crashlist = [];
let itemplace = -1;
let y = 0;
let paragraph = 0;
function calculate() {
  let numvalue = document.getElementById("numbers").value;
  if (numvalue === "") {
    numvalue = 0;
  } else {
    y = document.getElementById("sump").innerHTML;
    numvalue = parseInt(numvalue);
    console.log(paragraph);
    y = Number(y);
    paragraph = y + numvalue;
    document.getElementById("sump").innerHTML = paragraph;
    crashlist.push(numvalue);
    itemplace = itemplace + 1;
  }

}
let subParagraph = 0;
function crashUndo() {
  let subvalue = document.getElementById("numbers").value;
  subvalue = parseInt(subvalue);
  let x = document.getElementById("sump").innerHTML;
  x = String(x);
  let crashvalue = crashlist[itemplace];
  subParagraph = x - crashvalue;
  document.getElementById("sump").innerHTML = subParagraph;
  itemplace--;
  crashlist.pop();
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
  td2.setAttribute('value', type);
  td2.classList.add('ftc');

  td1.appendChild(document.createTextNode(type));
  td1.setAttribute("class", "texttype");

  tr.appendChild(td1);
  tr.appendChild(td2);
  before.parentNode.insertBefore(tr, before);

  document.getElementById("Penelty").value = "Select action";
  nameid++
}

function undoP() {
  let Pname = (nameid - 1);
  let PTarget = document.getElementById(Pname);
  let ttrr = PTarget.parentNode;
  ttrr.parentNode.removeChild(ttrr);
  nameid = nameid - 1;
}

let cloning = 1;

function cloneOtonomy() {
  let Otarget = document.getElementById('befo');
  let AutoOutput = document.getElementById("otonomyAction").value;
  let tablr = document.createElement('tr');
  let tabld1 = document.createElement('td');
  let tabld2 = document.createElement("td");
  let tablin = document.createElement('input');
  tablin.name = 'Author' + cloning;
  tablin.id = 'Author' + cloning;
  tablin.setAttribute('type', 'hidden');
  tablin.setAttribute('value', AutoOutput);
  tablin.classList.add('ftc');
  

  tabld1.appendChild(document.createTextNode(AutoOutput));

  tabld2.appendChild(tablin);
  tablr.appendChild(tabld1);
  tablr.appendChild(tabld2);
  Otarget.parentNode.insertBefore(tablr, Otarget);

  document.getElementById("otonomyAction").value = "Select action";
  cloning++;
}

function autoUndo() {
  let theName = "Author" + (cloning - 1);
  let aTarget = document.getElementById(theName);
  let Atr = aTarget.parentNode.parentNode;
  Atr.parentNode.removeChild(Atr);
  cloning = cloning - 1;
}

function sendForm(event) {
  var xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  const elements = document.querySelectorAll('.ftc');
  const data = formToJson(elements);

  xhr.open("PUT", `https://s3-eu-west-1.amazonaws.com/ftc.emekhefer/logs/ftc_${ Date.now()}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.20.1");
  xhr.setRequestHeader("Accept", "/");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  // xhr.setRequestHeader("Postman-Token", "cd78ec9a-0ca2-4d59-9bf3-d4b382138a26,84ace081-613f-445d-a3c5-444accd0a325");
  // xhr.setRequestHeader("Host", "https://s3-eu-west-1.amazonaws.com/");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Content-Length", "36");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(JSON.stringify(data));
}

function formToJson(elements) {
  const data = {};
  for (const item of elements) {
    data[item.name] = item.value;
  }
  return data;
}