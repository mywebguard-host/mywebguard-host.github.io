if (localStorage.getItem('mywebguard')) {
	//alert("Debug from https://mywebguard-host.github.io: localStorage.getItem('mywebguard')="+
	//		localStorage.getItem('mywebguard'));
}else{
	localStorage.setItem('mywebguard', 'localStorage-test');
}