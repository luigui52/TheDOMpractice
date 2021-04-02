window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (let i = 0; i < countries.length; i++) {
		var elem = document.createElement("option");
		elem.innerHTML = countries[i];
		document.querySelector("#mySelect").appendChild(elem);
	}
};

document.getElementById("mySelect").addEventListener("change", function() {
	let aux = document.querySelector("#mySelect");
	let indice = aux.selectedIndex;
	let valor = aux.options[indice].value;
	//alert("cambio!!!!");
	alert(valor);
});
