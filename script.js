const changeTab = tab => {
	let e = tab.target.id
	if (e === 'Luca') {
		document.getElementById('tabPhil').style.display="none"
		document.getElementById('tabLuca').style.display="block"
	}
	if (e === 'Philippe') {
		document.getElementById('tabLuca').style.display="none"
		document.getElementById('tabPhil').style.display="block"
	}
}

document.getElementById('navBar').addEventListener(
	'click',
	e => changeTab(e)
	)
