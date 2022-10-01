try {
    importScripts("/node_modules/crypto-js/crypto-js.js");
} catch (e) {
    console.error(e);
}
//global variable
password = null;

chrome.contextMenus.create({
    id: "encrypt-message",
    title: "Encrypt Message",
    contexts: ["selection"]
});
chrome.contextMenus.create({
    id: "decrypt-message",
    title: "Decrypt Message",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    let altered;
    switch (info.menuItemId) {
        case "encrypt-message":
            altered = CryptoJS.AES.encrypt(info.selectionText, password).toString();
            break;
        case "decrypt-message":
            altered = CryptoJS.AES.decrypt(info.selectionText, password).toString(CryptoJS.enc.Utf8);
            break;
        default:
            return;
  }

    chrome.tabs.sendMessage(tab.id, altered)
        .then(() => true, (e) => {
            //if script is not loaded
            return chrome.scripting.executeScript({target: { tabId: tab.id },  files: ["content-script.js"] })
                .then( () => chrome.tabs.sendMessage(tab.id, altered) );
        } )
        .then( () => { 
            //in case of any further operation. if not needed can be removed in the next refactor
         })
        .catch(e => console.error('error message-enc : '+ e));
});

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    if(message.passwordChanged != null){
        password = message.passwordChanged;
    }
});