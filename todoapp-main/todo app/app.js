function constructor(id ,title ,complete ){
  this.id = id;
  this.title = title;
  this.complete = complete;

}
var array = [];
var count = 0


function addvalue(){
  var input1 = document.getElementById("inp");
  // console.log(input1.value)
  
    array.push ( new constructor(count,input1.value,0) )
    count++
    for (var i = 0 ; i< array.length; i++){
   
      document.getElementById("addvalue").innerHTML = array[i].title + "<br>";
    }
   
}
// // creating and adding list item 
// var li = document.createElement("li")

// li.innerHTML = input.value;
// li.setAttribute("id" , Math.random());

// //edit button

// var editButton = document.createElement("button");
// editButton.innerHTML = "Edit"
// editButton.setAttribute("onclick()" , "edititem(event) ")
// li.appendChild(editButton);

// var deleteButton = document.createElement("button");
// deleteButton.innerHTML = "Delete";
// deleteButton.setAttribute("onclick","deleteItem(event)");
// li.appendChild(deleteButton);












// addItem function
function addItem() {

  // get elements
  var input = document.getElementById('Input')
  var list = document.getElementById('List')

  // li Creation
  var item = document.createElement('li')
  item.innerHTML = input.value


  // update button Creation
  var update = document.createElement('button')
  update.innerHTML = 'Update'
  update.setAttribute('onclick', 'updateItem(event)')



  // delete button Creation
  var delBtn = document.createElement('button')
  delBtn.innerHTML = 'Delete'
  delBtn.setAttribute('onclick', 'deleteItem(event)')


  // edit button Creation
  var editBtn = document.createElement('button')
  editBtn.innerHTML = 'Edit'
  editBtn.setAttribute('onclick', 'editItem(event)')


  // add elements
  list.appendChild(item)
  item.appendChild(delBtn)
  item.appendChild(editBtn)

  input.value = ''
}


// delete function
function deleteItem(event) {
  var li = event.target.parentElement
  var ul = li.parentElement
  ul.removeChild(li)
}


// edit function
function editItem(event) {
  var li = event.target.parentElement
  var val = li.childNodes[0].nodeValue
  var input = document.getElementById('Input')
  input.value = val

  // change btns
  var btn = document.getElementsByTagName('button')
  var addBtn = btn[0]
  var updateBtn = btn[1]

  addBtn.style.display = 'none'
  updateBtn.style.display = 'inline'

  editElement = li
}


// Update function
function updateItem() {

  var input = document.getElementById('Input')
  editElement.childNodes[0].nodeValue = input.value

  input.value = ''

  // change btns
  var btn = document.getElementsByTagName('button')
  var addBtn = btn[0]
  var updateBtn = btn[1]

  addBtn.style.display = 'inline'
  updateBtn.style.display = 'none'

}













































// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }