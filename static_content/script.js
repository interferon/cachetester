var xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url = 'phones';


xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
		if(this.status == 200) {
			console.log(xmlhttp.responseText);
		}
	}
	else{
		return;
	}
};


document.getElementById("sendreq").addEventListener('click', function(){
	xmlhttp.open(method, url, true);
	xmlhttp.send();
})