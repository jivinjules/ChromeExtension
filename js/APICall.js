//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
var i = 0;
var currBlock = 0;

var checkBlocks = setInterval(function () {

	var HTMLString = '<iframe width="560" height="330" src="https://www.youtube.com/embed/IQ8kUWOkqT0?autoplay=1&rel=0&end=6&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

	xhttp.open("GET", "https://chain.api.btc.com/v3/block/latest", true)
	xhttp.send();
	xhttp.onload = function () {
		let x = JSON.parse(this.responseText)
		let y = x.data.height
		let z = parseInt(y)
		if ((i != 0) && (currBlock != z)) {
			document.getElementById("PlayVid").innerHTML = HTMLString;
			//console.log(z)
		}
		currBlock = z
		i++;
	}
}, 60000);



