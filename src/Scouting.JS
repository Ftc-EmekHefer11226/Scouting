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
    document.getElementById("hiddenSUMP").value = y;
    let hey = document.getElementById("hiddenSUMP").value;
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
  document.getElementById("hiddenSUMP").value = y;
  let hey = document.getElementById("hiddenSUMP").value;
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

let peneltyList = [];
let peneltyPlace = -1;
function penelties() {
  let pOutput = document.getElementById("Penelty").value;
  peneltyList.push(" " + pOutput);
  document.getElementById("peneltyPara").innerHTML = peneltyList;
  peneltyPlace = peneltyPlace + 1;
  document.getElementById("Penelty").value = "boom";
}

function undoP() {
  let pValue = peneltyList[peneltyPlace];
  let pparaValue = document.getElementById("peneltyPara").innerHTML;
  document.getElementById("peneltyPara").innerHTML = pparaValue.replace(pValue, " ");
  peneltyList.pop();
  peneltyPlace--;
}

let cloning = 1;
let cloneList = [];
let clonePlace = -1;
function cloneOtonomy() {
  let AutoOutput = document.getElementById("otonomyAction").value;
  cloneList.push(" " + AutoOutput);
  document.getElementById("pargraphClone").innerHTML = cloneList;
  document.getElementById("otonomyAction").value = "Select action";
  clonePlace = clonePlace + 1;
  console.log(cloneList);
}

function autoUndo() {
  let autoValue = cloneList[clonePlace];
  let paraValue = document.getElementById("pargraphClone").innerHTML;
  document.getElementById("pargraphClone").innerHTML = paraValue.replace(autoValue, "");
  cloneList.pop();
  clonePlace--;
}

function sendForm(event) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  const elements = document.querySelectorAll('.ftc');
  const data = formToJson(elements);

  xhr.open("POST", `https://s3-eu-west-1.amazonaws.com/ftc.emekhefer/logs/ftc_${Date.now()}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.20.1");
  xhr.setRequestHeader("Accept", "/");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  // xhr.setRequestHeader("Postman-Token", "cd78ec9a-0ca2-4d59-9bf3-d4b382138a26,84ace081-613f-445d-a3c5-444accd0a325");
  xhr.setRequestHeader("Host", "test-simple.s3-eu-west-1.amazonaws.com");
  xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
  xhr.setRequestHeader("Content-Length", "36");
  xhr.setRequestHeader("Connection", "keep-alive");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(JSON.stringify(data));
  alert("Your form has been sumbited");

}

function formToJson(elements) {
  const data = {};
  for (const item of elements) {
    data[item.name] = item.value;
  }
  return data;
}


function reload() {
  let yesno = window.confirm("Reset page?");
  if (yesno) {
    location.reload();

  }
  else {

  }

}
function timeDate() {
  let time = Date(Date.now());
  time.toString;
  document.getElementById("Date").innerHTML = time;
  let paraDate = document.getElementById("Date").innerHTML;
  paraDate = String(paraDate);
  document.getElementById("theDateNow").value = paraDate;
}