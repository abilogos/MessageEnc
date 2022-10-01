/**
 * replace Selected Text in the browser
 *
 * @author https://stackoverflow.com/a/3997896/9287628
 * @param  string replacementText
 * @return void
 */
function replaceSelectedText(replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}

chrome.runtime.onMessage.addListener((text, sender, sendResponse) => {
    replaceSelectedText(text);
	sendResponse({status: 'ok'});
 });