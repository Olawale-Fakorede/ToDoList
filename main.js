
// var divList = document.getElementById('addList');
// var mainList = document.createElement("ul");
// divList.appendChild(mainList);

// function addTask(){
//     var collectData = document.querySelector("input").value;
//     var div = document.createElement("div");
//     div.id = "listDiv";

//     var smallList = document.createElement("li");
//     smallList.textContent = collectData;
//     smallList.id = "listAll";

//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.id = "check";
//     checkbox.onchange = function() {
//         if(this.checked) {
//             smallList.style.textDecoration = "line-through";
//         } else {
//             smallList.style.textDecoration = "none";
//         }
//     };

//     var button = document.createElement("button");
//     button.textContent = "X";
//     button.id = "closeBtn";
//     button.onclick = function() {
//         div.remove();
//     };

//     div.appendChild(checkbox);
//     div.appendChild(smallList);
//     div.appendChild(button);
//     mainList.appendChild(div);
    
//     localStorage.setItem(collectData, "myList");

//     localStorage.getItem(collectData).
// }



var divList = document.getElementById('addList');
var mainList = document.createElement("ul");
divList.appendChild(mainList);

function addTask(){
    var collectData = document.querySelector("input").value;
    var div = document.createElement("div");
    div.id = "listDiv";

    var smallList = document.createElement("li");
    smallList.textContent = collectData;
    smallList.id = "listAll";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check";
    checkbox.onchange = function() {
        if(this.checked) {
            smallList.style.textDecoration = "line-through";
        } else {
            smallList.style.textDecoration = "none";
        }
    };

    var button = document.createElement("button");
    button.textContent = "X";
    button.id = "closeBtn";
    button.onclick = function() {
        div.remove();
        // Remove the task from local storage when the task is removed from the list
        localStorage.removeItem("myList");
    };

    div.appendChild(checkbox);
    div.appendChild(smallList);
    div.appendChild(button);
    mainList.appendChild(div);

    // Save the task to local storage
    localStorage.setItem("myList", collectData);
}

// Load the task from local storage when the page is loaded
window.onload = function() {
    var savedTask = localStorage.getItem("myList");
    if (savedTask) {
        document.querySelector("input").value = savedTask;
        addTask();
    }
}
