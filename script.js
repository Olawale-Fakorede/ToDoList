// // var divList = document.getElementById('addList');
// // var mainList = document.createElement("ul");
// // divList.appendChild(mainList);


// // function addTask(){
// //     var collectData = document.querySelector("input").value;
// //     var smallList = document.createElement("li");
// //     mainList.appendChild(smallList);
// //     document.getElementById("addList").innerHTML = collectData
    
    
// // }


// // var divList = document.getElementById('addList');
// // var mainList = document.createElement("ul");
// // divList.appendChild(mainList);

// // function addTask(){
// //     var collectData = document.querySelector("input").value;
// //     var smallList = document.createElement("li");
// //     smallList.textContent = collectData;
// //     mainList.appendChild(smallList);
// // }



// // var divList = document.getElementById('addList');
// // var mainList = document.createElement("ul");
// // divList.appendChild(mainList);

// // function addTask(){
// //     var collectData = document.querySelector("input").value;
// //     var smallList = document.createElement("li");
// //     var checkbox = document.createElement("input");
// //     document.querySelector('input').setAttribute('id', 'check')
// //     checkbox.type = "checkbox";
// //     checkbox.addEventListener('change', function() {
// //         if (this.checked) {
// //             smallList.style.textDecoration = "line-through";
// //         } else {
// //             smallList.style.textDecoration = "none";
// //         }
// //     });
// //     smallList.textContent = collectData;
// //     smallList.prepend(checkbox);
// //     mainList.appendChild(smallList);
// // }


// // var delButton = document.createElement("button");
// // delButton.addEventListener('close', function(){
// //     if (this.remove) {
        
// //     }
// // })





// // LATEST

// var divList = document.getElementById('addList');
// var mainList = document.createElement("ul");
// divList.appendChild(mainList);

// function addTask(){
//     var collectData = document.querySelector("input").value;

//     // Create a new div and style it
//     var div = document.createElement("div");
//     div.style.width = "700px";
//     div.style.height = "60px";
//     // div.style.display = "flex";
//     div.style.backgroundColor = "white";

//     // Create a new list item
//     var smallList = document.createElement("li");
//     smallList.textContent = collectData;

//     // Create a new checkbox
//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.addEventListener('change', function() {
//         if (this.checked) {
//             smallList.style.textDecoration = "line-through";
//         } else {
//             smallList.style.textDecoration = "none";
//         }
//     });

//     // Create a new close button
//     var closeButton = document.createElement("button");
//     closeButton.textContent = "X";
//     closeButton.addEventListener('click', function() {
//         div.remove();
//     });

//     // Append the checkbox, list item, and close button to the div
//     div.appendChild(checkbox);
//     div.appendChild(smallList);
//     div.appendChild(closeButton);

//     // Append the div to the main list
//     mainList.appendChild(div);
// }

