var toDoList = [];

var button = document.querySelector(".button");
button.addEventListener("click", plusList);

function plusList() {
  var text = document.querySelector(".text").value;
  if(text != null) {
    toDoList.push(text);
    document.querySelector(".text").value = "";
    document.querySelector(".text").focus();
  }
  lists();
}

function lists() {
  var list = "<ul>";
  for(var i = 0; i < toDoList.length; i++) {
    list += "<li>" + toDoList[i] + "<span class='close' id=" + i + ">X</span></li>";
  }
  list += "</li>";

  document.querySelector(".listArea").innerHTML = list;

  var erase = document.querySelectorAll(".close");
  for(var i = 0; i < erase.length; i++) {
    erase[i].addEventListener("click", eraseList);
  }
}

function eraseList() {
  var id = this.getAttribute("id");
  toDoList.splice(id, 1);
  lists();
}