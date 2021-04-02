let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let Hello = document.createElement("div");
	Hello.innerHTML = "Hello World";
	Hello.style.background = "yellow";
	document.body.appendChild(Hello);
});
