if (navigator.appName == "Opera") {
	var st = navigator.userAgent.split("Version/");
	if (st[1] != null) {
		if (st[1] < 11) {
			document.write("<style type='text/css'>");
			document
					.write("#sc-menu li a,.tset a,.email1,.f-tabb,.f-tabb a{font-family: Tahoma;font-size:11px;text-transform:normal;font-weight:bold; letter-spacing:0;}");
			document
					.write(".yahoo-con, .tabyahoo {margin-left: 90px;}  .tabwaysms {padding:8px 15px 5px 11px;} .tabgtalk,.gtalk-con{margin-left: 125px;} .fb-con,.tabfb {margin-left: 160px;}.tabfeedback {margin-left:630px;} #feedback {margin-left:392px; margin-top:-329px;}.tabinvite{margin-left:801px;}.invite-con {margin-left:603px;}");
			document.write("</style>");
		}
	} else {
		document.write("<style type='text/css'>");
		document
				.write("#sc-menu li a,.tset a,.email1,.f-tabb,.f-tabb a{font-family: Tahoma;font-size:11px;text-transform:normal;font-weight:bold; letter-spacing:0;}");
		document
				.write(".yahoo-con, .tabyahoo {margin-left: 90px;}  .tabwaysms {padding:8px 15px 5px 11px;} .tabgtalk,.gtalk-con{margin-left: 125px;} .fb-con,.tabfb {margin-left: 160px;}.tabfeedback {margin-left:630px;} #feedback {margin-left:392px; margin-top:-329px;}.tabinvite{margin-left:801px;}.invite-con {margin-left:603px;}");
		document.write("</style>");
	}
} else {
	var st = navigator.userAgent.split("Chrome");
	if (st[1] != undefined) {
		document.write("<style type='text/css'>");
		document
				.write("#sc-menu li a,.tset a,#header .tset .email1,.f-tabb,.f-tabb a,#header .tset a.icon{font-family: Tahoma;font-size:11px;text-transform:normal;font-weight:bold; letter-spacing:0;text-shadow:0 0 0 #000;}");
		document.write("</style>");
	}
}

if (navigator.appName == "Microsoft Internet Explorer") {
	document
			.write("<script type='text/javascript' src='business_navigate.js'></script>");
	document
			.write("<script type='text/javascript'>window.fbAsyncInit = function() {FB.init({appId: '83d2e0c9648f2b1ccf1abf35f2c08593', status: true, cookie: true,xfbml: true});faceb=1;};<\/script>");
}
function logout2() {
	try {
		unloadHandler();
		FB.logout();
	} catch (e) {
	}
	try {
		var url = "./LogOut";
		var folderName = "inbox";
		var paramData = "folder=" + myEncode(folderName);
		var callback3 = {
			success : function(o) {
				if (o.responseText != undefined) {
					try {
						finsh2();
					} catch (e) {
						alert("exc" + e);
					}
				}
			},
			failure : function(o) {
				finsh2();
			},
			argument : [],
			timeout : 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback3,
				paramData);
	} catch (e) {
		finsh2();
	}
}
function finsh2() {
	window.location = "jsp/logout.jsp";
}
function dspemail() {
	document.getElementById("logemail").disabled = false;
	document.getElementById("logemail1").style.display = "none";
	document.getElementById("logemail2").style.display = "block";
}
function emailCheck(emailStr) {
	var checkTLD = 1;
	var knownDomsPat = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
	var emailPat = /^(.+)@(.+)$/;
	var specialChars = "\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
	var validChars = "\[^\\s" + specialChars + "\]";
	var quotedUser = "(\"[^\"]*\")";
	var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
	var atom = validChars + '+';
	var word = "(" + atom + "|" + quotedUser + ")";
	var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
	var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
	var matchArray = emailStr.match(emailPat);
	if (matchArray == null) {
		alert("Email address seems incorrect (check @ and .'s)");
		return false;
	}
	var user = matchArray[1];
	var domain = matchArray[2];
}

