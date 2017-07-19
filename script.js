	// creating our form div
		var form = document.createElement("div");
		form.setAttribute("id","form");
		document.body.appendChild(form);
	// form div created

	// creating our text bar to add items . . . 
		var adder = document.createElement("input");
		adder.setAttribute("id", "input");
		adder.setAttribute("type", "text");
		adder.setAttribute("placeholder","Write Your Do...");
		form.appendChild(adder);
	// text bar created

	// creating our to do list with test <li>'s
		var todoParent = document.createElement("ol");
		todoParent.setAttribute("id","todolist");
		form.appendChild(todoParent);

		var items = ["TEST", "TEST", "TEST"];
		for(var i = 0; i < items.length; i++){
			var itemParent = document.createElement("li");
			var itemChild = document.createTextNode(items[i]);
			itemParent.appendChild(itemChild);
			todoParent.appendChild(itemParent);
		}
	// todo list created with test li's

	// creating our button
		var addButton = document.createElement("input");
		addButton.setAttribute("type","button");
		addButton.setAttribute("name","add");
		addButton.setAttribute("id","add");
		addButton.setAttribute("value","Add Your Do");

		var br = document.createElement("br");
		form.appendChild(br);
		form.appendChild(addButton);
	// button created

		var add = document.getElementById("add");
	// this is our button to add to do's to our list

		var input = document.getElementById("input");
	// this is our input box


		function addTask(){
			var task = input.value;
		// this will capure the value of our box

			var list = document.getElementById("todolist");
		// This is our unordered list

			var listItem = document.createElement("li");
			list.appendChild(listItem);
			listItem.innerHTML = task;
			input.value = "";
		}

	add.onclick = function(){
		if(input.value !== ""){
	  addTask();
	}
	}