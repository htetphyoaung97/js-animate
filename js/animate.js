let card = document.querySelector('.card');
let container = document.querySelector('.container');
let title = document.querySelector('.title');
let sneaker = document.querySelector('.sneaker img');
let purchase = document.querySelector('.purchase button');
let description = document.querySelector('.info h3');
let sizes = document.querySelector('.shooe-size')

container.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
	card.style.transition = 'none';
	title.style.transform = "translateZ(150px)";
	sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
	description.style.transform = "translateZ(125px)";
	purchase.style.transform = "translateZ(75px)";
	sizes.style.transform = "translateZ(100px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all .5s ease";
	card.style.transform = `rotateX(0deg) rotateY(0deg)`;
	title.style.transform = "translateZ(0px)";
	sneaker.style.transform = "translateZ(0px) rotateZ(0)";
	description.style.transform = "translateZ(0px)";
	purchase.style.transform = "translateZ(0px)";
	sizes.style.transform = "translateZ(0px)";
});