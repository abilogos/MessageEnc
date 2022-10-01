function replaceSelection(text){
console.log(window);
console.log(text);
    // Hide the event from the page to prevent tampering.
    // event.stopImmediatePropagation();

}

// [a,b,c]
//browser.runtime.onMessage.addListener((text) => {
    // let selected = editable ? document.activeElement : window.getSelection().getRangeAt(0);
//    console.log(window.getSelection());
//    console.log(text);
	// return Promise.resolve(true);

	//div.style.top = div.style.left = "0px";
	//div.children[1].removeAttribute("style");
	//div.children[1].scrollTop = 0;
	
	/*div.children[1].firstChild.textContent = text;*/
	// div.children[1].style.width = div.children[1].offsetWidth + "px";
    // div.children[1].style.height = Math.min(root.clientHeight - 25, div.children[1].offsetHeight) + "px";
	
	/*let max_x = root.clientWidth - div.offsetWidth;
	let max_y = root.clientHeight - div.offsetHeight;
	let position = frame ? { left: max_x / 2, bottom: max_y / 2 - 10 } :
		editable ? document.activeElement.getBoundingClientRect() :
		window.getSelection().getRangeAt(0).getBoundingClientRect();
	div.style.top = Math.max(0, Math.min(position.bottom + 10, max_y)) + "px";
	div.style.left = Math.max(0, Math.min(position.left, max_x)) + "px";
	
	div.style.visibility = "visible";
	document.addEventListener("click", div_hide, { once: true });
	document.activeElement.blur();
	return Promise.resolve(true);*/
// });