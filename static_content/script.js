// **************************
var xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url1 = 'phones',
    url2 = 'cars',
    url3 = 'boots';



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


document.getElementById("sendreq1").addEventListener('click', function(){
	xmlhttp.open(method, url1, true);
	xmlhttp.send();
});

document.getElementById("sendreq2").addEventListener('click', function(){
	xmlhttp.open(method, url2, true);
	xmlhttp.send();
});

document.getElementById("sendreq3").addEventListener('click', function(){
	xmlhttp.open(method, url3, true);
	xmlhttp.send();
});