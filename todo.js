function Form_Processes() {

	this.count = 0;
	this.input_id = generate_id();

	this.addToList = function() {
		var itemToAdd = document.getElementById(this.input_id).value;
		if(!(itemToAdd === "")) {
			this.count += 1;
			var list_tag = document.getElementById('list');
			var li_tag = document.createElement('li');
			li_tag.id = "li_" + this.count;
			var li_text = document.createTextNode("- " + itemToAdd);
			li_tag.appendChild(li_text);
			list_tag.appendChild(li_tag);

			//clear textbox for next input
			document.getElementById(this.input_id).value = "";
		}
	}

	this.removeFromList = function() {
		var numsOfElements = document.getElementById('list').childElementCount;
		if(numsOfElements > 0) {
			var itemToRemove = document.getElementById('li_' + this.count);
			itemToRemove.outerHTML = "";
			this.count -= 1;
		} else {
			console.log('ERROR');
		}
	
	}

}

var f = new Form_Processes();

function execute(x) {
	if(x == 1) {
		f.addToList()
	} else if(x == 2) {
		f.removeFromList();
	}
}

function load_form() {
	var x = document.getElementById('in');

	//create input tag
	var input_tag = document.createElement('input');
	input_tag.type = "text";
	input_tag.name = "user_input";
	input_tag.id = f.input_id;
	input_tag.placeholder = "Enter here...";

	x.appendChild(input_tag);

	//insert line break
	var break_tag = document.createElement('br');
	x.appendChild(break_tag);

	var button1 = createButton("button", "add_list", 1, "Add To List");
	var button2 = createButton("button", "remove_list", 2, "Remove From List");

	x.appendChild(button1);
	x.appendChild(button2);

}

function createButton(type, name, e, text) {
	//create buttons
	var button_tag = document.createElement('button');
	button_tag.type = type;
	button_tag.name = name;
	button_tag.onclick = function() { execute(e); }

	var button_text = document.createTextNode(text);
	button_tag.appendChild(button_text);

	return button_tag;
}
