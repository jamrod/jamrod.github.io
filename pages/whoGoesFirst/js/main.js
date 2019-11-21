console.log("ok!");

document.getElementById('reset').style.visibility = "hidden";

var names = [];
let outArr = [];
var nameSpace = document.getElementById("name");
var label = document.getElementById("label");
var list = document.getElementById("list");


function clearSpace(){
  num = outArr.length;
  if (num)	{
    while (num > 0) {
      list.removeChild(list.childNodes[num]);
      num--;
      };
    };  
}
function addLine(){
  let input = nameSpace.value;
  let newLine = document.createElement("p");
  label.innerHTML = "Enter Next Persons Name";
  names.push(input);
  list.appendChild(newLine);
  newLine.class = "new";
  newLine.innerHTML = input;
  nameSpace.value = "";
  nameSpace.focus();
};

function getPlayer(){
  let input = nameSpace.value;
  nameSpace.value = "";
  nameSpace.style.visibility = "hidden";
  nameSpace.style.width = "5px";
  if (input) {
    names.push(input);
    let newLine = document.createElement("p");
    list.appendChild(newLine);
    newLine.class = "new";
    newLine.innerHTML = input;
  };
  let len = names.length;
  if (len) {
    for (i=len; i>0; i--){
      let num = Math.floor(Math.random() * len);
      outArr.push(names[num]);
      names.splice(num, 1);
      len = names.length;
    }
    let answer = outArr[0];
    label.innerHTML = answer + " Goes First!";
    clearSpace();
    for(i = 0; i < outArr.length; i++){
      let newItem = document.createElement("li");
      newItem.innerHTML = outArr[i];
      list.appendChild(newItem);
    }
  }
  else {label.innerHTML = " No names! Try again..."};
  
  nameSpace.innerHTML = "";
  document.getElementById('add').style.visibility = "hidden";
  document.getElementById('complete').style.visibility = "hidden";
  document.getElementById('reset').style.visibility = "visible";
};

function reset(){
  clearSpace();
  nameSpace.style.visibility = "visible";
  document.getElementById('add').style.visibility = "visible";
  document.getElementById('complete').style.visibility = "visible";
  document.getElementById('label').innerHTML = "Enter 1st Persons Name";
  document.getElementById('reset').style.visibility = "hidden";
  nameSpace.value = "";
  names = [];
  outArr = [];
  nameSpace.style.width = "175px";
}

document.getElementById("add").addEventListener("click", addLine);
document.getElementById("complete").addEventListener("click", getPlayer);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("name").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addLine();
  }
  });