function import3(provider_box, pwd, email, type) {
	pwd = pwd.replace("%", "%25");
	pwd = pwd.replace("&", "%26");
	document.getElementById("qsendinvt").value = "Send Invitation";
	document.getElementById("qsendinvt").disabled = false;
	document.getElementById("namesms").style.display = "none";
	var paramData = "HiddenAction=InviteContacts&email_box=" + email;
	paramData += "&password_box=" + pwd;
	paramData += "&provider_box=" + provider_box;
	var url = "./Subscriber";
	var callback = {
		success : function(o) {
			document.getElementById("chkall").checked = true;
			document.getElementById("chknone").checked = false;
			document.getElementById("chktoggle").checked = false;
			if (o.responseText == "Login failed") {
				alert("Wrong email or Password. Please try again");
				document.getElementById("gsub").style.display = "none";
				document.getElementById("ysub").style.display = "none";
			} else if (o.responseText == "Login failed") {
				alert("Wrong email or Password. Please try again");
				document.getElementById("gsub").style.display = "none";
				document.getElementById("ysub").style.display = "none";
			} else {
				document.getElementById("invitesent").style.display = "block";
				document.getElementById("invitesent1").style.display = "none";
				document.getElementById("invitesent2").innerHTML = "Invite Contacts";
				document.getElementById("QSPOPUP").style.display = "block";
				document.getElementById("qpopul").innerHTML = "";
				if (type == "g") {
					document.getElementById("incontname").innerHTML = "Gmail Contacts";
				} else if (type == "y") {
					document.getElementById("incontname").innerHTML = "Yahoo Contacts";
				}
				document.getElementById("qpopul").innerHTML = o.responseText;
				var yresp1 = o.responseText.split("<li>");
				inflen = yresp1.length;
				window.scroll(0, 0);
				document.getElementById("gsub").style.display = "none";
				document.getElementById("ysub").style.display = "none";
				botoomtabdisp('invitetab1', 'invitetab2', 'none', 'test');
			}
			document.getElementById("frame").contentWindow.clsloading();
		},
		failure : function(o) {
		},
		argument : [],
		timeout : 300000
	}
	var request = YAHOO.util.Connect.asyncRequest('POST', url, callback,
			paramData);
}
var email1 = "";
function import1(type) {
	if (type == "g") {
		if (document.getElementById("guid").value == ""
				|| document.getElementById("guid").value == "username") {
			alert("Please Enter Emailid");
			document.getElementById("guid").focus();
			return false;
		}
		var email = document.getElementById("guid").value;
		var pwd = document.getElementById("gpwd").value;
		var provider_box = "gmail";
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) != true) {
			alert("Invalid E-mail Address! Please Re-Enter.");
			document.getElementById("guid").focus();
			return;
		}
		if (document.getElementById("gpwd").value == ""
				|| document.getElementById("gpwd").value == "*******") {
			alert("Please Enter Password");
			document.getElementById("gpwd").focus();
			return false;
		}
		email1 = email;
		document.getElementById("gsub").style.display = "block";
	}
	if (type == "y") {
		if (document.getElementById("yuid").value == ""
				|| document.getElementById("yuid").value == "username") {
			alert("Please Enter Emailid");
			document.getElementById("yuid").focus();
			return false;
		}
		var email = document.getElementById("yuid").value;
		var pwd = document.getElementById("ypwd").value;
		var provider_box = "yahoo";
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) != true) {
			alert("Invalid E-mail Address! Please Re-Enter.");
			document.getElementById("yuid").focus();
			return;
		}
		if (document.getElementById("ypwd").value == ""
				|| document.getElementById("ypwd").value == "*******") {
			alert("Please Enter Password");
			document.getElementById("ypwd").focus();
			return false;
		}
		email1 = email;
		document.getElementById("ysub").style.display = "block";
	}
	document.getElementById("namesms").style.display = "none";
	var paramData = "HiddenAction=InviteContacts&email_box=" + email;
	paramData += "&password_box=" + pwd.replace("%", "%25");
	paramData += "&provider_box=" + provider_box;
	var url = "./Subscriber";
	var callback = {
		success : function(o) {
			document.getElementById("chkall").checked = true;
			document.getElementById("chknone").checked = false;
			document.getElementById("chktoggle").checked = false;
			if (o.responseText == "Login failed") {
				alert("Wrong email or Password. Please try again");
				document.getElementById("gsub").style.display = "none";
				document.getElementById("ysub").style.display = "none";
			} else if (o.responseText == "Login failed") {
				alert("Wrong email or Password. Please try again");
				document.getElementById("gsub").style.display = "none";
				document.getElementById("ysub").style.display = "none";
			} else {
				document.getElementById("invitesent").style.display = "block";
				document.getElementById("invitesent1").style.display = "none";
				document.getElementById("invitesent2").innerHTML = "Invite Contacts";
				document.getElementById("QSPOPUP").style.display = "block";
				document.getElementById("qpopul").innerHTML = "";
				if (type == "g") {
					document.getElementById("incontname").innerHTML = "Gmail Contacts";
				} else if (type == "y") {
					document.getElementById("incontname").innerHTML = "Yahoo Contacts";
				}
				document.getElementById("qpopul").innerHTML = o.responseText;
				var yresp1 = o.responseText.split("<li>");
				inflen = yresp1.length;
				window.scroll(0, 0);
				document.getElementById("gsub").style.display = "none";
				document.getElementById("ysub").style.display = "none";
				botoomtabdisp('invitetab1', 'invitetab2', 'none', 'test');
			}
		},
		failure : function(o) {
		},
		argument : [],
		timeout : 300000
	}
	var request = YAHOO.util.Connect.asyncRequest('POST', url, callback,
			paramData);
}
var inflen = 0;
function sel(opt) {
	if (opt == "All") {
		if (document.getElementById("chkall").checked == true) {
			document.getElementById("chkall").checked = true;
			document.getElementById("chknone").checked = false;
			document.getElementById("chktoggle").checked = false;
			var chk = "";
			for ( var i = 0; i < inflen - 1; i++) {
				chk = "cheid" + i;
				document.getElementById(chk).checked = true;
			}
		}
	} else if (opt == "None") {
		if (document.getElementById("chknone").checked == true) {
			document.getElementById("chkall").checked = false;
			document.getElementById("chknone").checked = true;
			document.getElementById("chktoggle").checked = false;
			var chk = "";
			for ( var i = 0; i < inflen - 1; i++) {
				chk = "cheid" + i;
				document.getElementById(chk).checked = false;
			}
		}
	} else if (opt == "Toggle") {
		if (document.getElementById("chktoggle").checked == true) {
			document.getElementById("chkall").checked = false;
			document.getElementById("chknone").checked = false;
			document.getElementById("chktoggle").checked = true;
			var chk = "";
			for ( var i = 0; i < inflen - 1; i++) {
				chk = "cheid" + i;
				if (document.getElementById(chk).checked == true) {
					document.getElementById(chk).checked = false;
				} else {
					document.getElementById(chk).checked = true;
				}
			}
		}
	}
}
function closeimp() {
	document.getElementById("QSPOPUP").style.display = "none";
	document.getElementById("qsending").style.display = "none";
	document.getElementById("gsub").style.display = "none";
	document.getElementById("ysub").style.display = "none";
	document.getElementById("guid").value = "username";
	document.getElementById("gpwd").value = "*******";
	document.getElementById("yuid").value = "username";
	document.getElementById("ypwd").value = "*******";
}
function seninvite() {
	document.getElementById("qsending").style.display = "block";
	var mailtousr = "";
	for ( var i = 0; i < inflen - 1; i++) {
		var ifid = "cheid" + i;
		if (document.getElementById(ifid).checked) {
			var indiv = "divid" + i;
			mailtousr += document.getElementById(indiv).innerHTML + ",";
		}
	}
	if (mailtousr == "") {
		document.getElementById("qsending").style.display = "none";
		document.getElementById("qsendinvt").value = "Send Invitation";
		document.getElementById("qsendinvt").disabled = false;
		alert("Please select atleast one Contact");
		return false;
	}
	document.getElementById("qsendinvt").value = "Progressing..";
	document.getElementById("qsendinvt").disabled = true;
	var paramData = "HiddenAction=Insertinvite&email=" + email1 + "&mailtousr="
			+ mailtousr;
	var url = "./Subscriber";
	var callback = {
		success : function(o) {
			document.getElementById("QSPOPUP").style.display = "none";
			document.getElementById("qsending").style.display = "none";
			document.getElementById("guid").value = "username";
			document.getElementById("gpwd").value = "*******";
			document.getElementById("yuid").value = "username";
			document.getElementById("ypwd").value = "*******";
			document.getElementById("gsub").style.display = "none";
			document.getElementById("ysub").style.display = "none";
			document.getElementById("qsendinvt").value = "Send Invitation";
			document.getElementById("qsendinvt").disabled = false;
			alert("Your Invitations have been sent successfully.");
		},
		failure : function(o) {
			document.getElementById("qsendinvt").value = "Send Invitation";
			document.getElementById("qsendinvt").disabled = false;
		},
		argument : [],
		timeout : 60000
	}
	var request = YAHOO.util.Connect.asyncRequest('POST', url, callback,
			paramData);
}
function clssmsdiv() {
	document.getElementById("wypoupup").style.display = "none";
}

