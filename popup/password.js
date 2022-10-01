document.getElementById('password').addEventListener('change', function(event){
    chrome.runtime.sendMessage({'passwordChanged' : event.target.value});
});