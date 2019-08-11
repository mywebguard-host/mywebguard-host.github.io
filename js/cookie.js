if (document.cookie.indexOf("mywebguard")>0) {
	alert("Debug from https://mywebguard-host.github.io: document.cookie="+
			document.cookie);
}else
	document.cookie="mywebguard=mywebguard-cookie-test";