function dismouout() {
	document.getElementById("settings-pop").style.display = "block";
	document.getElementById("settingsopo").className = "email";
}
function dismouovr() {
	document.getElementById("settings-pop").style.display = "none";
	document.getElementById("settingsopo").className = "email1";
}
function logout1() {
	try {
		unloadHandler();
		FB.logout();
	} catch (e) {
	}
	try {
		var url = "./LogOut";
		var folderName = "inbox";
		var paramData = "folder=" + myEncode(folderName);
		var callback3 = {
			success : function(o) {
				if (o.responseText != undefined) {
					try {
						finsh1();
					} catch (e) {
						alert("exc" + e);
					}
				}
			},
			failure : function(o) {
				finsh1();
			},
			argument : [],
			timeout : 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback3,
				paramData);
	} catch (e) {
		finsh1();
	}
}
function finsh1() {
	window.location = "jsp/logout.jsp";
}

if (navigator.appName == "Opera") {
	var st = navigator.userAgent.split("Version/");
	if (st[1] != null) {
		if (st[1] < 11) {
			document.write("<style type='text/css'>");
			document
					.write("#sc-menu li a,.tset a,.email1,.f-tabb,.f-tabb a{font-family: Tahoma;font-size:11px;text-transform:normal;font-weight:bold; letter-spacing:0;}");
			document
					.write(".yahoo-con, .tabyahoo {margin-left: 90px;}  .tabwaysms {padding:8px 15px 5px 11px;} .tabgtalk,.gtalk-con{margin-left: 125px;} .fb-con,.tabfb {margin-left: 160px;}.tabfeedback {margin-left:630px;} #feedback {margin-left:392px; margin-top:-329px;}.tabinvite{margin-left:801px;}.invite-con {margin-left:603px;}");
			document.write("</style>");
		}
	} else {
		document.write("<style type='text/css'>");
		document
				.write("#sc-menu li a,.tset a,.email1,.f-tabb,.f-tabb a{font-family: Tahoma;font-size:11px;text-transform:normal;font-weight:bold; letter-spacing:0;}");
		document
				.write(".yahoo-con, .tabyahoo {margin-left: 90px;}  .tabwaysms {padding:8px 15px 5px 11px;} .tabgtalk,.gtalk-con{margin-left: 125px;} .fb-con,.tabfb {margin-left: 160px;}.tabfeedback {margin-left:630px;} #feedback {margin-left:392px; margin-top:-329px;}.tabinvite{margin-left:801px;}.invite-con {margin-left:603px;}");
		document.write("</style>");
	}
} else {
	var st = navigator.userAgent.split("Chrome");
	if (st[1] != undefined) {
		document.write("<style type='text/css'>");
		document
				.write("#sc-menu li a,.tset a,#header .tset .email1,.f-tabb,.f-tabb a,#header .tset a.icon{font-family: Tahoma;font-size:11px;text-transform:normal;font-weight:bold; letter-spacing:0;text-shadow:0 0 0 #000;}");
		document.write("</style>");
	}
}