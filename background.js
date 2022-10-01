browser.contextMenus.create({
    id: "encrypt-message",
    title: "Encrypt Message",
    contexts: ["selection"],
    // onClick: (info, tab) => {
    //     let message = [text, info.frameId > 0, info.editable];
    //     browser.tabs.sendMessage(tab.id, message)
    //         .then(() => true, (e) => {
    //             //if script is not loaded
    //             return browser.tabs.executeScript(tab.id, { file: "content-script.js" })
    //                 .then( () => browser.tabs.sendMessage(tab.id, message) );
    //         } )
    //         .then( () => { console.log('2r'); })
    //         .catch(e => console.error('error message-enc : '+ e));
    // }
});
browser.contextMenus.create({
    id: "decrypt-message",
    title: "Decrypt Message",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    let text;
    switch (info.menuItemId) {
        case "encrypt-message":
            // console.log(info.selectionText);
            text = 'ff';
            break;
        case "decrypt-message":
            // console.log(info.selectionText);
            break;
        default:
            return;
  }
  
/*    let message = [text, info.frameId > 0, info.editable];
    browser.tabs.sendMessage(tab.id, text)
        .then(() => true, (e) => {
            //if script is not loaded
            return browser.tabs.executeScript(tab.id, { file: "content-script.js" })
                .then( () => browser.tabs.sendMessage(tab.id, message) );
        } )
        .then( () => { console.log('2r'); })
        .catch(e => console.error('error message-enc : '+ e));*/
  
  const code = "replaceSelection(" + "'test"+info.selectionText + "');";
  browser.tabs.executeScript({
            //check function has been defined
            code: "typeof replaceSelection === 'function';",
          }).then((results) => {
            //if function has not been defined, load the content script
            if (!results || results[0] !== true) {
                return browser.tabs.executeScript(tab.id, {
                    file: "content-script.js",
                });
            }
        }).then(() => {
            //exec the code in the content-script
            return browser.tabs.executeScript(tab.id, {
                code,
            });
        }).catch((error) => {
            console.error("Failed to modify text: " + error);
        });
});