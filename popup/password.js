document.getElementById('password').addEventListener('change', async function(event){
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    chrome.runtime.sendMessage({
        'passwordChanged' : event.target.value,
        'tabId': tab.id
    });
});