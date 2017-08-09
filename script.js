	const form = document.createElement("div");
	const adder = document.createElement("input");
	const todoParent = document.createElement("ol");
	const addButton = document.createElement("input");
	const br = document.createElement("br");

	// creating our form div
	function createDiv(){
		form.setAttribute("id","form");
		document.body.appendChild(form);
	}
	// form div created

	// creating our text bar to add items . . . 
	function createInput(){
		adder.setAttribute("id", "input");
		adder.setAttribute("type", "text");
		adder.setAttribute("placeholder","Write Your Do...");
		form.appendChild(adder);
	}
	// text bar created

	// creating our to do list with test <li>'s
	function createTest(){
		todoParent.setAttribute("id","todolist");
		form.appendChild(todoParent);

		var items = ["TEST", "TEST", "TEST"];
		for(var i = 0; i < items.length; i++){
			var itemParent = document.createElement("li");
			var itemChild = document.createTextNode(items[i]);
			itemParent.appendChild(itemChild);
			todoParent.appendChild(itemParent);
		}
	}
	// todo list created with test li's

	// creating our button
	function createButton(){
		addButton.setAttribute("type","button");
		addButton.setAttribute("name","add");
		addButton.setAttribute("id","add");
		addButton.setAttribute("value","Add Your Do");
		form.appendChild(br);
		form.appendChild(addButton);
	}
	// button created


	function addTask(){
		var task = input.value;
	// this will capure the value of our box
		var list = document.getElementById("todolist");
	// This is our unordered list
		var listItem = document.createElement("li");
		listItem.setAttribute("class", "item");
		list.appendChild(listItem);
		listItem.innerHTML = task;
		input.value = "";
	}

	function removeTask(event){
		var target = event.target;
		if(target.className === "item"){
			target.setAttribute("class", "linethrough");
		} else if (target.className === "linethrough"){
			target.setAttribute("class", "item");
		}
	}

	// variables "add", "input" and "input" are here since their respective elements were created dynamically

	// Let's begin calling our functions in order of when we will need each one

	createDiv();
	createInput();
	createTest();
	createButton();

	const add = document.getElementById("add");
	const input = document.getElementById("input");
	const li = document.querySelectorAll(".item");

	add.onclick = function(){
		if(input.value !== ""){
	  addTask();
		}
	};

	todoParent.onclick = function(){
		removeTask(event);
	};


