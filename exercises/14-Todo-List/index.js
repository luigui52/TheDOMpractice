// Your code here
let texto = document.querySelector("#addToDo");
texto.addEventListener("keypress", function(e) {
	var keycode = e.keyCode ? e.keyCode : e.which;
	if (keycode == 13) {
		let valor = document.getElementById("addToDo").value;
		let elemli = document.createElement("LI");

		elemli.innerHTML = `<span><i class="fa fa-trash"> ${valor}`;
		document.querySelector("ul").appendChild(elemli);
	}
});

const lis = [...document.querySelectorAll("li")];

for (let li of lis) {
	li.addEventListener("click", function() {
		this.parentNode.removeChild(this);
	});
}
