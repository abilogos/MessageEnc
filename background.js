/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
try {
    importScripts("/node_modules/crypto-js/crypto-js.js");
} catch (e) {
    console.error(e);
}
//global variable
password = [];

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

chrome.contextMenus.onClicked.addListener( async (info, tab) => {
    let altered;
    let tabId = await getCurrentTabId();
    if(typeof password[tabId] === 'undefined'){
        //TODO: alert on no password from content-script
        return;
    }
    
    switch (info.menuItemId) {
        case "encrypt-message":
            altered = CryptoJS.AES.encrypt(info.selectionText, password[tabId]).toString();
            break;
        case "decrypt-message":
            altered = CryptoJS.AES.decrypt(info.selectionText, password[tabId]).toString(CryptoJS.enc.Utf8); 
            if(altered.length == 0 ){
                return;
            }
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
        password[message.tabId] = message.passwordChanged;
    }
});

async function getCurrentTabId(){
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    return tab.id
}