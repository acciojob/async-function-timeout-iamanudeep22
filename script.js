//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	display(text.value, delay.value);
});

let display = async function(text, delay){
	let myPromise = new Promise(function(resolve){
		setTimeout(() => {
			resolve(text);
		}, delay)
	});

	document.getElementById("output").innerText = await myPromise;
}


