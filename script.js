//your JS code here. If required.
function remove(){
	const colorSelect = document.getElementById('colorSelect')
	// console.log(colorSelect.value)
	colorSelect.querySelectorAll('option').forEach(e=>{
		if(colorSelect.value==e.value) e.remove()
	})
}