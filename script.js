let groceryData = [];

function listGrocery(){
	document.getElementById("main").innerHTML=groceryData.toString();
}



function addToEnd(){
	groceryList.push(prompt("Enter grocery name"));
	document.write(groceryData + "<br />");
	listGrocery();
}
function removeFromEnd(){
	//groceryList.pop();
	alert("Removing "+groceryList.pop());
	listGrocery();
}
function addToStart(){
	groceryList.unshift(prompt("Enter grocery name"));
	document.write(groceryData + "<br />");
	listGrocery();
}
function removeFromStart(){
	alert("Removing "+groceryList.shift());
	//groceryList.shift();
	listGrocery();
}


