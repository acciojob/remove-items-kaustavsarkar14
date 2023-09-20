//your JS code here. If required.
function remove(){
	const colorSelect = document.getElementById('colorSelect')
	console.log(colorSelect.options[colorSelect.selectedIndex])
	colorSelect.options[colorSelect.selectedIndex].remove()
}