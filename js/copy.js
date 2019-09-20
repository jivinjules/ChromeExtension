document.addEventListener("DOMContentLoaded", function (event) {
    console.log('YO')
    var copy = document.getElementById('copy')
    copy.addEventListener('click', function (event) {
        copyTextToClipboard('03a8355790b89f4d96963019eb9413b9a2c884691837ac976bacfe25a5212892d7@eeyyz3xtzhb4mvnwztykw3gqjrbvtkturddbxfkbs6lstpcn5imgxtyd.onion:9735')
        document.getElementById('footer').innerHTML = 'Connection code copied successfully!'
        setTimeout(function () {
            document.getElementById('footer').innerHTML = ''

        }, 4000)
    })
    var close = document.getElementById('close')
    close.addEventListener('click', function (event) {
        event.preventDefault()
        chrome.browserAction.setIcon({path: {'38':'BitcoinCatJumpLogo1.png'}});
        setTimeout(function () {
        window.close()
    }, 500)
    })
});

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(
        function () {        
            console.log('Lightning connection code copied')
        })


}