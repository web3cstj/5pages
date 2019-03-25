/*jslint browser:true, esnext:true*/
class Folding {
	static load() {
		if (location.search) {
			var elements = location.search.substr(1).split("&");
			elements.forEach(function (e) {
				var bouton = document.querySelector("#" + e);
				if (bouton) {
					bouton.checked = true;
				}
				document.querySelector("table.cinqpages").classList.add(e);
			});
		}
		this.initToggle();
		this.initToggleColonne();
	}
	static initToggle() {
		var elements = document.querySelectorAll("tr");
		elements.forEach(function (e) {
			e.addEventListener("click", this.evtToggle);
		}, this);
	}
	static initToggleColonne() {
		var elements = document.querySelectorAll("thead th[class]");
		elements.forEach(function (e) {
			e.addEventListener("click", this.evtToggleColonne);
		}, this);
	}
	static evtToggle() {
		this.classList.toggle("on");
	}
	static evtToggleColonne() {
		this.closest("table").classList.toggle(this.className);
	}
	static init() {
		window.addEventListener("load", function () {
			Folding.load();
		});

	}
}
Folding.init();
