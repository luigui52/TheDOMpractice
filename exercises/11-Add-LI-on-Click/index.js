let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let place = document.querySelector("#myList");
	let newLi = document.createElement("li");
	newLi.innerHTML = "Fourth element";
	place.appendChild(newLi);
});

// let Hello = document.createElement("div");
// 	Hello.innerHTML = "Hello World";
// 	Hello.style.background = "yellow";
// 	document.body.appendChild(Hello);
