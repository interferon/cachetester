var xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url = '/static_content/phone.json';

xmlhttp.open(method, url, true);
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState !== XMLHttpRequest.DONE) {
        return;
    }
    if (xmlhttp.status !== 200) {
        return;
    }
    console.log(xmlhttp.responseText);
};
xmlhttp.send();