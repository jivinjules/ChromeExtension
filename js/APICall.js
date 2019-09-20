// "default_icon": "BitcoinCatJumpLogoInactive.png",   
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
var i = 0;
var currBlock = 0;

document.addEventListener("DOMContentLoaded", function (event) {
	chrome.browserAction.setIcon({path: {'38':'BitcoinCatJumpLogo2.png'}});
	event.preventDefault()
	updateHTML()
})

var updateHTML = function () {
	xhttp.open("GET", "https://chain.api.btc.com/v3/block/latest", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
		let y = x.data.height
		let z = parseInt(y)
		var currentBlockText = document.getElementById('currentBlock')
		currentBlockText.innerHTML = "Current Block: " + z
	}
}

var checkBlocks = setInterval(function () {

	var HTMLString = '<iframe width="400" height="330" src="https://www.youtube.com/embed/IQ8kUWOkqT0?autoplay=1&rel=0&end=6&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

	xhttp.open("GET", "https://chain.api.btc.com/v3/block/latest", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
		let y = x.data.height
		let z = parseInt(y)
		var currentBlockText = document.getElementById('currentBlock')
		currentBlockText.innerHTML = "Current Block: " + z
		if ((i != 0) && (currBlock != z)) {
			document.getElementById("PlayVid").innerHTML = HTMLString;
			setTimeout(function () {
				window.close()
			}, 10000)
		}
		currBlock = z
		i++;
	}
}, 5000);



