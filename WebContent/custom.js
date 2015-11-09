function loadSubMenu(element) {
	dimAllMenu();
	document.getElementById(element).className = "active";

	// to load sub menu
	hideAllSubMenus();
	if (document.getElementById('sub' + element) != null) {
		document.getElementById('sub' + element).style.display = "block";
	}
	
	//to highlight appropriate sub menu and iframe
	fromSubMenu(element, 1);
}

function dimAllMenu() {
	for ( var int = 1; int <= 10; int++) {
		if (document.getElementById("menu" + int) != null) {
			document.getElementById("menu" + int).className = "";
		} else {
			break;
		}
	}
}

function fromSubMenu(menu, no) {
	dimAllSubMenu(menu);
	document.getElementById(menu + '.' + no).className = "active";
	loadIFrame(menu + '.' + no);
}

function dimAllSubMenu(menu) {
	for ( var int = 1; int <= 10; int++) {
		if (document.getElementById(menu + '.' + int) != null) {
			document.getElementById(menu + '.' + int).className = "";
		} else {
			break;
		}
	}
}

function hideAllSubMenus() {
	for ( var int = 1; int <= 10; int++) {
		if (document.getElementById('submenu' + int) != null) {
			document.getElementById('submenu' + int).style.display = "none";
		} else {
			break;
		}
	}
}

function loadIFrame(menuno) {
	if (menuno == 'menu1.1') {
		assignValue("home_body.jsf");
	} else if (menuno == 'menu2.1') {
		assignValue("buy_property.jsf");
	} else if (menuno == 'menu2.2') {
		assignValue("sell_property.jsf");
	} else {
		assignValue("home_body.jsf");
	}
}

function assignValue(jspName) {
	var string1 = "<iframe src='";
	var string2 = "' height='900px;' id='frame' name='frame' width='564px;' scrolling='no' frameborder='0'></iframe>";
	document.getElementById("jsfLoader").innerHTML = string1 + jspName
			+ string2;
}