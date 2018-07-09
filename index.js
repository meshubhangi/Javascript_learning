var list = document.getElementById("myList");
var newItem = document.createElement("li");
newItem.innerHTML = "new item created dynamically";

var listItems = list.children; 
list.insertBefore(newItem, listItems[1]); 