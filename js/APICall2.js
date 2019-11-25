var xhttp = new XMLHttpRequest();
var i = 0;
var currBlock = 0;

document.addEventListener("DOMContentLoaded", function (event) {
	updateHTML()
})

var updateHTML = function () {

	//xhttp.open("GET", "https://chain.api.btc.com/v3/block/latest", true)
	xhttp.open("GET", "https://api.bitaps.com/ltc/v1/blockchain/block/last", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
//		let y = x.data.height
		let y = x.data.block.height
		let z = parseInt(y)
		console.log(z)
	}
}

var checkBlocks = setInterval(function () {

	var HTMLString = '<iframe width="400" height="330" src="https://www.youtube.com/embed/IQ8kUWOkqT0?autoplay=1&rel=0&end=6&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

	//xhttp.open("GET", "https://chain.api.btc.com/v3/block/latest", true)
	xhttp.open("GET", "https://api.bitaps.com/ltc/v1/blockchain/block/last", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
//		let y = x.data.height
		let y = x.data.block.height
		let z = parseInt(y)
		if ((i != 0) && (currBlock != z)) {
			console.log("CAT SHOULD JUMP NOW!!!")
			// window.open("backgroundPopup.html", "Bitcoin Cat Jumps Here");
			openWindow()
//			setInterval(function () {
	        setTimeout(function () {
				closeWindow()}, 10000)
		}
		currBlock = z
		i++;
	}
}, 5000);

function openWindow() {
	catWindow = window.open("backgroundPopup.html", "Bitcoin Cat Jumps Here");
}

function closeWindow() {
	catWindow.close()
}
