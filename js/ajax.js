function ajaxTest(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //document.getElementById("demo").innerHTML = this.responseText;
	    alert("Debug from https://mywebguard-host.github.io: ajaxTest('"+url+"')="+this.responseText);
    }
  };
  try{
    xhttp.open("GET", url, true);
    xhttp.send();  
  }catch{
    alert("Debug from https://mywebguard-host.github.io: ajaxTest('"+url+"') is failed!");
  }
}
ajaxTest("index.html");