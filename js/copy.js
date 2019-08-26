// function connect() {
//     console.log("HI")
//     // var connect = document.getElementById('copy')
//     const connectCode = "03a8355790b89f4d96963019eb9413b9a2c884691837ac976bacfe25a5212892d7@99.71.113.187:9735"
//     connectCode.select();
//     connect.setSelectionRange(0, 99999)
//     document.execCommand('copy');
//     alert(`Copied ${connectCode}`)
// }

document.addEventListener("DOMContentLoaded", function (event) {
    console.log('HI')
    var copy = document.getElementById('copy')
    copy.addEventListener('click', function (event) {
        copyTextToClipboard('03a8355790b89f4d96963019eb9413b9a2c884691837ac976bacfe25a5212892d7@99.71.113.187:9735')
    })
});

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(
        function () {
            console.log('Lightning connection code copied')
        }
    )
}