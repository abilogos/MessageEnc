/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
document.getElementById('password').addEventListener('change', async function(event){
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    chrome.runtime.sendMessage({
        'passwordChanged' : event.target.value,
        'tabId': tab.id
    });
});