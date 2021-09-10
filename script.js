const billInput = document.querySelector("#billInput");
const numPeople = document.querySelector("#numPeopleInput");
const amountOutput = document.querySelector("#amountOutput");
const totalOutput = document.querySelector("#totalOutput");
const tipBtns = document.querySelectorAll(".tipBtn");
const customTip = document.querySelector("#customPercentage");
const resetBtn = document.querySelector("#reset");

let billInputVal = "";
let numPeopleVal = 1;
let percentage = 0.15;

billInput.addEventListener("input", () => {
	billInputVal = billInput.value;
	calculate();
});

numPeople.addEventListener("input", () => {
	numPeopleVal = numPeople.value;
	calculate();
});

tipBtns.forEach(btn => {
	btn.addEventListener("click", toggle);
});

resetBtn.addEventListener("click", () => {
	reset();
});

function toggle(e) {
	tipBtns.forEach(btn => {
		btn.classList.remove("btn-active");
		if (e.target.innerHTML == btn.innerHTML) {
			if (e.target.id !== "customPercentage") {
				btn.classList.add("btn-active");
			}
			percentage = parseFloat(btn.innerHTML) / 100;
		}
	});
	if (billInputVal !== "") {
		calculate();
	}

	customTip.addEventListener("input", () => {
		percentage = parseFloat(customTip.value) / 100;
		calculate();
	});
}

function calculate() {
	if (numPeopleVal >= 1) {
		let tipAmount = (billInputVal * percentage) / numPeopleVal;
		let total = (billInputVal * (percentage + 1)) / numPeopleVal;
		amountOutput.textContent = `$${tipAmount.toFixed(2)}`;
		totalOutput.textContent = `$${total.toFixed(2)}`;
	}
}

function reset() {
	billInputVal = "";
	billInput.value = "";
	numPeopleInput.value = "";
	numPeopleVal = 1;
	customTip.value = "";
	percentage = 0.15;
	amountOutput.textContent = "$0.00";
	totalOutput.textContent = "$0.00";
	tipBtns.forEach(btn => {
		btn.classList.remove("btn-active");
	});
	tipBtns[2].classList.add("btn-active");
}
