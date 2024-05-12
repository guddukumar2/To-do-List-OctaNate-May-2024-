function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);
    
    var completeButton = document.createElement("button");
    completeButton.innerHTML = "✅";
    completeButton.onclick = function() {
        li.style.textDecoration = "line-through";
    };
    li.appendChild(completeButton);
    
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
}
