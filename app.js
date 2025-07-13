 document.getElementById("addBtn").onclick = function() {
      var taskInput = document.getElementById("taskInput");
      var taskText = taskInput.value.trim();

      if (taskText !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskText + ' <button class="deleteBtn">Delete</button>';
        document.getElementById("taskList").appendChild(li);

        
        taskInput.value = "";

        
        li.querySelector(".deleteBtn").onclick = function() {
          li.remove();
        };
      } else {
        alert("Please enter a task!");
      }
    };