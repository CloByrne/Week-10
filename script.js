let arr=[3, 7, 9, 35, 97, 56, 70, 100, 95, 1000, 78945, 45, 1];
function go(){
	for(i=0;i<arr.length;i++){
		document.getElementById("array").innerHTML+=(arr[i]+", ");
	}
}
function big(){
	var largest = arr[0];
	for(var i=0;i<arr.length;i++){
		if(largest<arr[i]){
			largest=arr[i];
		}
	}
	document.getElementById("large").innerHTML+=(largest);
}


